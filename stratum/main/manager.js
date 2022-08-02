const Algorithms = require('./algorithms');
const Template = require('./template');
const events = require('events');
const utils = require('./utils');

////////////////////////////////////////////////////////////////////////////////

// Main Manager Function
const Manager = function(config, configMain) {

  const _this = this;
  this.config = config;
  this.configMain = configMain;

  // Job Variables
  this.validJobs = {};
  this.jobCounter = utils.jobCounter();
  this.currentJob = null;

  // ExtraNonce Variables
  this.extraNonceCounter = utils.extraNonceCounter(4);
  this.extraNoncePlaceholder = Buffer.from('f000000ff111111f', 'hex');
  this.extraNonce2Size = _this.extraNoncePlaceholder.length - _this.extraNonceCounter.size;

  // Check if New Block is Processed
  this.handleUpdates = function(rpcData) {

    // Build New Block Template
    const tmpTemplate = new Template(
      _this.jobCounter.next(),
      _this.config,
      Object.assign({}, rpcData),
      _this.extraNoncePlaceholder);

    // Update Current Template
    _this.currentJob = tmpTemplate;
    _this.emit('manager.block.updated', tmpTemplate);
    _this.validJobs[tmpTemplate.jobId] = tmpTemplate;
    return true;
  };

  // Check if New Block is Processed
  this.handleTemplate = function(rpcData, newBlock) {

    // If Current Job !== Previous Job
    let isNewBlock = _this.currentJob === null;
    if (!isNewBlock && rpcData.height >= _this.currentJob.rpcData.height &&
        ((_this.currentJob.rpcData.previousblockhash !== rpcData.previousblockhash) ||
        (_this.currentJob.rpcData.bits !== rpcData.bits))) {
      isNewBlock = true;
    }

    // Build New Block Template
    if (!isNewBlock && !newBlock) return false;
    const tmpTemplate = new Template(
      _this.jobCounter.next(),
      _this.config,
      Object.assign({}, rpcData),
      _this.extraNoncePlaceholder);

    // Update Current Template
    _this.validJobs = {};
    _this.currentJob = tmpTemplate;
    _this.emit('manager.block.new', tmpTemplate);
    _this.validJobs[tmpTemplate.jobId] = tmpTemplate;
    return true;
  };

  // Process Submitted Share
  this.handleShare = function(jobId, client, submission) {

    // Main Submission Variables
    let difficulty = client.difficulty;
    const submitTime = Date.now() / 1000 | 0;
    const job = _this.validJobs[jobId];
    const nTimeBuffer = utils.reverseBuffer(Buffer.from(submission.nTime, 'hex'));
    const nTimeInt = parseInt(nTimeBuffer.toString('hex'), 16);

    // Establish Hashing Algorithms
    const hashDigest = Algorithms.equihash.hash();
    const headerDigest = Algorithms.sha256d.hash();

    // Share is Invalid
    const shareError = function(error) {
      _this.emit('manager.share', {
        job: jobId,
        id: client.id,
        ip: client.socket.remoteAddress,
        port: client.socket.localPort,
        addrPrimary: client.addrPrimary,
        addrAuxiliary: client.addrAuxiliary,
        difficulty: difficulty,
        identifier: _this.configMain.identifier || '',
        error: error[1],
      }, false);
      return { error: error, response: null };
    };

    // Edge Cases to Check if Share is Invalid
    if (typeof job === 'undefined' || job.jobId != jobId) {
      return shareError([21, 'job not found']);
    }
    if (submission.nTime.length !== 8) {
      return shareError([20, 'incorrect size of ntime']);
    }
    if (nTimeInt < job.rpcData.curtime || nTimeInt > submitTime + 7200) {
      return shareError([20, 'ntime out of range']);
    }
    if (submission.nonce.length !== 64) {
      return shareError([20, 'incorrect size of nonce']);
    }
    if (!client.addrPrimary) {
      return shareError([20, 'worker address isn\'t set properly']);
    }
    if (!job.handleSubmissions([submission.nTime, submission.nonce, submission.solution])) {
      return shareError([22, 'duplicate share']);
    }

    // Establish Share Information
    let blockValid = false;
    const version = job.rpcData.version;
    const expectedLength = utils.getSolutionLength(200, 9);
    const expectedSlice = utils.getSolutionSlice(200, 9);

    // Check if Solution is the Expected Length
    if (submission.solution.length !== expectedLength) {
      return shareError([20, 'incorrect size of solution, expected ' + expectedLength]);
    }

    // Structure Solution Hash for Validity
    const solutionBuffer = Buffer.from(submission.solution, 'hex');
    const solutionSlice = Buffer.from(submission.solution.slice(expectedSlice), 'hex');

    // Start Generating Block Hash
    const headerBuffer = job.handleHeader(version, submission.nTime, submission.nonce);
    const headerSolution = Buffer.concat([headerBuffer, solutionBuffer]);
    const headerHash = headerDigest(headerSolution);
    const headerBigInt = utils.bufferToBigInt(utils.reverseBuffer(headerHash));

    // Check if Solution is Valid
    if (!hashDigest(headerBuffer, solutionSlice)) {
      return shareError([20, 'submission is not valid']);
    }

    // Calculate Share Difficulty
    const shareMultiplier = Algorithms.equihash.multiplier;
    const shareDiff = Algorithms.equihash.diff / Number(headerBigInt) * shareMultiplier;
    const blockDiffAdjusted = job.difficulty * Algorithms.equihash.multiplier;
    const blockHash = utils.reverseBuffer(headerHash).toString('hex');
    const blockHex = job.handleBlocks(headerBuffer, solutionBuffer).toString('hex');

    // Check if Share is Valid Block Candidate
    if (job.target >= headerBigInt) {
      blockValid = true;
    } else {
      if (shareDiff / difficulty < 0.99) {
        if (client.previousDifficulty && shareDiff >= client.previousDifficulty) {
          difficulty = client.previousDifficulty;
        } else {
          return shareError([23, 'low difficulty share of ' + shareDiff]);
        }
      }
    }

    // Build Primary Share Object Data
    const shareData = {
      job: jobId,
      id: client.id,
      ip: client.socket.remoteAddress,
      port: client.socket.localPort,
      addrPrimary: client.addrPrimary,
      addrAuxiliary: client.addrAuxiliary,
      blockDiffPrimary : blockDiffAdjusted,
      blockType: blockValid ? 'primary' : 'share',
      coinbase: job.generation[0],
      difficulty: difficulty,
      hash: blockHash,
      hex: blockHex,
      header: headerHash,
      headerDiff: headerBigInt,
      height: job.rpcData.height,
      identifier: _this.configMain.identifier || '',
      reward: job.rpcData.coinbasevalue,
      shareDiff: shareDiff.toFixed(8),
    };

    const auxShareData = {
      job: jobId,
      id: client.id,
      ip: client.socket.remoteAddress,
      port: client.socket.localPort,
      addrPrimary: client.addrPrimary,
      addrAuxiliary: client.addrAuxiliary,
      blockDiffPrimary : blockDiffAdjusted,
      blockType: 'auxiliary',
      coinbase: job.generation[0],
      difficulty: difficulty,
      hash: blockHash,
      hex: blockHex,
      header: headerHash,
      headerDiff: headerBigInt,
      identifier: _this.configMain.identifier || '',
      shareDiff: shareDiff.toFixed(8),
    };

    _this.emit('manager.share', shareData, auxShareData, blockValid);
    return { error: null, hash: blockHash, hex: blockHex, response: true };
  };
};

module.exports = Manager;
Manager.prototype.__proto__ = events.EventEmitter.prototype;
