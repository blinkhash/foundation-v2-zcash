const Hashes = require('../main/hashes');
const config = require('../../configs/example');
const testdata = require('../../daemon/test/daemon.mock');

// No Transactions
const scriptSig = Buffer.from('05035d2a1d00\'', 'hex');
const chainHistory = Buffer.from('13f6a3dfbe729d1ba272af9e9438faddbc3045e3bd465acf6897bdc8836ec2fd', 'hex');
const outputs = [
  Buffer.from('80b2e60e000000001976a91426a181373f887dd51480e793edd0bc6335c54bfe88ac', 'hex'),
  Buffer.from('286bee000000000017a9140c0bcca02f3cba01a5d7423ac3903d40586399eb87', 'hex'),
  Buffer.from('40787d010000000017a91471e1df05024288a00802de81e08c437859586c8787', 'hex'),
  Buffer.from('38c94d010000000017a9147810027ba46897a97462c96839df9126376178a887', 'hex'),
];

// With Transaction
const scriptSigTransaction = Buffer.from('050306c41a00', 'hex');
const chainHistoryTransaction = Buffer.from('edf76a443696cf288910dd1f0887d5f3dec8d6402673170558182265d6cfa6ce', 'hex');
const outputsTransaction = [
  Buffer.from('c0bae60e000000001976a914b7a1d9ba13abbc681777eb8561efc9a8747c45c488ac', 'hex'),
  Buffer.from('38c94d010000000017a9143e26d22802442171393f2a72adae960987bd55dc87', 'hex'),
  Buffer.from('40787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', 'hex'),
  Buffer.from('286bee000000000017a914d45cb1adffb5215a42720532a076f02c7c778c9087', 'hex'),
];

// With Transactions
const scriptSigTransactions = Buffer.from('05032bc31a00', 'hex');
const chainHistoryTransactions = Buffer.from('fbd74ff1799f683687fe91b4d215fd3c6fd5613695818a67954585c5f682b9a1', 'hex');
const outputsTransactions = [
  Buffer.from('68c5e60e000000001976a91470ae7a3b0651c86b5c55be0e913b35753009486c88ac', 'hex'),
  Buffer.from('38c94d010000000017a9143e26d22802442171393f2a72adae960987bd55dc87', 'hex'),
  Buffer.from('40787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', 'hex'),
  Buffer.from('286bee000000000017a914d45cb1adffb5215a42720532a076f02c7c778c9087', 'hex'),
];

////////////////////////////////////////////////////////////////////////////////

describe('Test hashes functionality', () => {

  let configCopy, rpcDataCopy;
  beforeEach(() => {
    configCopy = JSON.parse(JSON.stringify(config));
    rpcDataCopy = JSON.parse(JSON.stringify(testdata.getBlockTemplate()));
    rpcDataTransactionCopy = JSON.parse(JSON.stringify(testdata.getBlockTemplateWithTransaction()));
    rpcDataTransactionsCopy = JSON.parse(JSON.stringify(testdata.getBlockTemplateWithTransactions()));
  });

  test('Test main digest builder [1]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleTxIdHeaderDigest();
    const expected = '2bf4173888d3f722ac59fd33566e26b133a66d742c13c24b04476278fecef7e3';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder [2]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleTxIdPrevOutsDigest();
    const expected = '06423ea82b2d08bc1d5d4ddc5ec7655fd5a8fa16bf0123ad050fa07fc8d36e22';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder [3]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleTxIdSequenceDigest();
    const expected = 'bbfae845a18fce3146d3a322aac622b61bd055bfa00ac9c2a4db82ceb37ff987';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder [4]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleTxIdOutputsDigest(outputs);
    const expected = '9d179225a9beb18532acfecc1a124c628cb20a5b09b9912fa1137c6f08ff5cb1';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder [5]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleTxIdTransparentDigest(outputs);
    const expected = 'fb67aaad761af9dba3698c26d35f406007b9272861f6a41ce93dc1b0de665844';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder [6]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleTxIdSaplingDigest();
    const expected = '6f2fc8f98feafd94e74a0df4bed74391ee0b5a69945e4ced8ca8a095206f00ae';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder [7]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleTxIdOrchardDigest();
    const expected = '9fbe4ed13b0c08e671c11a3407d84e1117cd45028a2eee1b9feae78b48a6e2c1';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder [8]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleTxIdDigest(outputs);
    const expected = '84c289f8c34acbc236ffc608a4e832908e2f151808d473db6180d81337cd9f32';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder [9]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleAuthScriptsDigest(scriptSig);
    const expected = '6578c6a0482f0a1f072cdd955a473fe3847d1855ea539e8cd3f9b127ed0b9e89';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder [10]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleAuthSaplingDigest();
    const expected = 'd225673066b0cd76a77151bf056d577792f3577391208d4cec25318a8d5cd96f';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder [11]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleAuthOrchardDigest();
    const expected = '14edaa1e669a63a800bfe0b8fcd3d10e3681115bee03253da02e098042d9ff90';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder [12]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleAuthDigest(scriptSig);
    const expected = 'e41e7a57766c9e8a997db43cc80b6fb8197e57d84429c43f830384a1008537c8';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder [13]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleAuthRootDigest(scriptSig);
    const expected = 'e41e7a57766c9e8a997db43cc80b6fb8197e57d84429c43f830384a1008537c8';
    expect(digest.toString('hex')).toBe(expected);
  });

  test('Test main digest builder [14]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleMerkleRoot(outputs);
    const expected = '84c289f8c34acbc236ffc608a4e832908e2f151808d473db6180d81337cd9f32';
    expect(digest.toString('hex')).toBe(expected);
  });

  test('Test main digest builder [15]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleCommitRoot(chainHistory, scriptSig);
    const expected = '4c2966a5141ccafda4dc324c9fa5f02a0a42de26574ccf7725be7c55036bb7f4';
    expect(digest.toString('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [1]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleTxIdHeaderDigest();
    const expected = '094476beeb48ebfa011715b88686d0e102ab5b31608dc14e31b1efaaf0eae658';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [2]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleTxIdPrevOutsDigest();
    const expected = '06423ea82b2d08bc1d5d4ddc5ec7655fd5a8fa16bf0123ad050fa07fc8d36e22';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [3]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleTxIdSequenceDigest();
    const expected = 'bbfae845a18fce3146d3a322aac622b61bd055bfa00ac9c2a4db82ceb37ff987';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [4]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleTxIdOutputsDigest(outputsTransaction);
    const expected = '07182dda7ad00cbec073e5d78cf7718dfb1ddb40c45190ccbb265111cc372aa7';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [5]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleTxIdTransparentDigest(outputsTransaction);
    const expected = 'e76e14f53949b0499f1138df5ecc3f78a8abb53cc43449668e067293e399556c';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [6]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleTxIdSaplingDigest();
    const expected = '6f2fc8f98feafd94e74a0df4bed74391ee0b5a69945e4ced8ca8a095206f00ae';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [7]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleTxIdOrchardDigest();
    const expected = '9fbe4ed13b0c08e671c11a3407d84e1117cd45028a2eee1b9feae78b48a6e2c1';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [8]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleTxIdDigest(outputsTransaction);
    const expected = '6346b6f6f0dffcadd16cdaf3e9b6052031a6ce958392ab0ef98b4f44b64f0ffd';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [9]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleAuthScriptsDigest(scriptSigTransaction);
    const expected = '5e7d73b353148f162cafa3ce4560263c57d5f84614b580c056eb704f332f9e42';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [10]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleAuthSaplingDigest();
    const expected = 'd225673066b0cd76a77151bf056d577792f3577391208d4cec25318a8d5cd96f';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [11]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleAuthOrchardDigest();
    const expected = '14edaa1e669a63a800bfe0b8fcd3d10e3681115bee03253da02e098042d9ff90';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [12]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleAuthDigest(scriptSigTransaction);
    const expected = '2e8affc3916f40fcbde4f8205e7ed829f414de691e43bafa4d5243d964af2395';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [13]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleAuthRootDigest(scriptSigTransaction);
    const expected = '34805165a473c225fd0148a51bb78e24bc7960445ff0b3a4016749d7666b6bcb';
    expect(digest.toString('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [14]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleMerkleRoot(outputsTransaction);
    const expected = '47aa930224ace4ba58c7c78bb4d560be0695d7f4a78f8f33a231affebe9626b7';
    expect(digest.toString('hex')).toBe(expected);
  });

  test('Test main digest builder w/ single transaction [15]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionCopy).handleCommitRoot(chainHistoryTransaction, scriptSigTransaction);
    const expected = '482c8cf07497c4047b545b2410dcf11a7440f8f57b57bb1f4bc9bf58a33bec4e';
    expect(digest.toString('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [1]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleTxIdHeaderDigest();
    const expected = 'e076c16a21e69e246771e14c2418ea9021bcfaedca56cc00f542b2490fed301d';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [2]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleTxIdPrevOutsDigest();
    const expected = '06423ea82b2d08bc1d5d4ddc5ec7655fd5a8fa16bf0123ad050fa07fc8d36e22';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [3]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleTxIdSequenceDigest();
    const expected = 'bbfae845a18fce3146d3a322aac622b61bd055bfa00ac9c2a4db82ceb37ff987';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [4]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleTxIdOutputsDigest(outputsTransactions);
    const expected = '3e2b4004d8d04da8422c2ecfb990caf40bb8dd43f2ad47255da4858ba43e0c48';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [5]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleTxIdTransparentDigest(outputsTransactions);
    const expected = '15f2777bc4c1c3652e0555bbb5ea27fa1aed422bce8283d0aca33c1feb415312';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [6]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleTxIdSaplingDigest();
    const expected = '6f2fc8f98feafd94e74a0df4bed74391ee0b5a69945e4ced8ca8a095206f00ae';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [7]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleTxIdOrchardDigest();
    const expected = '9fbe4ed13b0c08e671c11a3407d84e1117cd45028a2eee1b9feae78b48a6e2c1';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [8]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleTxIdDigest(outputsTransactions);
    const expected = 'f6dc30e5105dc1b2fa5bd315acfdc96a733d02771688b1da8d2481bf83034129';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [9]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleAuthScriptsDigest(scriptSigTransactions);
    const expected = 'a989dbc749af32047368bda12031c69af1cdd6a462974a6970e9d9188259397a';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [10]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleAuthSaplingDigest();
    const expected = 'd225673066b0cd76a77151bf056d577792f3577391208d4cec25318a8d5cd96f';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [11]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleAuthOrchardDigest();
    const expected = '14edaa1e669a63a800bfe0b8fcd3d10e3681115bee03253da02e098042d9ff90';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [12]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleAuthDigest(scriptSigTransactions);
    const expected = 'af0d3ade0c5fc48227d9deab31c3078a2ba11650e8ddf2bd64bac88de95908c2';
    expect(digest.digest('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [13]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleAuthRootDigest(scriptSigTransactions);
    const expected = 'af47e7ac4d1759391e43011c521e1c04d09853a4b5746587cf8a0ad553cc6b45';
    expect(digest.toString('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [14]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleMerkleRoot(outputsTransactions);
    const expected = '19d33676630a6b8ff6006396ba2631810794beb9a21629304da77db8f0c97bee';
    expect(digest.toString('hex')).toBe(expected);
  });

  test('Test main digest builder w/ multiple transactions [15]', () => {
    const digest = new Hashes(configCopy, rpcDataTransactionsCopy).handleCommitRoot(chainHistoryTransactions, scriptSigTransactions);
    const expected = 'e1a0be8d0de50cf32f93f394c351bd80f768eea350ab27c8372375d95306800d';
    expect(digest.toString('hex')).toBe(expected);
  });
});
