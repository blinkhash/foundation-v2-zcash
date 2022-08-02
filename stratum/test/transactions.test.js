const Transactions = require('../main/transactions');
const config = require('../../configs/example');
const testdata = require('../../daemon/test/daemon.mock');

const blockTemplate = testdata.getBlockTemplate();
blockTemplate.subsidy = testdata.getBlockSubsidy();
const blockTemplateTransactions = testdata.getBlockTemplateWithTransactions();
blockTemplateTransactions.subsidy = testdata.getBlockSubsidy();
config.primary.address = 't3XyYW8yBFRuMnfvm5KLGFbEVz25kckZXym';
config.primary.recipients = [];

const auxiliaryConfig = {
  'enabled': false,
  'coin': {
    'header': 'fabe6d6d',
  }
};

const auxiliaryData = {
  'chainid': 1,
  'hash': '17a35a38e70cd01488e0d5ece6ded04a9bc8125865471d36b9d5c47a08a5907c',
};

////////////////////////////////////////////////////////////////////////////////

describe('Test transactions functionality', () => {

  let configCopy, rpcDataCopy, rpcDataTransactionsCopy;
  beforeEach(() => {
    configCopy = JSON.parse(JSON.stringify(config));
    rpcDataCopy = JSON.parse(JSON.stringify(blockTemplate));
    rpcDataTransactionsCopy = JSON.parse(JSON.stringify(blockTemplateTransactions));
  });

  test('Test main transaction builder [1]', () => {
    const transaction = new Transactions(configCopy, rpcDataCopy).handleGeneration();
    const outputs = ['80b2e60e0000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '38c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '286bee000000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '40787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987'];
    expect(transaction[0]).toStrictEqual(Buffer.from('050000800a27a726b4d0d6c2000000005d2a1d00010000000000000000000000000000000000000000000000000000000000000000ffffffff04035d2a1dffffffff0480b2e60e0000000017a914931fec54c1fea86e574462cc32013f5400b891298738c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987286bee000000000017a914931fec54c1fea86e574462cc32013f5400b891298740787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987000000', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('04035d2a1d', 'hex'));
    expect(transaction[2].map((hash) => hash.toString('hex'))).toStrictEqual(outputs);
  });

  test('Test main transaction builder [2]', () => {
    configCopy.primary.recipients.push({ address: 't3XyYW8yBFRuMnfvm5KLGFbEVz25kckZXym', percentage: 0.05 });
    const transaction = new Transactions(configCopy, rpcDataCopy).handleGeneration();
    const outputs = ['60f6270e0000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '38c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '286bee000000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '40787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '20bcbe000000000017a914931fec54c1fea86e574462cc32013f5400b8912987'];
    expect(transaction[0]).toStrictEqual(Buffer.from('050000800a27a726b4d0d6c2000000005d2a1d00010000000000000000000000000000000000000000000000000000000000000000ffffffff04035d2a1dffffffff0560f6270e0000000017a914931fec54c1fea86e574462cc32013f5400b891298738c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987286bee000000000017a914931fec54c1fea86e574462cc32013f5400b891298740787d010000000017a914931fec54c1fea86e574462cc32013f5400b891298720bcbe000000000017a914931fec54c1fea86e574462cc32013f5400b8912987000000', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('04035d2a1d', 'hex'));
    expect(transaction[2].map((hash) => hash.toString('hex'))).toStrictEqual(outputs);
  });

  test('Test main transaction builder [3]', () => {
    configCopy.primary.recipients.push({ address: 't3XyYW8yBFRuMnfvm5KLGFbEVz25kckZXym', percentage: 0.05 });
    configCopy.primary.recipients.push({ address: 't3XyYW8yBFRuMnfvm5KLGFbEVz25kckZXym', percentage: 0.05 });
    const transaction = new Transactions(configCopy, rpcDataCopy).handleGeneration();
    const outputs = ['403a690d0000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '38c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '286bee000000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '40787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '20bcbe000000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '20bcbe000000000017a914931fec54c1fea86e574462cc32013f5400b8912987'];
    expect(transaction[0]).toStrictEqual(Buffer.from('050000800a27a726b4d0d6c2000000005d2a1d00010000000000000000000000000000000000000000000000000000000000000000ffffffff04035d2a1dffffffff06403a690d0000000017a914931fec54c1fea86e574462cc32013f5400b891298738c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987286bee000000000017a914931fec54c1fea86e574462cc32013f5400b891298740787d010000000017a914931fec54c1fea86e574462cc32013f5400b891298720bcbe000000000017a914931fec54c1fea86e574462cc32013f5400b891298720bcbe000000000017a914931fec54c1fea86e574462cc32013f5400b8912987000000', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('04035d2a1d', 'hex'));
    expect(transaction[2].map((hash) => hash.toString('hex'))).toStrictEqual(outputs);
  });

  test('Test main transaction builder [4]', () => {
    delete rpcDataCopy.default_witness_commitment;
    const transaction = new Transactions(configCopy, rpcDataCopy).handleGeneration();
    const outputs = ['80b2e60e0000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '38c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '286bee000000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '40787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987'];
    expect(transaction[0]).toStrictEqual(Buffer.from('050000800a27a726b4d0d6c2000000005d2a1d00010000000000000000000000000000000000000000000000000000000000000000ffffffff04035d2a1dffffffff0480b2e60e0000000017a914931fec54c1fea86e574462cc32013f5400b891298738c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987286bee000000000017a914931fec54c1fea86e574462cc32013f5400b891298740787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987000000', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('04035d2a1d', 'hex'));
    expect(transaction[2].map((hash) => hash.toString('hex'))).toStrictEqual(outputs);
  });

  test('Test main transaction builder [5]', () => {
    rpcDataCopy.auxData = auxiliaryData;
    configCopy.auxiliary = auxiliaryConfig;
    configCopy.auxiliary.enabled = true;
    const transaction = new Transactions(configCopy, rpcDataCopy).handleGeneration();
    const outputs = ['80b2e60e0000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '38c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '286bee000000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '40787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987'];
    expect(transaction[0]).toStrictEqual(Buffer.from('050000800a27a726b4d0d6c2000000005d2a1d00010000000000000000000000000000000000000000000000000000000000000000ffffffff30035d2a1dfabe6d6d17a35a38e70cd01488e0d5ece6ded04a9bc8125865471d36b9d5c47a08a5907c0100000000000000ffffffff0480b2e60e0000000017a914931fec54c1fea86e574462cc32013f5400b891298738c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987286bee000000000017a914931fec54c1fea86e574462cc32013f5400b891298740787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987000000', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('30035d2a1dfabe6d6d17a35a38e70cd01488e0d5ece6ded04a9bc8125865471d36b9d5c47a08a5907c0100000000000000', 'hex'));
    expect(transaction[2].map((hash) => hash.toString('hex'))).toStrictEqual(outputs);
  });

  test('Test main transaction builder w/ multiple transactions [1]', () => {
    const transaction = new Transactions(configCopy, rpcDataTransactionsCopy).handleGeneration();
    const outputs = ['68c5e60e0000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '38c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '286bee000000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '40787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987'];
    expect(transaction[0]).toStrictEqual(Buffer.from('050000800a27a726b4d0d6c2000000002bc31a00010000000000000000000000000000000000000000000000000000000000000000ffffffff04032bc31affffffff0468c5e60e0000000017a914931fec54c1fea86e574462cc32013f5400b891298738c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987286bee000000000017a914931fec54c1fea86e574462cc32013f5400b891298740787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987000000', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('04032bc31a', 'hex'));
    expect(transaction[2].map((hash) => hash.toString('hex'))).toStrictEqual(outputs);
  });

  test('Test main transaction builder w/ multiple transactions [2]', () => {
    configCopy.primary.recipients.push({ address: 't3XyYW8yBFRuMnfvm5KLGFbEVz25kckZXym', percentage: 0.05 });
    const transaction = new Transactions(configCopy, rpcDataTransactionsCopy).handleGeneration();
    const outputs = ['5608280e0000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '38c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '286bee000000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '40787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '12bdbe000000000017a914931fec54c1fea86e574462cc32013f5400b8912987'];
    expect(transaction[0]).toStrictEqual(Buffer.from('050000800a27a726b4d0d6c2000000002bc31a00010000000000000000000000000000000000000000000000000000000000000000ffffffff04032bc31affffffff055608280e0000000017a914931fec54c1fea86e574462cc32013f5400b891298738c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987286bee000000000017a914931fec54c1fea86e574462cc32013f5400b891298740787d010000000017a914931fec54c1fea86e574462cc32013f5400b891298712bdbe000000000017a914931fec54c1fea86e574462cc32013f5400b8912987000000', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('04032bc31a', 'hex'));
    expect(transaction[2].map((hash) => hash.toString('hex'))).toStrictEqual(outputs);
  });

  test('Test main transaction builder w/ multiple transactions [3]', () => {
    configCopy.primary.recipients.push({ address: 't3XyYW8yBFRuMnfvm5KLGFbEVz25kckZXym', percentage: 0.05 });
    configCopy.primary.recipients.push({ address: 't3XyYW8yBFRuMnfvm5KLGFbEVz25kckZXym', percentage: 0.05 });
    const transaction = new Transactions(configCopy, rpcDataTransactionsCopy).handleGeneration();
    const outputs = ['444b690d0000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '38c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '286bee000000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '40787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '12bdbe000000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '12bdbe000000000017a914931fec54c1fea86e574462cc32013f5400b8912987'];
    expect(transaction[0]).toStrictEqual(Buffer.from('050000800a27a726b4d0d6c2000000002bc31a00010000000000000000000000000000000000000000000000000000000000000000ffffffff04032bc31affffffff06444b690d0000000017a914931fec54c1fea86e574462cc32013f5400b891298738c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987286bee000000000017a914931fec54c1fea86e574462cc32013f5400b891298740787d010000000017a914931fec54c1fea86e574462cc32013f5400b891298712bdbe000000000017a914931fec54c1fea86e574462cc32013f5400b891298712bdbe000000000017a914931fec54c1fea86e574462cc32013f5400b8912987000000', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('04032bc31a', 'hex'));
    expect(transaction[2].map((hash) => hash.toString('hex'))).toStrictEqual(outputs);
  });

  test('Test main transaction builder w/ multiple transactions [4]', () => {
    delete rpcDataTransactionsCopy.default_witness_commitment;
    const transaction = new Transactions(configCopy, rpcDataTransactionsCopy).handleGeneration();
    const outputs = ['68c5e60e0000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '38c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '286bee000000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '40787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987'];
    expect(transaction[0]).toStrictEqual(Buffer.from('050000800a27a726b4d0d6c2000000002bc31a00010000000000000000000000000000000000000000000000000000000000000000ffffffff04032bc31affffffff0468c5e60e0000000017a914931fec54c1fea86e574462cc32013f5400b891298738c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987286bee000000000017a914931fec54c1fea86e574462cc32013f5400b891298740787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987000000', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('04032bc31a', 'hex'));
    expect(transaction[2].map((hash) => hash.toString('hex'))).toStrictEqual(outputs);
  });

  test('Test main transaction builder w/ multiple transactions [5]', () => {
    rpcDataTransactionsCopy.auxData = auxiliaryData;
    configCopy.auxiliary = auxiliaryConfig;
    configCopy.auxiliary.enabled = true;
    const transaction = new Transactions(configCopy, rpcDataTransactionsCopy).handleGeneration();
    const outputs = ['68c5e60e0000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '38c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '286bee000000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '40787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987'];
    expect(transaction[0]).toStrictEqual(Buffer.from('050000800a27a726b4d0d6c2000000002bc31a00010000000000000000000000000000000000000000000000000000000000000000ffffffff30032bc31afabe6d6d17a35a38e70cd01488e0d5ece6ded04a9bc8125865471d36b9d5c47a08a5907c0100000000000000ffffffff0468c5e60e0000000017a914931fec54c1fea86e574462cc32013f5400b891298738c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987286bee000000000017a914931fec54c1fea86e574462cc32013f5400b891298740787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987000000', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('30032bc31afabe6d6d17a35a38e70cd01488e0d5ece6ded04a9bc8125865471d36b9d5c47a08a5907c0100000000000000', 'hex'));
    expect(transaction[2].map((hash) => hash.toString('hex'))).toStrictEqual(outputs);
  });
});
