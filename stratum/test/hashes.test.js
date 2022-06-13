const Hashes = require('../main/hashes');
const config = require('../../configs/example');
const testdata = require('../../daemon/test/daemon.mock');

const scriptSig = Buffer.from('05035d2a1d00\'', 'hex');
const chainHistory = Buffer.from('13f6a3dfbe729d1ba272af9e9438faddbc3045e3bd465acf6897bdc8836ec2fd', 'hex');
const outputs = [
  Buffer.from('80b2e60e000000001976a91426a181373f887dd51480e793edd0bc6335c54bfe88ac', 'hex'),
  Buffer.from('286bee000000000017a9140c0bcca02f3cba01a5d7423ac3903d40586399eb87', 'hex'),
  Buffer.from('40787d010000000017a91471e1df05024288a00802de81e08c437859586c8787', 'hex'),
  Buffer.from('38c94d010000000017a9147810027ba46897a97462c96839df9126376178a887', 'hex'),
];

////////////////////////////////////////////////////////////////////////////////

describe('Test hashes functionality', () => {

  let configCopy, rpcDataCopy;
  beforeEach(() => {
    configCopy = JSON.parse(JSON.stringify(config));
    rpcDataCopy = JSON.parse(JSON.stringify(testdata.getBlockTemplate()));
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

  test('Test main digest builder [12]', () => {
    const digest = new Hashes(configCopy, rpcDataCopy).handleCommitDigest(chainHistory, scriptSig);
    const expected = '4c2966a5141ccafda4dc324c9fa5f02a0a42de26574ccf7725be7c55036bb7f4';
    expect(digest.digest('hex')).toBe(expected);
  });
});
