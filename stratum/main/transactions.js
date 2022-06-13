const utils = require('./utils');

////////////////////////////////////////////////////////////////////////////////

// Main Transactions Function
const Transactions = function(config, rpcData) {

  const _this = this;
  this.config = config;
  this.rpcData = rpcData;

  // Mainnet Configuration
  this.configMainnet = {
    bech32: '',
    bip32: {
      public: Buffer.from('0488B21E', 'hex').readUInt32LE(0),
      private: Buffer.from('0488ADE4', 'hex').readUInt32LE(0),
    },
    peerMagic: '24e92764',
    pubKeyHash: Buffer.from('1CB8', 'hex').readUInt16BE(0),
    scriptHash: Buffer.from('1CBD', 'hex').readUInt16BE(0),
    wif: Buffer.from('80', 'hex').readUInt8(0),
    coin: 'zec',
  };

  // Testnet Configuration
  this.configTestnet = {
    bech32: '',
    bip32: {
      public: Buffer.from('043587CF', 'hex').readUInt32LE(0),
      private: Buffer.from('04358394', 'hex').readUInt32LE(0),
    },
    peerMagic: 'fa1af9bf',
    pubKeyHash: Buffer.from('1D25', 'hex').readUInt16BE(0),
    scriptHash: Buffer.from('1CBA', 'hex').readUInt16BE(0),
    wif: Buffer.from('EF', 'hex').readUInt8(0),
    coin: 'zec',
  };

  // Calculate Generation Transaction
  this.handleGeneration = function() {

    const txInPrevOutHash = '';
    const txInPrevOutIndex = Math.pow(2, 32) - 1;
    const txInSequence = Math.pow(2, 32) - 1;
    const txOutputBuffers = [];

    const txVersion = 5 | (1 << 31);
    const txVersionGroupId = '0x26A7270A';
    const txConsensusBranchId = '0xC2D6D0B4';
    const txLockTime = 0;
    const txExpiryHeight = _this.rpcData.height;

    const txSpendsSapling = 0;
    const txOutputsSapling = 0;
    const txActionsOrchard = 0;

    // Calculate Coin Block Reward
    let reward = _this.rpcData.subsidy.miner * 100000000;
    const network = !_this.config.settings.testnet ?
      _this.configMainnet :
      _this.configTestnet;

    // Handle Pool Address
    const poolAddressScript = utils.addressToScript(_this.config.primary.address, network);
    let scriptSig = utils.serializeNumber(_this.rpcData.height);

    // Add Auxiliary Data to ScriptSig
    if (_this.config.auxiliary && _this.config.auxiliary.enabled && _this.rpcData.auxData) {
      scriptSig = Buffer.concat([
        scriptSig,
        Buffer.from(_this.config.auxiliary.coin.header, 'hex'),
        Buffer.from(_this.rpcData.auxData.hash, 'hex'),
        utils.packUInt32LE(1),
        utils.packUInt32LE(0)
      ]);
    }

    // Handle Founder Transactions
    _this.rpcData.subsidy.fundingstreams.forEach((stream) => {
      const founderReward = stream.valueZat;
      const founderScript = utils.addressToScript(stream.address, network);
      txOutputBuffers.push(Buffer.concat([
        utils.packUInt64LE(founderReward),
        utils.varIntBuffer(founderScript.length),
        founderScript,
      ]));
    });

    // Handle Recipient Transactions
    let recipientTotal = 0;
    _this.config.primary.recipients.forEach((recipient) => {
      const recipientReward = Math.floor(recipient.percentage * reward);
      const recipientScript = utils.addressToScript(recipient.address, network);
      recipientTotal += recipientReward;
      txOutputBuffers.push(Buffer.concat([
        utils.packUInt64LE(recipientReward),
        utils.varIntBuffer(recipientScript.length),
        recipientScript,
      ]));
    });

    // Handle Pool Transaction
    reward -= recipientTotal;
    txOutputBuffers.unshift(Buffer.concat([
      utils.packUInt64LE(reward),
      utils.varIntBuffer(poolAddressScript.length),
      poolAddressScript
    ]));

    // Build Generation Transaction
    const p1 = Buffer.concat([
      utils.packInt32LE(txVersion),
      utils.packUInt32LE(txVersionGroupId),
      utils.packUInt32LE(txConsensusBranchId),
      utils.packUInt32LE(txLockTime),
      utils.packUInt32LE(txExpiryHeight),
      utils.varIntBuffer(1),
      utils.uint256BufferFromHash(txInPrevOutHash),
      utils.packUInt32LE(txInPrevOutIndex),
      utils.varIntBuffer(scriptSig.length),
      scriptSig,
      utils.packUInt32LE(txInSequence),
      utils.varIntBuffer(txOutputBuffers.length),
      Buffer.concat(txOutputBuffers),
      utils.varIntBuffer(txSpendsSapling),
      utils.varIntBuffer(txOutputsSapling),
      utils.varIntBuffer(txActionsOrchard),
    ]);

    // Build Script Signature
    const script = Buffer.concat([
      utils.varIntBuffer(scriptSig.length),
      scriptSig,
    ]);

    return [p1, script, txOutputBuffers];
  };
};

module.exports = Transactions;
