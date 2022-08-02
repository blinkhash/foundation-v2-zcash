const Manager = require('../main/manager');
const config = require('../../configs/example');
const configMain = require('../../configs/main');
const events = require('events');
const testdata = require('../../daemon/test/daemon.mock');

const blockTemplate = testdata.getBlockTemplate();
blockTemplate.subsidy = testdata.getBlockSubsidy();
config.primary.address = 't3XyYW8yBFRuMnfvm5KLGFbEVz25kckZXym';
config.primary.recipients = [];

// Example Equihash Solution
const solution = 'fd4005000fe2bd7252a9ff0abea5e8cf7eff4194b3d01ed5110fbaa4157604c5c55a36827861a989c6cdd439f4034e2d11729dc467280f7125321b4e5cee11bfae2a18a1eb916ddda1373f0db25a1451d023705b7c98d909dc3d194d103417ff0005c01e6c8881c2356f2cb91575929574a79bdf6ff432d7466530850c4bf53bc929b9eddc6c1ecd59d9125b5dc2fc783f08fbbfc3673734d2d3f6767b55d0c64397175541ee7f393f1d200b84f5e705565b1984d3e2f60ef76440e6111703a8162e42fcb691feefe09322485c2feef5289cf083cf156e55078f4ed72fbced730946e29ecd60bf939d533450e46cfbcdae8cc7c1b495cf77c59b0492ff7a9a0daee7875aa43dd15cabe136d4fa174903719e31f716a00c3e0258e4f5dcbe139da61f97219731d1256c17545496bb8becc6c31613af20606c7ed454be208e38f86535e551bfe4ee678464d3af07223d595d19af00b89d244047f71eb12052e3e86cd65dd41573d62b0b2f8c8e18b29cd9c75f231987397b292ae8f5dce306abdc21de515c07b992c9f4d67424d6c8565f9354347786b7c3d492c93e9fd533ccd4d5194f3593f21002f333eb5be059db9efbb1adef9e76395546f950e619281a2b374aa245c829d348c5671d78deccf6829a46020e6fc0f5038deddb04c8b663d52b7274ffca5a56587b52cf179bc5e373b5ef92ff2afa342735a24f0599ca6b86d31c4b386e7485a0a57bcea0dbb88a60114f04ddc7994201bac4612803e6d2a93babfe80a10f4cd32de1c48daf71d976d561f21d97ac2c3fbdca1a4be4dd751bf9535f7b1759aee614025f5019d1be08ec9a0f8f59e9b7380772ba876153cd30d8b870a939ebd574d21ca8914d177434a4cd28f2fd203fc2c51dd737f6ea8bb805571975a6f8f664a6fa473f495024b26774c015ce4b0dd796adf7e84af2216f311c7d001228d9e4ccd1130d7ee2badb269f34d851307a7f0e31d2596348b0697b9d31f5cf5dfd10b3978d4ec80281c668c1d36db502917721407624e75159fb8dd01ba0623dc0b937b9eb6563e4f82d27770ecdffcefd01b8a3823d4b6509b275f611dd61c385beac143a3c03e2c69cbf397a01eb141281e03196471d357eb476111ea1d84d468c5a8f28d32306438232749c19ea5527b2c2b975276a51e9a2855de9f831edebfb97e81f104c46e2985c54095da459143eddfde6a861f5902220eff9b129203601e54164556fdec21174ef55384c1ea97fc93b1685a2bf0fd6e8ccf07b9fa91c3f785661381e49ad6a7f15f1c0294f23efe6d321cfbaffe910f2c587b5ce00a8f56ea1fd301cbabe39efbcf87d39b4d314b04fa45adeb1e462a3f0580944c31bcc512293bf88e652f81b76d214806225e0d60de37817ac24f17f34d495abe7676d22d8cc601da5437e8b4b6a010ea94c194e23eaac71907d774f86b9460f8d067119038d19851116ceabc7c1a0c8989a5ce3971a320d035d0821bd1d0df596911122e77c8a59ca63de8e3d3ef3aef2b464657d73b2f3f75a7a14b60de210d37101999674815b4709d42a519a4cfad2b1e67558b9c92ac239b83a0ace62dc3733f8dab3b0ae8f17dce891362addd70859d92d02be88d5dfcd9f9fa138bd84365e1f6ce068586f09b7df9938ca5fc77e6ea2fbd4430246d780c746d226ad522454b9c577e98b6bcf1c1b29f233548ef9106bf2fa78c0ce63abd69a56fb810d3905359ceba3c8a3b1ffd40d0c5bc64d13059583e16e7417a94872718f99f296f37fe44ba670fb3c767b028848e446d4900d1a8803c06d7c34f7b1c45e70c35cc065f260e1ab9f50ff080913463aa6656c16927d255c1dc368d47b9fa4d845842af92ffa49a1559d0e3ba773d3a6216f93460997f70355668fae881ee5fa';

////////////////////////////////////////////////////////////////////////////////

function mockSocket() {
  const socket = new events.EventEmitter();
  socket.remoteAddress = '127.0.0.1',
  socket.destroy = () => {};
  socket.setEncoding = () => {};
  socket.setKeepAlive = () => {};
  socket.write = (data) => {
    socket.emit('log', data);
  };
  return socket;
}

function mockClient() {
  const socket = mockSocket();
  const client = new events.EventEmitter();
  client.id = 'test';
  client.addrPrimary = '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2';
  client.addrAuxiliary = '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2';
  client.previousDifficulty = 0;
  client.difficulty = 1,
  client.extraNonce1 = 0,
  client.socket = socket;
  client.socket.localPort = 3002;
  client.sendLabel = () => {
    return 'client [example]';
  };
  client.broadcastMiningJob = () => {};
  client.broadcastDifficulty = () => {};
  return client;
}

////////////////////////////////////////////////////////////////////////////////

describe('Test manager functionality', () => {

  let configCopy, configMainCopy, rpcDataCopy;
  beforeEach(() => {
    configCopy = JSON.parse(JSON.stringify(config));
    configMainCopy = JSON.parse(JSON.stringify(configMain));
    rpcDataCopy = JSON.parse(JSON.stringify(blockTemplate));
  });

  test('Test initial manager calculations', () => {
    const manager = new Manager(configCopy, configMainCopy);
    expect(manager.extraNonceCounter.size).toBe(4);
    expect(manager.extraNonceCounter.next().length).toBe(8);
    expect(manager.extraNoncePlaceholder).toStrictEqual(Buffer.from('f000000ff111111f', 'hex'));
    expect(manager.extraNonce2Size).toBe(4);
  });

  test('Test template updates given updated blockTemplate', () => {
    const manager = new Manager(configCopy, configMainCopy);
    const response1 = manager.handleTemplate(rpcDataCopy);
    expect(response1).toBe(true);
  });

  test('Test template updates given new blockTemplate [1]', () => {
    const manager = new Manager(configCopy, configMainCopy);
    const response1 = manager.handleTemplate(rpcDataCopy, false);
    const response2 = manager.handleTemplate(rpcDataCopy, false);
    expect(response1).toBe(true);
    expect(response2).toBe(false);
  });

  test('Test template updates given new blockTemplate [2]', () => {
    const manager = new Manager(configCopy, configMainCopy);
    const response1 = manager.handleTemplate(rpcDataCopy, false);
    rpcDataCopy.previousblockhash = '8719aefb83ef6583bd4c808bbe7d49b629a60b375fc6e36bee039530bc7727e2';
    const response2 = manager.handleTemplate(rpcDataCopy, false);
    expect(response1).toBe(true);
    expect(response2).toBe(true);
  });

  test('Test template updates given new blockTemplate [3]', () => {
    const manager = new Manager(configCopy, configMainCopy);
    const response1 = manager.handleTemplate(rpcDataCopy, false);
    rpcDataCopy.previousblockhash = '8719aefb83ef6583bd4c808bbe7d49b629a60b375fc6e36bee039530bc7727e2';
    rpcDataCopy.height = 0;
    const response2 = manager.handleTemplate(rpcDataCopy, false);
    expect(response1).toBe(true);
    expect(response2).toBe(false);
  });

  test('Test share submission process [1]', () => {
    const manager = new Manager(configCopy, configMainCopy);
    manager.handleTemplate(rpcDataCopy, false);
    const submission = {
      extraNonce1: 'a86affc7',
      extraNonce2: '0000000000000000000000000000000000000000000000000000',
      nTime: '5d83a662',
      solution: solution,
      nonce: 'a86affc700000000000000000000000000000000000000000000000000000000',
    };
    const client = mockClient();
    const response = manager.handleShare(0, client, submission);
    expect(response.error[0]).toBe(21);
    expect(response.error[1]).toBe('job not found');
  });

  test('Test share submission process [2]', () => {
    const manager = new Manager(configCopy, configMainCopy);
    manager.handleTemplate(rpcDataCopy, false);
    const submission = {
      extraNonce1: 'a86affc7',
      extraNonce2: '0000000000000000000000000000000000000000000000000000',
      nTime: '5d83a6',
      solution: solution,
      nonce: 'a86affc700000000000000000000000000000000000000000000000000000000',
    };
    const client = mockClient();
    const response = manager.handleShare(1, client, submission);
    expect(response.error[0]).toBe(20);
    expect(response.error[1]).toBe('incorrect size of ntime');
  });

  test('Test share submission process [3]', () => {
    const manager = new Manager(configCopy, configMainCopy);
    manager.handleTemplate(rpcDataCopy, false);
    const submission = {
      extraNonce1: 'a86affc7',
      extraNonce2: '0000000000000000000000000000000000000000000000000000',
      nTime: '5d830000',
      solution: solution,
      nonce: 'a86affc700000000000000000000000000000000000000000000000000000000',
    };
    const client = mockClient();
    const response = manager.handleShare(1, client, submission);
    expect(response.error[0]).toBe(20);
    expect(response.error[1]).toBe('ntime out of range');
  });

  test('Test share submission process [4]', () => {
    const manager = new Manager(configCopy, configMainCopy);
    manager.handleTemplate(rpcDataCopy, false);
    const submission = {
      extraNonce1: 'a86affc7',
      extraNonce2: '0000000000000000000000000000000000000000000000000000',
      nTime: '5d83a662',
      solution: solution,
      nonce: 'a86affc70000000000000000000000000000000000000000',
    };
    const client = mockClient();
    const response = manager.handleShare(1, client, submission);
    expect(response.error[0]).toBe(20);
    expect(response.error[1]).toBe('incorrect size of nonce');
  });

  test('Test share submission process [5]', () => {
    const manager = new Manager(configCopy, configMainCopy);
    manager.handleTemplate(rpcDataCopy, false);
    const submission = {
      extraNonce1: 'a86affc7',
      extraNonce2: '0000000000000000000000000000000000000000000000000000',
      nTime: '5d83a662',
      solution: solution,
      nonce: 'a86affc700000000000000000000000000000000000000000000000000000000',
    };
    const client = mockClient();
    client.addrPrimary = null;
    const response = manager.handleShare(1, client, submission);
    expect(response.error[0]).toBe(20);
    expect(response.error[1]).toBe('worker address isn\'t set properly');
  });

  test('Test share submission process [6]', () => {
    const manager = new Manager(configCopy, configMainCopy);
    manager.handleTemplate(rpcDataCopy, false);
    const submission = {
      extraNonce1: 'a86affc7',
      extraNonce2: '0000000000000000000000000000000000000000000000000000',
      nTime: '5d83a662',
      solution: solution,
      nonce: 'a86affc700000000000000000000000000000000000000000000000000000000',
    };
    const client = mockClient();
    manager.handleShare(1, client, submission);
    const response = manager.handleShare(1, client, submission);
    expect(response.error[0]).toBe(22);
    expect(response.error[1]).toBe('duplicate share');
  });

  test('Test share submission process [7]', () => {
    const manager = new Manager(configCopy, configMainCopy);
    manager.handleTemplate(rpcDataCopy, false);
    const submission = {
      extraNonce1: 'a86affc7',
      extraNonce2: '0000000000000000000000000000000000000000000000000000',
      nTime: '5d83a662',
      solution: solution + '0000000000000000',
      nonce: 'a86affc700000000000000000000000000000000000000000000000000000000',
    };
    const client = mockClient();
    const response = manager.handleShare(1, client, submission);
    expect(response.error[0]).toBe(20);
    expect(response.error[1]).toBe('incorrect size of solution, expected 2694');
  });

  test('Test share submission process [8]', () => {
    const manager = new Manager(configCopy, configMainCopy);
    manager.handleTemplate(rpcDataCopy, false);
    const submission = {
      extraNonce1: 'a86affc7',
      extraNonce2: '0000000000000000000000000000000000000000000000000000',
      nTime: '5d83a662',
      solution: solution,
      nonce: 'a86affc700000000000000000000000000000000000000000000000000000000',
    };
    const client = mockClient();
    const response = manager.handleShare(1, client, submission);
    expect(response.error[0]).toBe(20);
    expect(response.error[1].slice(0, 23)).toBe('submission is not valid');
  });
});
