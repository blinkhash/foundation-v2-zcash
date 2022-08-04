const blake2b = require('blake2b');
const fastRoot = require('merkle-lib/fastRoot');
const utils = require('./utils');

////////////////////////////////////////////////////////////////////////////////

// Main Template Function
const Hashes = function(config, rpcData) {

  const _this = this;
  this.config = config;
  this.rpcData = rpcData;

  this.versionGroupId = '26A7270A';
  this.consensusBranchId = 'C2D6D0B4';

  // Build Zcash Header Digest
  this.handleTxIdHeaderDigest = function() {

    // Handle Digest Structure
    const version = utils.packInt32LE(5 | (1 << 31));
    const versionGroupId = utils.packUInt32LE(`0x${ _this.versionGroupId }`);
    const consensusBranchId = utils.packUInt32LE(`0x${ _this.consensusBranchId }`);
    const txLockTime = utils.packUInt32LE(0);
    const txExpiryHeight = utils.packUInt32LE(_this.rpcData.height);

    // Build + Update Header Digest
    const headerPersonal = Buffer.from('ZTxIdHeadersHash');
    const headerDigest = blake2b(32, null, null, headerPersonal, true)
      .update(new Uint8Array(version))
      .update(new Uint8Array(versionGroupId))
      .update(new Uint8Array(consensusBranchId))
      .update(new Uint8Array(txLockTime))
      .update(new Uint8Array(txExpiryHeight));

    // Return Header Digest
    return headerDigest;
  };

  // Build Zcash PrevOuts Digest
  this.handleTxIdPrevOutsDigest = function() {

    // Handle Digest Structure
    const outpoint = '0000000000000000000000000000000000000000000000000000000000000000';
    const previousIndex = 'ffffffff';
    const prevOutsBuffer = Buffer.from(outpoint + previousIndex, 'hex');

    // Build + Update PrevOuts Digest
    const prevOutsPersonal = Buffer.from('ZTxIdPrevoutHash');
    const prevOutsDigest = blake2b(32, null, null, prevOutsPersonal, true)
      .update(new Uint8Array(prevOutsBuffer));

    // Return PrevOuts Digest
    return prevOutsDigest;
  };

  // Build Zcash Sequence Digest
  this.handleTxIdSequenceDigest = function() {

    // Handle Digest Structure
    const sequence = 'ffffffff';
    const sequenceBuffer = Buffer.from(sequence, 'hex');

    // Build + Update Sequence Digest
    const sequencePersonal = Buffer.from('ZTxIdSequencHash');
    const sequenceDigest = blake2b(32, null, null, sequencePersonal, true)
      .update(new Uint8Array(sequenceBuffer));

    // Return Sequence Digest
    return sequenceDigest;
  };

  // Build Zcash Outputs Digest
  this.handleTxIdOutputsDigest = function(outputs) {

    // Build Outputs Digest
    const outputsPersonal = Buffer.from('ZTxIdOutputsHash');
    const outputsDigest = blake2b(32, null, null, outputsPersonal, true);

    // Update Outputs Digest
    outputs.forEach((outputBuffer) => {
      outputsDigest.update(new Uint8Array(outputBuffer));
    });

    // Return Outputs Digest
    return outputsDigest;
  };

  // Build Zcash Transparent Digest
  this.handleTxIdTransparentDigest = function(outputs) {

    // Build + Update Transparent Digest
    const transparentPersonal = Buffer.from('ZTxIdTranspaHash');
    const transparentDigest = blake2b(32, null, null, transparentPersonal, true)
      .update(new Uint8Array(_this.handleTxIdPrevOutsDigest().digest()))
      .update(new Uint8Array(_this.handleTxIdSequenceDigest().digest()))
      .update(new Uint8Array(_this.handleTxIdOutputsDigest(outputs).digest()));

    // Return Transparent Digest
    return transparentDigest;
  };

  // Build Zcash Sapling Digest
  this.handleTxIdSaplingDigest = function() {

    // Build + Update Sapling Digest
    const saplingPersonal = Buffer.from('ZTxIdSaplingHash');
    const saplingDigest = blake2b(32, null, null, saplingPersonal, true);

    // Return Sapling Digest
    return saplingDigest;
  };

  // Build Zcash Orchard Digest
  this.handleTxIdOrchardDigest = function() {

    // Build + Update Orchard Digest
    const orchardPersonal = Buffer.from('ZTxIdOrchardHash');
    const orchardDigest = blake2b(32, null, null, orchardPersonal, true);

    // Return Orchard Digest
    return orchardDigest;
  };

  // Build Zcash TxId Digest
  this.handleTxIdDigest = function(outputs) {

    // Build TxId Personalization
    const txIdPersonal = Buffer.concat([
      Buffer.from('ZcashTxHash_'),
      utils.reverseBuffer(Buffer.from(_this.consensusBranchId, 'hex')),
    ]);

    // Build + Update TxId Digest
    const txIdDigest = blake2b(32, null, null, txIdPersonal, true)
      .update(new Uint8Array(_this.handleTxIdHeaderDigest().digest()))
      .update(new Uint8Array(_this.handleTxIdTransparentDigest(outputs).digest()))
      .update(new Uint8Array(_this.handleTxIdSaplingDigest().digest()))
      .update(new Uint8Array(_this.handleTxIdOrchardDigest().digest()));

    // Return TxId Digest
    return txIdDigest;
  };

  // Build Zcash Scripts Digest
  this.handleAuthScriptsDigest = function(scriptSig) {

    // Build + Update PrevOuts Digest
    const scriptsPersonal = Buffer.from('ZTxAuthTransHash');
    const scriptsDigest = blake2b(32, null, null, scriptsPersonal, true)
      .update(new Uint8Array(scriptSig));

    // Return PrevOuts Digest
    return scriptsDigest;
  };

  // Build Zcash Sapling Digest
  this.handleAuthSaplingDigest = function() {

    // Build + Update PrevOuts Digest
    const saplingPersonal = Buffer.from('ZTxAuthSapliHash');
    const saplingDigest = blake2b(32, null, null, saplingPersonal, true);

    // Return PrevOuts Digest
    return saplingDigest;
  };

  // Build Zcash Orchard Digest
  this.handleAuthOrchardDigest = function() {

    // Build + Update PrevOuts Digest
    const orchardPersonal = Buffer.from('ZTxAuthOrchaHash');
    const orchardDigest = blake2b(32, null, null, orchardPersonal, true);

    // Return PrevOuts Digest
    return orchardDigest;
  };

  // Build Zcash Auth Digest
  this.handleAuthDigest = function(scriptSig) {

    // Build Auth Personalization
    const authPersonal = Buffer.concat([
      Buffer.from('ZTxAuthHash_'),
      utils.reverseBuffer(Buffer.from(_this.consensusBranchId, 'hex')),
    ]);

    // Build + Update auth Digest
    const authDigest = blake2b(32, null, null, authPersonal, true)
      .update(new Uint8Array(_this.handleAuthScriptsDigest(scriptSig).digest()))
      .update(new Uint8Array(_this.handleAuthSaplingDigest().digest()))
      .update(new Uint8Array(_this.handleAuthOrchardDigest().digest()));

    // Return Auth Digest
    return authDigest;
  };

  // Build Zcash Auth Root Digest
  this.handleAuthRootDigest = function(scriptSig) {

    // Handle Digest Structure
    const padding = '0000000000000000000000000000000000000000000000000000000000000000';

    // Build Auth Data Root Digest
    let nLeaves = 1;
    const digest = _this.handleAuthDigest(scriptSig).digest();

    // Build + Update Digest w/ Transaction Hashes
    let buffers = [Buffer.from(digest, 'hex')];
    _this.rpcData.transactions.forEach((transaction) => {
      buffers.push(utils.reverseBuffer(Buffer.from(transaction.authdigest, 'hex')));
      nLeaves += 1;
    });

    // Add Padding to Buffers Until Reaching a Power of 2
    while ((Math.log(nLeaves) / Math.log(2)) % 1 !== 0) {
      buffers.push(Buffer.from(padding, 'hex'));
      nLeaves += 1;
    }

    // Build Root Digest from Hashes
    while (buffers.length > 1) {
      const buffersNew = [];
      for (let i = 0; i < buffers.length; i += 2) {
        const authRootPersonal = Buffer.from('ZcashAuthDatHash');
        const authRootDigest = blake2b(32, null, null, authRootPersonal, true)
          .update(new Uint8Array(buffers[i]))
          .update(new Uint8Array(buffers[i + 1]));
        buffersNew.push(Buffer.from(authRootDigest.digest(), 'hex'));
      }
      buffers = buffersNew;
    }

    // Return Auth Root Digest
    return buffers[0];
  };

  // Build Zcash Merkle Root
  this.handleMerkleRoot = function(outputs) {

    // Handle Initial Digest
    const digest = _this.handleTxIdDigest(outputs).digest();

    // Build + Update Digest w/ Transaction Hashes
    const buffers = [Buffer.from(digest, 'hex')];
    _this.rpcData.transactions.forEach((transaction) => {
      buffers.push(utils.reverseBuffer(Buffer.from(transaction.hash, 'hex')));
    });

    // Return Block Merkle Root
    return fastRoot(buffers, utils.sha256d);
  };

  // Build Zcash Block Commitments Digest
  this.handleCommitRoot = function(chainHistory, scriptSig) {

    // Handle Digest Structure
    const padding = '0000000000000000000000000000000000000000000000000000000000000000';

    // Build + Update Block Commitments Digest
    const commitPersonal = Buffer.from('ZcashBlockCommit');
    const commitDigest = blake2b(32, null, null, commitPersonal, true)
      .update(new Uint8Array(utils.reverseBuffer(chainHistory, 'hex')))
      .update(new Uint8Array(_this.handleAuthRootDigest(scriptSig)))
      .update(new Uint8Array(Buffer.from(padding, 'hex')));

    // Return Block Commitments Digest
    return Buffer.from(commitDigest.digest('hex'), 'hex');
  };
};

module.exports = Hashes;
