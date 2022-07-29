const Algorithms = require('./algorithms');
const Hashes = require('./hashes');
const Transactions = require('./transactions');
const utils = require('./utils');

////////////////////////////////////////////////////////////////////////////////

// Main Template Function
const Template = function(jobId, config, rpcData) {

  const _this = this;
  this.jobId = jobId;
  this.config = config;
  this.rpcData = rpcData;
  this.submissions = [];

  // Template Variables
  this.target = _this.rpcData.target ? BigInt(`0x${ _this.rpcData.target }`) : utils.bigIntFromBitsHex(_this.rpcData.bits);
  this.difficulty = parseFloat((Algorithms.equihash.diff / Number(_this.target)).toFixed(9));
  this.hashes = new Hashes(config, rpcData);
  this.previous = Buffer.from(_this.rpcData.previousblockhash, 'hex');
  this.history = Buffer.from(_this.rpcData.defaultroots.chainhistoryroot, 'hex');
  this.generation = new Transactions(config, rpcData).handleGeneration();

  // Build Transaction Digests
  this.merkle = _this.hashes.handleMerkleRoot(_this.generation[2]);
  this.commit = _this.hashes.handleCommitRoot(_this.history, _this.generation[1]);

  // Manage Serializing Block Headers
  this.handleHeader = function(version, nTime, nonce) {

    // Initialize Header/Pointer
    let position = 0;
    let header = Buffer.alloc(140);

    // Append Data to Buffer
    header.write(utils.reverseBuffer(Buffer.from(nonce, 'hex')).toString('hex'), position, 32, 'hex');
    header.write(_this.rpcData.bits, position += 32, 4, 'hex');
    header.write(utils.reverseBuffer(Buffer.from(nTime, 'hex')).toString('hex'), position += 4, 4, 'hex');
    header.write(utils.reverseBuffer(_this.commit).toString('hex'), position += 4, 32, 'hex');
    header.write(utils.reverseBuffer(_this.merkle).toString('hex'), position += 32, 32, 'hex');
    header.write(_this.previous.toString('hex'), position += 32, 32, 'hex');
    header.writeUInt32BE(version, position += 32);
    header = utils.reverseBuffer(header);
    return header;
  };

  // Manage Serializing Block Objects
  this.handleBlocks = function(header, solution) {
    return Buffer.concat([
      header,
      solution,
      utils.varIntBuffer(_this.rpcData.transactions.length + 1),
      _this.generation[0],
      Buffer.concat(_this.rpcData.transactions.map((tx) => Buffer.from(tx.data, 'hex'))),
    ]);
  };

  // Manage Job Parameters for Clients
  this.handleParameters = function(cleanJobs) {
    return [
      _this.jobId,
      utils.packInt32LE(_this.rpcData.version).toString('hex'),
      utils.reverseBuffer(_this.previous).toString('hex'),
      _this.merkle.toString('hex'),
      _this.commit.toString('hex'),
      utils.packUInt32LE(_this.rpcData.curtime).toString('hex'),
      utils.reverseBuffer(Buffer.from(_this.rpcData.bits, 'hex')).toString('hex'),
      cleanJobs
    ];
  };

  // Check Previous Submissions for Duplicates
  this.handleSubmissions = function(header) {
    const submission = header.join('').toLowerCase();
    if (_this.submissions.indexOf(submission) === -1) {
      _this.submissions.push(submission);
      return true;
    }
    return false;
  };
};

module.exports = Template;
