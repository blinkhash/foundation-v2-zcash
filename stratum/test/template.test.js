const Algorithms = require('../main/algorithms');
const Template = require('../main/template');
const config = require('../../configs/example');
const testdata = require('../../daemon/test/daemon.mock');
const utils = require('../main/utils');

const blockTemplate = testdata.getBlockTemplate();
blockTemplate.subsidy = testdata.getBlockSubsidy();
config.primary.address = 't3XyYW8yBFRuMnfvm5KLGFbEVz25kckZXym';
config.primary.recipients = [];

// Example Equihash Solution
const jobId = 1;
const solution = 'fd4005000fe2bd7252a9ff0abea5e8cf7eff4194b3d01ed5110fbaa4157604c5c55a36827861a989c6cdd439f4034e2d11729dc467280f7125321b4e5cee11bfae2a18a1eb916ddda1373f0db25a1451d023705b7c98d909dc3d194d103417ff0005c01e6c8881c2356f2cb91575929574a79bdf6ff432d7466530850c4bf53bc929b9eddc6c1ecd59d9125b5dc2fc783f08fbbfc3673734d2d3f6767b55d0c64397175541ee7f393f1d200b84f5e705565b1984d3e2f60ef76440e6111703a8162e42fcb691feefe09322485c2feef5289cf083cf156e55078f4ed72fbced730946e29ecd60bf939d533450e46cfbcdae8cc7c1b495cf77c59b0492ff7a9a0daee7875aa43dd15cabe136d4fa174903719e31f716a00c3e0258e4f5dcbe139da61f97219731d1256c17545496bb8becc6c31613af20606c7ed454be208e38f86535e551bfe4ee678464d3af07223d595d19af00b89d244047f71eb12052e3e86cd65dd41573d62b0b2f8c8e18b29cd9c75f231987397b292ae8f5dce306abdc21de515c07b992c9f4d67424d6c8565f9354347786b7c3d492c93e9fd533ccd4d5194f3593f21002f333eb5be059db9efbb1adef9e76395546f950e619281a2b374aa245c829d348c5671d78deccf6829a46020e6fc0f5038deddb04c8b663d52b7274ffca5a56587b52cf179bc5e373b5ef92ff2afa342735a24f0599ca6b86d31c4b386e7485a0a57bcea0dbb88a60114f04ddc7994201bac4612803e6d2a93babfe80a10f4cd32de1c48daf71d976d561f21d97ac2c3fbdca1a4be4dd751bf9535f7b1759aee614025f5019d1be08ec9a0f8f59e9b7380772ba876153cd30d8b870a939ebd574d21ca8914d177434a4cd28f2fd203fc2c51dd737f6ea8bb805571975a6f8f664a6fa473f495024b26774c015ce4b0dd796adf7e84af2216f311c7d001228d9e4ccd1130d7ee2badb269f34d851307a7f0e31d2596348b0697b9d31f5cf5dfd10b3978d4ec80281c668c1d36db502917721407624e75159fb8dd01ba0623dc0b937b9eb6563e4f82d27770ecdffcefd01b8a3823d4b6509b275f611dd61c385beac143a3c03e2c69cbf397a01eb141281e03196471d357eb476111ea1d84d468c5a8f28d32306438232749c19ea5527b2c2b975276a51e9a2855de9f831edebfb97e81f104c46e2985c54095da459143eddfde6a861f5902220eff9b129203601e54164556fdec21174ef55384c1ea97fc93b1685a2bf0fd6e8ccf07b9fa91c3f785661381e49ad6a7f15f1c0294f23efe6d321cfbaffe910f2c587b5ce00a8f56ea1fd301cbabe39efbcf87d39b4d314b04fa45adeb1e462a3f0580944c31bcc512293bf88e652f81b76d214806225e0d60de37817ac24f17f34d495abe7676d22d8cc601da5437e8b4b6a010ea94c194e23eaac71907d774f86b9460f8d067119038d19851116ceabc7c1a0c8989a5ce3971a320d035d0821bd1d0df596911122e77c8a59ca63de8e3d3ef3aef2b464657d73b2f3f75a7a14b60de210d37101999674815b4709d42a519a4cfad2b1e67558b9c92ac239b83a0ace62dc3733f8dab3b0ae8f17dce891362addd70859d92d02be88d5dfcd9f9fa138bd84365e1f6ce068586f09b7df9938ca5fc77e6ea2fbd4430246d780c746d226ad522454b9c577e98b6bcf1c1b29f233548ef9106bf2fa78c0ce63abd69a56fb810d3905359ceba3c8a3b1ffd40d0c5bc64d13059583e16e7417a94872718f99f296f37fe44ba670fb3c767b028848e446d4900d1a8803c06d7c34f7b1c45e70c35cc065f260e1ab9f50ff080913463aa6656c16927d255c1dc368d47b9fa4d845842af92ffa49a1559d0e3ba773d3a6216f93460997f70355668fae881ee5fa';

////////////////////////////////////////////////////////////////////////////////

describe('Test template functionality', () => {

  let configCopy, rpcDataCopy;
  beforeEach(() => {
    configCopy = JSON.parse(JSON.stringify(config));
    rpcDataCopy = JSON.parse(JSON.stringify(blockTemplate));
  });

  test('Test current bigint implementation [1]', () => {
    const template = new Template(jobId.toString(16), configCopy, rpcDataCopy);
    expect(Number(template.target).toFixed(9)).toBe('2.1151407285750367e+74');
  });

  test('Test current bigint implementation [2]', () => {
    rpcDataCopy.target = null;
    const template = new Template(jobId.toString(16), configCopy, rpcDataCopy);
    expect(Number(template.target).toFixed(9)).toBe('2.1151407285750367e+74');
  });

  test('Test if target is not defined', () => {
    const template = new Template(jobId.toString(16), configCopy, rpcDataCopy);
    delete rpcDataCopy.target;
    expect(Number(template.target).toFixed(9)).toBe('2.1151407285750367e+74');
    expect(template.difficulty.toFixed(9)).toBe('0.066826648');
  });

  test('Test template difficulty calculation', () => {
    const template = new Template(jobId.toString(16), configCopy, rpcDataCopy);
    expect(template.difficulty.toFixed(9)).toBe('0.066826648');
  });

  test('Test generation transaction handling', () => {
    const template = new Template(jobId.toString(16), configCopy, rpcDataCopy);
    const outputs = ['80b2e60e0000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '38c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '286bee000000000017a914931fec54c1fea86e574462cc32013f5400b8912987', '40787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987'];
    expect(template.generation.length).toBe(3);
    expect(template.generation[0]).toStrictEqual(Buffer.from('050000800a27a726b4d0d6c2000000005d2a1d00010000000000000000000000000000000000000000000000000000000000000000ffffffff04035d2a1dffffffff0480b2e60e0000000017a914931fec54c1fea86e574462cc32013f5400b891298738c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987286bee000000000017a914931fec54c1fea86e574462cc32013f5400b891298740787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987000000', 'hex'));
    expect(template.generation[1]).toStrictEqual(Buffer.from('04035d2a1d', 'hex'));
    expect(template.generation[2].map((hash) => hash.toString('hex'))).toStrictEqual(outputs);
  });

  test('Test header serialization [1]', () => {
    const template = new Template(jobId.toString(16), configCopy, rpcDataCopy);
    const time = '6036c54f'.toString('hex');
    const nonce = 'a86affc700000000000000000000000000000000000000000000000000000000'.toString('hex');
    const headerBuffer = template.handleHeader(template.rpcData.version, time, nonce);
    expect(headerBuffer).toStrictEqual(Buffer.from('040000008deb7fc8f519da7c0d183a4c497675b46b8a32c08da53cde99777469ba452900e77fdef03636fa2f5582f6f9096fa2a47c39f8de7f0bf7b35f25a85bac0f4a64ebcdcea5b57ccbe26bef629b770a5f664cedf8e769d14a7212a549851f81eaf86036c54f75b6771fa86affc700000000000000000000000000000000000000000000000000000000', 'hex'));
  });

  test('Test block serialization [1]', () => {
    const template = new Template(jobId.toString(16), configCopy, rpcDataCopy);
    const headerBuffer = Buffer.from('040000008deb7fc8f519da7c0d183a4c497675b46b8a32c08da53cde99777469ba4529000826f45c92665be02bb9fa18a5e4c52d29b4664214254bf0d868501a91051111ebcdcea5b57ccbe26bef629b770a5f664cedf8e769d14a7212a549851f81eaf86036c54f75b6771fa86affc700000000000000000000000000000000000000000000000000000000', 'hex');
    const templateHex = template.handleBlocks(headerBuffer, Buffer.from(solution, 'hex'));
    expect(templateHex).toStrictEqual(Buffer.from('040000008deb7fc8f519da7c0d183a4c497675b46b8a32c08da53cde99777469ba4529000826f45c92665be02bb9fa18a5e4c52d29b4664214254bf0d868501a91051111ebcdcea5b57ccbe26bef629b770a5f664cedf8e769d14a7212a549851f81eaf86036c54f75b6771fa86affc700000000000000000000000000000000000000000000000000000000fd4005000fe2bd7252a9ff0abea5e8cf7eff4194b3d01ed5110fbaa4157604c5c55a36827861a989c6cdd439f4034e2d11729dc467280f7125321b4e5cee11bfae2a18a1eb916ddda1373f0db25a1451d023705b7c98d909dc3d194d103417ff0005c01e6c8881c2356f2cb91575929574a79bdf6ff432d7466530850c4bf53bc929b9eddc6c1ecd59d9125b5dc2fc783f08fbbfc3673734d2d3f6767b55d0c64397175541ee7f393f1d200b84f5e705565b1984d3e2f60ef76440e6111703a8162e42fcb691feefe09322485c2feef5289cf083cf156e55078f4ed72fbced730946e29ecd60bf939d533450e46cfbcdae8cc7c1b495cf77c59b0492ff7a9a0daee7875aa43dd15cabe136d4fa174903719e31f716a00c3e0258e4f5dcbe139da61f97219731d1256c17545496bb8becc6c31613af20606c7ed454be208e38f86535e551bfe4ee678464d3af07223d595d19af00b89d244047f71eb12052e3e86cd65dd41573d62b0b2f8c8e18b29cd9c75f231987397b292ae8f5dce306abdc21de515c07b992c9f4d67424d6c8565f9354347786b7c3d492c93e9fd533ccd4d5194f3593f21002f333eb5be059db9efbb1adef9e76395546f950e619281a2b374aa245c829d348c5671d78deccf6829a46020e6fc0f5038deddb04c8b663d52b7274ffca5a56587b52cf179bc5e373b5ef92ff2afa342735a24f0599ca6b86d31c4b386e7485a0a57bcea0dbb88a60114f04ddc7994201bac4612803e6d2a93babfe80a10f4cd32de1c48daf71d976d561f21d97ac2c3fbdca1a4be4dd751bf9535f7b1759aee614025f5019d1be08ec9a0f8f59e9b7380772ba876153cd30d8b870a939ebd574d21ca8914d177434a4cd28f2fd203fc2c51dd737f6ea8bb805571975a6f8f664a6fa473f495024b26774c015ce4b0dd796adf7e84af2216f311c7d001228d9e4ccd1130d7ee2badb269f34d851307a7f0e31d2596348b0697b9d31f5cf5dfd10b3978d4ec80281c668c1d36db502917721407624e75159fb8dd01ba0623dc0b937b9eb6563e4f82d27770ecdffcefd01b8a3823d4b6509b275f611dd61c385beac143a3c03e2c69cbf397a01eb141281e03196471d357eb476111ea1d84d468c5a8f28d32306438232749c19ea5527b2c2b975276a51e9a2855de9f831edebfb97e81f104c46e2985c54095da459143eddfde6a861f5902220eff9b129203601e54164556fdec21174ef55384c1ea97fc93b1685a2bf0fd6e8ccf07b9fa91c3f785661381e49ad6a7f15f1c0294f23efe6d321cfbaffe910f2c587b5ce00a8f56ea1fd301cbabe39efbcf87d39b4d314b04fa45adeb1e462a3f0580944c31bcc512293bf88e652f81b76d214806225e0d60de37817ac24f17f34d495abe7676d22d8cc601da5437e8b4b6a010ea94c194e23eaac71907d774f86b9460f8d067119038d19851116ceabc7c1a0c8989a5ce3971a320d035d0821bd1d0df596911122e77c8a59ca63de8e3d3ef3aef2b464657d73b2f3f75a7a14b60de210d37101999674815b4709d42a519a4cfad2b1e67558b9c92ac239b83a0ace62dc3733f8dab3b0ae8f17dce891362addd70859d92d02be88d5dfcd9f9fa138bd84365e1f6ce068586f09b7df9938ca5fc77e6ea2fbd4430246d780c746d226ad522454b9c577e98b6bcf1c1b29f233548ef9106bf2fa78c0ce63abd69a56fb810d3905359ceba3c8a3b1ffd40d0c5bc64d13059583e16e7417a94872718f99f296f37fe44ba670fb3c767b028848e446d4900d1a8803c06d7c34f7b1c45e70c35cc065f260e1ab9f50ff080913463aa6656c16927d255c1dc368d47b9fa4d845842af92ffa49a1559d0e3ba773d3a6216f93460997f70355668fae881ee5fa01050000800a27a726b4d0d6c2000000005d2a1d00010000000000000000000000000000000000000000000000000000000000000000ffffffff04035d2a1dffffffff0480b2e60e0000000017a914931fec54c1fea86e574462cc32013f5400b891298738c94d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987286bee000000000017a914931fec54c1fea86e574462cc32013f5400b891298740787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987000000', 'hex'));
  });

  test('Test block serialization [2]', () => {
    const headerBuffer = Buffer.from('040000008deb7fc8f519da7c0d183a4c497675b46b8a32c08da53cde99777469ba4529000826f45c92665be02bb9fa18a5e4c52d29b4664214254bf0d868501a91051111ebcdcea5b57ccbe26bef629b770a5f664cedf8e769d14a7212a549851f81eaf86036c54f75b6771fa86affc700000000000000000000000000000000000000000000000000000000', 'hex');
    const hashDigest = Algorithms.sha256d.hash();
    const blockHash = utils.reverseBuffer(hashDigest(headerBuffer));
    expect(blockHash).toStrictEqual(Buffer.from('96a26ef70af7cfe0fb5b691609c52ffc030f32db115d0effc25599c4c2e70fff', 'hex'));
  });

  test('Test template submission', () => {
    const template = new Template(jobId.toString(16), configCopy, rpcDataCopy);
    const extraNonce1 = Buffer.from('01', 'hex');
    const extraNonce2 = Buffer.from('00', 'hex');
    const time = '6036c54f'.toString('hex');
    const nonce = 'fe1a0000'.toString('hex');
    const templateSubmitted1 = template.handleSubmissions([extraNonce1, extraNonce2, time, nonce]);
    const templateSubmitted2 = template.handleSubmissions([extraNonce1, extraNonce2, time, nonce]);
    expect(templateSubmitted1).toBe(true);
    expect(templateSubmitted2).toBe(false);
  });

  test('Test current job parameters [1]', () => {
    const template = new Template(jobId.toString(16), configCopy, rpcDataCopy);
    const jobParams = [
      template.jobId,
      utils.packInt32LE(template.rpcData.version).toString('hex'),
      utils.reverseBuffer(template.previous).toString('hex'),
      template.merkle.toString('hex'),
      template.commit.toString('hex'),
      utils.packUInt32LE(template.rpcData.curtime).toString('hex'),
      utils.reverseBuffer(Buffer.from(template.rpcData.bits, 'hex')).toString('hex'),
      true
    ];
    const currentParams = template.handleParameters(true);
    expect(currentParams).toStrictEqual(jobParams);
  });

  test('Test current job parameters [2]', () => {
    const template = new Template(jobId.toString(16), configCopy, rpcDataCopy);
    const jobParams = [
      template.jobId,
      utils.packInt32LE(template.rpcData.version).toString('hex'),
      utils.reverseBuffer(template.previous).toString('hex'),
      template.merkle.toString('hex'),
      template.commit.toString('hex'),
      utils.packUInt32LE(template.rpcData.curtime).toString('hex'),
      utils.reverseBuffer(Buffer.from(template.rpcData.bits, 'hex')).toString('hex'),
      true
    ];
    template.jobParams = jobParams;
    const currentParams = template.handleParameters(true);
    expect(currentParams).toStrictEqual(jobParams);
  });
});
