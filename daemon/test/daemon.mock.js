// Mock Daemon GetBlockTemplate Data
exports.getBlockTemplate = function() {
  return {
    'capabilities': [
      'proposal'
    ],
    'version': 4,
    'previousblockhash': '002945ba69747799de3ca58dc0328a6bb47576494c3a180d7cda19f5c87feb8d',
    'blockcommitmentshash': 'f4b76b03557cbe2577cf4c5726de420a2af0a59f4c32dca4fdca1c14a566294c',
    'lightclientroothash': 'f4b76b03557cbe2577cf4c5726de420a2af0a59f4c32dca4fdca1c14a566294c',
    'finalsaplingroothash': 'f4b76b03557cbe2577cf4c5726de420a2af0a59f4c32dca4fdca1c14a566294c',
    'defaultroots': {
      'merkleroot': '329fcd3713d88061db73d40818152f8e9032e8a408c6ff36c2cb4ac3f889c284',
      'chainhistoryroot': '13f6a3dfbe729d1ba272af9e9438faddbc3045e3bd465acf6897bdc8836ec2fd',
      'authdataroot': 'c8378500a18403833fc42944d8577e19b86f0bc83cb47d998a9e6c76577a1ee4',
      'blockcommitmentshash': 'f4b76b03557cbe2577cf4c5726de420a2af0a59f4c32dca4fdca1c14a566294c'
    },
    'transactions': [
    ],
    'coinbasetxn': {
      'data': '050000800a27a726b4d0d6c2000000005d2a1d00010000000000000000000000000000000000000000000000000000000000000000ffffffff05035d2a1d00ffffffff0480b2e60e000000001976a91426a181373f887dd51480e793edd0bc6335c54bfe88ac286bee000000000017a9140c0bcca02f3cba01a5d7423ac3903d40586399eb8740787d010000000017a91471e1df05024288a00802de81e08c437859586c878738c94d010000000017a9147810027ba46897a97462c96839df9126376178a887000000',
      'hash': '329fcd3713d88061db73d40818152f8e9032e8a408c6ff36c2cb4ac3f889c284',
      'authdigest': 'c8378500a18403833fc42944d8577e19b86f0bc83cb47d998a9e6c76577a1ee4',
      'depends': [
      ],
      'fee': 0,
      'sigops': 1,
      'required': true
    },
    'longpollid': '002945ba69747799de3ca58dc0328a6bb47576494c3a180d7cda19f5c87feb8d5733',
    'target': '0077b67500000000000000000000000000000000000000000000000000000000',
    'mintime': 1654883497,
    'mutable': [
      'time',
      'transactions',
      'prevblock'
    ],
    'noncerange': '00000000ffffffff',
    'sigoplimit': 20000,
    'sizelimit': 2000000,
    'curtime': 1654883818,
    'bits': '1f77b675',
    'height': 1911389
  };
};

exports.getBlockTemplateWithTransaction = function() {
  return {
    'capabilities': [
      'proposal'
    ],
    'version': 4,
    'previousblockhash': '00000000003ebf83625de8dca4f1e4b20bf429048658f90bd5bc64cb31ab60f7',
    'blockcommitmentshash': '4eec3ba358bfc94b1fbb577bf5f840741af1dc10245b547b04c49774f08c2c48',
    'lightclientroothash': '4eec3ba358bfc94b1fbb577bf5f840741af1dc10245b547b04c49774f08c2c48',
    'finalsaplingroothash': '4eec3ba358bfc94b1fbb577bf5f840741af1dc10245b547b04c49774f08c2c48',
    'defaultroots': {
      'merkleroot': 'b72696befeaf31a2338f8fa7f4d79506be60d5b48bc7c758bae4ac240293aa47',
      'chainhistoryroot': 'edf76a443696cf288910dd1f0887d5f3dec8d6402673170558182265d6cfa6ce',
      'authdataroot': 'cb6b6b66d7496701a4b3f05f446079bc248eb71ba54801fd25c273a465518034',
      'blockcommitmentshash': '4eec3ba358bfc94b1fbb577bf5f840741af1dc10245b547b04c49774f08c2c48'
    },
    'transactions': [
      {
        'data': '0400008085202f8901b68e584f5219c7021a1d568c38956e34bc4357f14315ee422f519cfc5a68816c000000006a47304402206dbfb90c2294256b1dce12904be30acb26c2c7116ae9ee371e31deb5b88ed22302206072449f1bd5ab89b82468ad254d03469447d8f6c7d3b5d4dc7d2198af2d4a7e012103d4df52365b1acc014a072c374f2342b20f398d6b7aa7e2d289c0409a357328e40000000001ec91e111000000001976a9144aaa7def82adc14836ddca51348b3c3f9f156b3688ac00000000000000000000000000000000000000',
        'hash': 'a4fa6d6291663b53c5b5244af6cad68a5ecd67c11510458e733f18e7bb6660a6',
        'authdigest': 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        'depends': [
        ],
        'fee': 2112,
        'sigops': 1
      }
    ],
    'coinbasetxn': {
      'data': '050000800a27a726b4d0d6c20000000006c41a00010000000000000000000000000000000000000000000000000000000000000000ffffffff050306c41a00ffffffff04c0bae60e000000001976a914b7a1d9ba13abbc681777eb8561efc9a8747c45c488ac38c94d010000000017a9143e26d22802442171393f2a72adae960987bd55dc8740787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987286bee000000000017a914d45cb1adffb5215a42720532a076f02c7c778c9087000000',
      'hash': 'fd0f4fb6444f8bf90eab928395cea6312005b6e9f3da6cd1adfcdff0f6b64663',
      'authdigest': '9523af64d943524dfaba431e69de14f429d87e5e20f8e4bdfc406f91c3ff8a2e',
      'depends': [
      ],
      'fee': -2112,
      'sigops': 1,
      'required': true
    },
    'longpollid': '00000000003ebf83625de8dca4f1e4b20bf429048658f90bd5bc64cb31ab60f718',
    'target': '0000000002064f00000000000000000000000000000000000000000000000000',
    'mintime': 1659072745,
    'mutable': [
      'time',
      'transactions',
      'prevblock'
    ],
    'noncerange': '00000000ffffffff',
    'sigoplimit': 20000,
    'sizelimit': 2000000,
    'curtime': 1659078144,
    'bits': '1c02064f',
    'height': 1754118
  };
};

exports.getBlockTemplateWithTransactions = function() {
  return {
    'capabilities': [
      'proposal'
    ],
    'version': 4,
    'previousblockhash': '0000000001cd28a15ac0b07b288bc3569ff705d5f6a6f6f7c9c1e9c552509a62',
    'blockcommitmentshash': '0d800653d9752337c827ab50a3ee68f780bd51c394f3932ff30ce50d8dbea0e1',
    'lightclientroothash': '0d800653d9752337c827ab50a3ee68f780bd51c394f3932ff30ce50d8dbea0e1',
    'finalsaplingroothash': '0d800653d9752337c827ab50a3ee68f780bd51c394f3932ff30ce50d8dbea0e1',
    'defaultroots': {
      'merkleroot': 'ee7bc9f0b87da74d302916a2b9be9407813126ba966300f68f6b0a637636d319',
      'chainhistoryroot': 'fbd74ff1799f683687fe91b4d215fd3c6fd5613695818a67954585c5f682b9a1',
      'authdataroot': '456bcc53d50a8acf876574b5a45398d0041c1e521c01431e3959174dace747af',
      'blockcommitmentshash': '0d800653d9752337c827ab50a3ee68f780bd51c394f3932ff30ce50d8dbea0e1'
    },
    'transactions': [
      {
        'data': '0400008085202f890111e357aba4de45cad079f53b2e7240df1ffe455cfa8705fda4062687ea0ee0f0010000006a473044022022fbba11e1612d240b14220a60f0358b9266c62612a4c7e0332553f31435afb602202c35cc8cf45c5308d711547876c70d885a723fe38eccfd696317929a2ec31fa9012102dd341ffbea06203eb75b47aa4f3dd23f233fd28a91e530b26d9c7613785d8ed5feffffff014a140000000000001976a914f8a476de41baf5bedd4124bc8c6f4b4d4865bf7c88ac00000000000000000000000000000000000000',
        'hash': '3a4ca26c10b535802af8fbf38e4d0f37d915e2565a490dc29590c066fb9414b4',
        'authdigest': 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        'depends': [
        ],
        'fee': 3840,
        'sigops': 1
      },
      {
        'data': '050000800a27a726b4d0d6c200000000f2c51a000001003fc6b8000000001976a914aaa2fb8ae4c87026f60262b4ec628653d607379d88ac000002b1930973f41f7d0aaf9af0def36e217160614d5dfed8a53f07b75ef75669c9a7c360fc153857dad4eb0c8d1fab86f519a63b7209972433bd67de8d5740cae936880636411b831023373baa4522f9532d421251c19f6b6f038e5bc0e4e4a01dabc815b9c2f24a0c185133901067c824b0f4dac5fc3e8cc83822896c108102c91e72ed413850b7a17684039606510ce9b6cc4b7c677ba484abdb0e02e286d15fbbb20bdc896147ad4bb5e6198498501e7b02aaee68212d649bf01533e8901626dd9a3f59a803aba2306b6a4b5aae7b0045067d7176eabf5a9b5f7073538bbfc6f0963baa56ee87320a678b7d2c01bbb1d778106e01537e8c476add44d4a55acdb2b9d17f86c11f313fd6905854d87027d3efb3a90604a3ec60629d59890b50bdf3adb184c032025c128a779b1d7d36fd15df98122330174bd053142e0a21500822889524d30057cea8edb6ce55eaca49136b6ab986ae0839d503416ae7256cee74b5b14f8a883a1b53bc9445c8f1320c96392b9b1825e8087d489b94de85a7ab1c41ed481456c675279d05ec33d82c6309d3067bd50505a72f7e39d24882f75cfaea5dbfa2f731b8f9ddcbd64ee2051ef7f5425feb9a247abb6582add870dcdb1f5e177eb21595ee38441e0326a869a93d16ca8ea94c90f88f2688ef60ed34748a3f30804f8cc5edde8633ad0bd8b60e38e40f5d31c9e19d4d111139f89f1b088d4a5986d966f72b97b93dfa4f65120e001653fb69933e28fa6bd1f9ba804c0457666ce44437b69002f0c1600d4b1c0748cd64771f7a403cda388c314be19c576271cd3d5bffa9aa27d2d852cc8b537f95bd4410a0d557d2bafeef3af2708580db6c1c3f14910a45b8d71f5abb35e03e9cf44c38fd4c9200518aa8f21e94089f15d4002fdbdede5e32ef5549915ccbf1f1f08023aa82d698a1f469ae152a02992e008d341a5de08440ba6a92074b588c976399a4e25514f917e841699ea783dead09b5135fc50c682e56a80f4ccf08dfb6c153486b6fe11be2e2c2f99d5f7d7ce9bf7ea2d8a011ed96d3b8a211f87aa5e236b5303dd385633b53ed61ecbe2935182ff7b458ea0407fc810269cecf11505f6d9b12611ebb6dc38cbd20ff951cd500d0e4279ae54ed1050b190940dbaa38a88acb094291efc8ad9d5f8874ea2ed6d59474b98a829c735e943fe21399ef57863c4e5787b07f518a6a379d4a19a76381590f4356d9ecfd6876b1f07091a0a92a375c0b0e2ba1d5742efbb8e3240b5f6bb58c4e6f4a00c3890537871b5e1413572054e70708db8344196d2bf362b5026f57c388b7875e8f7865a2fb5f457ef85b9af6e239be970dbe8e771a5e957d449f650544f59530b5a376871ae2f1e1cbc7a037c83592376a78ec44dab384f9f6ce30c919b8df45f6c4f94ff1054dbbdaa069e11942b49afcb37fc7755d959f54e87d653f7416cc7e4bf7cac9d45c8c80f4bc6493cfa23421eec0913e5192c47803776edf8d3fe3068b1f7645daaaf1562f99df39b639aa792f28c03effa4b4e01d4894bcfaca6bbcbf9a34a2cf1f8a32864d56f86b73109cde65fcd78f297c48fee71e7cac057ada3c0b11be974e62518939e5b64d38bf4c10e558386579918e8988b8b84d9ea24eb58e04399df0a3c0c64cc5ea4f2abff7bcb7e729ce2e845c8a08557cdafd3fdabf612d9849426cba4e7536de35f33772d8a99789a2a07150bc461003e327d68fe2baa022bfffa918f567bda851898e6fb82708c2a5c241ff10b50ccac00802cb25099db6342455aec98c0c49eb6d15a8b15b37b5d09e88f9e5a73252af2b992aeff681f6ce00d2c015e49be344f6e8cc68f97d7e18295a27694f0f40ad581073118d8744e2b152c8dac5f6a4217f213cb87ae2672df3b58f5413693a2dbda44c5249b17ce043606ec410ceda0db7494769af39f05dd138644b8402eb4c2faccb22503ddb208a7a891ea44900627f5433d8257317f86508bcde9d1c21d420befd18bbfd562f0059881cda583f6f43f3693e3460e95ff9e7934eba6aec614736c802ebd7e3bb816592e7c43d046dc5578ceef636602b576cfd48d69c392ddbdde5bf61a796005105ff25213d1cddb7c3774357599c044f3c1d85c84f92689cd6950e3f216f2dab9252a5c3a73628f3dbb1c6e2f04d1d5ffdd75dd6713e49ed4b5fee4d7372e446b6021068ead8cdfc6c5f2699e5e66c01543404080f366ce9b39f405194d6341f9f2f1aab4e1f22940c43b6cc807a91ab10cd2c43e14662abd0296f772248d52f2bdf7c5d64f91574960b5d7250c90a4fdc1b33142e24cdd553595803e842c6b800000000370969249bb344bf414602d25cee38f35bd1cb0f30daa43d620ca907e1982d15fd601c05f2c446d428060d4db0b5a67e0d79850e74fea8f27a0678b8013a368723338aaba86d46d9aa9a095de0c2d104be6b46c74b3c54ffb0159c93e403eaae29ea31b2f1b492a93222e5f8c4ec5f09d609cbe233f61df60712724dee9579c9bc6d3439127a11100f9a3a21213268a3563d73c9b399e3092560ea791292fc5eb9361b43164587aa0c045eb7f491b57a2baa3aa3614cdc42fa40da8d0d284307a6e4374065a063cac57a058bf4fab154fa3143dbd03be5261aafe60c824e621d3f82b12558ef3840c1afdd68dd59d5d867c8fa763b9a04d99173a7f156d210617e05133e09a236b507d52d2c2081248992f8631157b1461e8183997d6857afc85c4c3a0f03691d54db915990637c6c33c0448f9394e57f2f3564fe8e38122575e2ec97a014c46ea04448fadb9a737e945c568d10d5d6cc747e4211c57002b08d380200b1b92ba482b3c62131d93e313e7d16b66ed6c3e5967855c66c51848f2ec4490c37396df92e5be774b46fb23b0e998daf1283ea856cc4c78df9fe7f1a40780f110e428c36dc4d6c7b99e7dc8cfbe2b50267ebec75eda9b3810bff3524a104bd026a653fee5e42de5f4f58b6f78c9c64e1f4f0c6ab884c0a1f293c39006280e48532f50ecaf23cf88879394b31b32308bf09286ed55e2d7517da1ade1d058c72a964cde3f3d5e356324cbf4465e7055329cae681200d9d28ffeb0caf264569b8b2a74946a00123ee9fa87b444b6232bfa2b23d120da48a94625d24ae122de59202a3b2e1fff747750073708b0465bc142c73307b71a71a8168230ece794acdaaa4d0f8425d8541c274e580bc25c6c77bce8f008fe89e4578bfbc9b538a0d2c280a11f31f430111b9a3fe5227957463e958428cc8784ff1184c8d9cf9ef01de2710129a91b4b74fd006ed205a6a0a846262d8d1aa889de1702a19980fc4b85a5d90bb8fe12204ff1a74fb6581f59bd5acce33263cb993c6cc4ef212a88d4c3fbc822f208664de408722780102e9ff05f41d9dd3e9cb8837ce6b1bb2e88a2ac2010ce9eaf186c7e10494eb771b74dd9d2a48ada3aee26316b21a82fb082f8183c729bb6cd9bd3e3834c85020f3986d4ae1a65c556946c4e411bc0c1f7d688d1d613dbe27d1079101a3fba21ac387009ee1d7c5b2953036adb8bfc9924a455735099cfc4a65c582a739d6a4b6deac034bf2b71f40a189da287cb7990038a6c95cc12fffbbc66f6664f43f8dab8d35250cb6ce23edc55c52ee36c4f15ac34d56896b1f58513fe264e38d95308e2126d5ccf91c482e1447c137b43e2ced0226896b4216519099d9edf42ae08fa8ccef4faaffb580b9cf5ae4f2b1364344ce14998c3e91c5788613f28e2c7836bab5b0bb03edcdb11916db33b6939c1b3e5d9663ae62a7c38744cfa7e9f268994136f2d63abf46d2d010580249f6c10d1b18fe3559189e239ad50d3f32605d3c03762b4cffed7e0a4e013540632e9ae4236f78af6233ba0fe0d573a750b6b98d52c035def65c6f905fce45bce2efe4687027c57b95e238124bf64118ea0fceecd5b0e982428032b4c2d13f12664d3015813773a962c1a5b5e6afb5b47c2a4fc7f066634af88f04ba53d1a4ab0bc9aeb6dd5e4256e3d3b498ab2c48b40f18bff2b8b182733a0991e97459f9636e802b7ccf03fd8c2bc5836c6a6d9d245f249a3027230107d5a25ad35d0dc148524fff99334a0ae83fb012ae6e075e1aabd4874a03df3480fd6ed23ff25ddf2fbabb243395cdf5ac21c5bbd2e4a41465a8920b87173bd413ff37a816262957052b4dee1d6a3dbae36bb1bb736f349cdc04ec930437ba91b68dea4a17a30fa373f712ed6533c0f0530a51b532d2d511775f44811f38dbfa464d72cb99591fbf9fdca7afab117abc5d4d72ac58a66235d8008de2fd532edd3898525a7b7716cb576c9f14b3dea009d8eff31e6ac96a34a19301304e8e43e14fd809656de6abd93e219ec5fe0705188897a822cbc65fac23ec3305026ed4c673c2af446144aed73d17051f17c4a937bf9e199c2c6da0716d797498e218178f381bdbc52438a2412860b0d9080188e136e22b9a703c23634f7286c146aaf92a44df1cca661edaee51b8a21690da31b8119e561f9eb82e6250b6f5df262072aa6a99a7ffb4997cc318703cee8d9cf63e2465f9a095e08b489ad5122a3ec93c08f5ef5fe730b5ed85bd350512f486f9a5aa7eea8c18555189e9c12cf91a58a551bb6daf7483dcd7bcecd912f7a130ef4e505440320174e993d1e6d0be780cbc1b746bf343b59906578a1d3c87e2c3d59969b2e38e6fb45b919a395338963e6e4f2f3438b41eecb6d2d2cd232f41bc495c7bfa5410fc7846a620fe2e1ff7dd2f292f96c345a803c2bbd4886650da3877eef571faa2384683f8209b5a2880b4e46f751b405f0575c96fa307dd118e3538244d5fc022fd445a26de8de5343578c212720e0284874a72d426fc2b0c4c8fc0318ba3ac3b1c11ec9592e1eca0000fee257dd07a363bc753e5e97e53de79573a28a9cd1a3fb051bb072a4e19f584b34179a85589b9822abea5fe4fa38b9e471329aa57e03eabc7452c1c78faa58306338cc0680da3cf234ff479f972274aa5042b0d1b283e9e3b0d9d8163daa1ea77189ffa0abac42358d229e5a53969e2148dde2488a50fc32fc881e948ea186b856062417896f712eda527c07a91325fea6f789241e62bc1b2bdf3b9ad3747f91c8e2eabd02b5606da3a8fc43110d05f86cb6a773f3635e23d655d46fad6b5710baef2fd421e9f4118255b67df46b03dea111cff619a21a94896c05c4185335b31cfb70ddf8028e6de93e97753f9111d3e0dc55b4aa413599b71c17876325cb918157f5818b7b4e0424dda3aa7094c0a9f85f8bf22a907cd98c5b1734aeb0d16d39a766f52464f190a65efcc512bfba2fc8cfe52ad432ef3ece4438debf011d2ba5608b4209ce5547a6c4b3eb375e5995930ad5197a11b6de9bb0240cf0b7b71a33bdf3033ea157aed60d36e4584a9c8d56d232993a624c0e1d63c3f357c61f7088dd0a559e83491de4faefef344613b4d956d9ad9ef0c8c8d9b1a50711c4c2e0c296049a51d9d2af2b3a91e3ae1a07192934cb983c42517321c1dd93b7efd3e7d9db01dada4fc968f602ef962bb03782353362088850c7d9b38de35c89ef7e056d98c01ff23f59aea8cabbb57a57ca824e5779480581fc6f23b361024d16e19890ca37ec5c4eb33d9b03d7ef1f5df806a2aa158c2972763b77780268b47f084340335b6e6b210b7a71f345a26d98d46095d599b1463059b33ee230640f4630e04b964bdc27d1f5360b2da0c8c98be50da20db7fba9e32a5846a680cea94543e57f7fb1f72da38d04f18d796b707461f3eac8d8e165a07c0045a3959b29bef09de2e9da25ae94c12d427ae3a40643ff7a9465d115a202ee58fe1e935b67f66441348e3f7110fe02372b77a970d40c266711d590dbe843314c9e50cfc7ca80f359c09ab18acd27e43777b80f4d73167db9f71ea458f6a0a64926a12ac3a685db67f58c60e18594e06cc3e674190e171bc41205c7b38b3309ba8737a80cd54a8a213358d98001603638464ad45b361fcffee92502a0c9d14c78b5e0029818412c2eb3714f627ec6eaaa62035f515c7c3e3cbb603c43e961995cdf45b1b676a0698e320b7090b6ca0aba996cebe7525b0c57c78297e178b27e374c9d01d4f8907390ab6f6af4ef624db8645c2c319093f4b154aa56492dc0dcb01004e447186a5158f3e9946d59e32a04c13f0a82793d440f96dd4a39d111c277ccde39affef8bcff9afc878a72d198608de51b9dc380028b69a5b14f06c39768980ac12b170641e016505cb48842158f898f40caff87e015f638c9aa4fb358f8519243722a55a5b39bf625b3ab861d775a3424631303cb5f06e7b6f01512e67a38cda2a5df9657bf3ee0d5344f798ceacf96fca2fdefc6118f60a7edd1808166e179be0e1dc067955920221be753aa5e7492197f32fe914cb603551955f1f25d2327eed83de853fb0e46e8cc2cfeca45e2817d7da8275fb96df7662cf972697613663c1574d44ad72924fd8551d539d25b22c730ce3c31a1eb9292a7dda3086fb627032455933b851ff0bc888b930b986aa9f37a5d2d45f0a8b868932c924d453f9dffbafea20bbb518a0197fe4c07209fffc35e057bedbbfea125d35d30df95f7c50e1672e8dc3ed5dfacce6792256f0af814427164abce41238d0ec05354bae6198611cc46175661da34ef2caf59b48a8264e287557132b365d714b7c15820de069acd1b6b59ca5bc65b6c85db772cc631bf070bfd74b032c4e57702b258471174f0a6c31e5622619fe09d85f0512e75884996ed1ff0687a6d33eeb020c838193ed5358a79114e5cea2cc084f5550bbad4744deee466e4b93311ce29b0526c2f2c9d4e9d0ac77126197271e86c1baef34ab5d4b8255631d46e515cd250f8c46a4b8598d7341263e42689cabb905138a1506100646c30ccb3d15b1b3491eb987aad7b3c102f4a9e31fcd22115d3b6996741f044b14f2e0e88533edf1983cbe2fe02d534527491ba01a19d93c54e5d9808188521f320a8c3fb4909dd3151e3a6eb6827d20977098ee955b584010b4dd016d6966e531207f3c0cb61341c32d4d4af6e7ed43f0d402bc6267dfa0bbca5a44306a17eadc6a4433ae3b99c130242b6408654fc71e7ee6f99b918ad19e832c65b9b34a259c2f036260f25e39fd1fb5c2850c622349306a36bf313614a84af8339c04a1fe2ede0acc1149b4f4f92a33f4c494f6f569834c1f22e4538f1906d1ef3f7301b2c690cd879a32ca585c2466871f6717ccde907f4e1458dd9fa082e2e4078beda1d26e41197800ba3fd61c50d85becedcb251e1bc9edafa812be9fc789e18fa143c4c8019534baaafcd013b360180e47ad21206c10a0c393a499218cbb49581678b03df4256473754d171a9129e314e9e42a3ebeb859c75f6f38a90a3c27a75034610cb290df546d0aa2368e8a655ecd136d1a77c89d96bc90452cc7bc881c1907cd0baec19f944e4346386319dc885d7f5acecf3005e5b97c0bb958d078decfc9d102e12a61d26bd02a206605cc8296bb56afa6d8e503da3c88fa35303bd8c71e041ce7272467b4649d1d5f02a348c89984965f2fbfac2bd36f0b94bc92fd953b3ef417892f56b34881304e8c654df8ce94b917a121e804680887340cb0d7af12683b297958e8315c572fb69fb996a9f6eb60efab2ff7f12bbb94fa670454c5e3fecc24817cce13738e2212ed79ecb91a0142c63765306a0ce9cc33151d7011ea43bbc2a6f43d734bbb2551f9c8c6748d48dcc5960bfdfabe8e9677102da5dd4e0697f3638f60385e7b2079dd7baea6ea6ee0143055083c4734aecf620f83e26f0c18da694aab9a3e7a28d363cb3a630a5601423baa51ed76b7858e7282171b2064de56709cb5accfb836821505c9226e00df2bc77e2ca128f1a745e03e0cda29a803a57bdd354c35d92cf1d700b2fa3082137efd5b96ee74248cc063e90475f11a9c632531ce746516310ae4149b464f64701deea3ac90987ec8cd87ca4224cb283ebb78cf3e1c064e2542291dd4a7f7a4e8c9df7de32a0a8d27acdba3b2aad4c0d0060a920fc648af0e8988523c3f0d5e12bc690802592dae7a9cd047aae2b050f84c597ee1d2d2873fc86fbd2f1c93def07f7408083d88ea1f431da4ab8017515964d44b08be2a8035b35d275cad1130bd006db6e49e41b0d45fde0219f343e1a53ae00a0079d9780f9d7aef0a97e132163bc78ab19011d91aeb3533fa53444953291227eb59f6b3048d87927fec08708113b2be4b6fb85c83248c09dd61322f19b48f3e060fee22325754c01594cc31e4d2428e85feb727075d497a2398d1ef54a433cea92d5a063a125bf5df148ba102a6622af9fd75e4c8f8b59c8b9b67939b76cdbdb77237ba1bc428cb94b021439daf2028399b13c4bfdb7debf497316ef382d1d42799119a2ea7933b4cb36255d24d85eada343b960b4ff64f9b499d528fc1fc24a8e5e07017d13b993bf7dfe5bb2a176b9823cf3d3965df940858b3ce070318e2db23f9fe1aa167e069e5a2249e754ed4cfbc9948b8dc64105d4e4d3575ea9927e4e983e537ef5027e70bccc09d32846e19a68d3bbbaeac5bcf9468134bb9fb19aff44afc32e6703705590e1531ff50379e70640bad8b53259611429ba966f4cf8298dfdf39dc1ab54bed388f87fa7aa59044c728762c241b63c3c45bfc51f2ef600dae78237a90eead1c9de389c26b70bc1bff00b9b434830ec22bea6a59490f7916c5133635d9d7515aaf704938df5da5235b95f7164b1f1aa52d3261515fd441ffd5a017133067e143c9a4d3bfa39de2fc133ba5ca572c53d4733da45ce8d19933751c21ded8bacd16c0c404515018f2510e9a33d4f739c09e4109fd5c95d55a7d27492be65f91e101fc7e655bce3594d5225c56d2044ea99d850324ba60b727ed821a27accb758c9e02f85142f08bbf4c54101b01d77f6027d106d3afcac3792fe7372e7c9dfa0bce5d053cdd67b0b7fcbef6f5e9e23a00826a2a53efa005f430522c031f879cc91fbb0c78ac9773eb56362b1fc4c30df194b787a13da51c5cd2afc01f9d41e49b1da73ca92e896caed9c327dcf598a42871d36fc1dba9df359be88d3a6c3f234e4a6e0ae6ab8c0f24d3623a115fa1e172740555818033dd0039e6190c12466418d488fcbe01bc3204171b553b57df68755e77a8a27b9b1b4886de650ec109200b4ae057064f91186447907160056e2130591f20d555df9949d3d31d0dc58bebedb0b3fcf2f9820ff9d5b6e88a8dfb6e316c5524960605b53f4b9cad3ee87690772b3de4a3b7463c70f555d3f33142c4e69057c85015e408ea31e12c0ad5fc60e7fc80da58dc6e2e045acb235a4fe6cc5aab27cd1cc028a918e697a10e1290c07cb6f6b810dc2102c83828b22f42fe1ba0aff0705bf416ccb3d56c6728150f88f26a02a281e1f8215473ad4977e0163b6b59ddd51f5913c3c5a4d52915caefaad3033361321c865b457e85ca2a72035257252e70867d703a3dbe1c820f6cde27202881070a16a024950555a28aed4b615f4a98a497072c52a3db1b5824bf8753c05b4a520cb58227c7276321a5005895b14915cc7d672f47aa3caded2a187619c79031c33ad300f0d8db91dbcc8f2507d81575464ce8b90afe8efce42fa51220f8a0922d56b46db6a00203182c3b0ca3d37bf499bf0b2d92963fcf310a1efea465f9c32424f19107b9440ab475f19538da47c7e30eb33d3c90f502313d78ba584733a4718838c93b409eb08c3020f3dc5e9f19f5751387c4e24eaf4b263691d64c413b82294ac292f6cd41bbcb4bd633a1a1e8a0a73407cd54a615f804ee12d3d5d0cfbbbdbd22024114ed8373fa038acb70140de3918f66c218ffe92a7bcad0e36ac54959b37311efed5798eb8b0ab769cf0017fa5d94f9fab46cb513fc87e4200db6cb3bcd2db2ed6cdf4950fe20f17a6d0cd709c707d7e6f0783e348a3a42d0e3a05badbda4dfd83cf220c23c9e341da0ea0dc0ff08857921d3ff3074280b3729d8c0a8e7fe7ff9822d640e9b8c57593ba2e959ae2c8a0fdb87f2024df17ab6ce9b488306499cf0bed284787c00513a374e91415f2bd27f1948d83666d1cd72ee65ddf16422a21df109d2061341d614f6983a9989e263160fb2832c707a5fafd8ff1a92e6553c3e66497fca274e7fdd62412973336a40e1d38ea20575fddbfb51d09d1ba98caf37d05a0ec4c4046bbdb72156c33f954657f6d11e21923f91bb87f5fbaecb57ac869b54df46b1e898c661ec10574f4141a5553ae63c62b56958fe1aa82f01bf6b55706b270b169c2e6f355a017a41d8c480a58ecd2fdcacad8bd0a45e43eaa8787c1316883950a2a3a83b426e6792e8b59e135a913b63c05043b2d476c4c1278b92a0e7d2e9f70f58b16f362b5f4c8eb2c1a940110d4bde405e7c1377ce570b30495e0d77de8bc0018e442b6f48a29d21136d172f23722f90567d2582ce10ec520304260ff94e89b54d481df25961bcc681f918912bb75cb0355f016e735fb0e9659d9568a3f190a0f91575fad06aa82f10fa815d0c35f46b7c0fce3fb549583caf0076397ff13c33cfad7447b28956d46927d22b0426b2e418f59da45350c377410fad7917563024ba1bf8429508060f44080090319ac758d09e3eb23950eec9cd38395dd38f35b729e301e7998145d0fa4aa20f3f189adfa110817170b2ae632284e1e0c3c815a8153843f71ed0fd2e97d738873991994d590130cbdaf06e9abd991807a049c8f8caaaae1f0a999d24eb42ab7a07b390d2555b1bebc477ef0747a125c7a3ff61e1df98186820ec620545fe3d4a10168f0d0837da875a2ef20cd918f6ad9e36737797e0d3f818e765d112b84187126b085850d60134d48c04a2459f5832b9a3f9894a17baf813515539f521371527ca285d59279c128378ae915e90b5756ad889fae91ed608dce17c1d86b1342b3275e0ac14c751cfbe86c1685bdb3e58f5b1323adad90639aa619cb411af29dd23c2a0e1a1227ea740158f70915a27bb591c94f3d085b776783764dac05c88a021c2ba286f456c5cba44cc6dcf06badeaf6d047cc8e5f8df41838b0c88a6abde2c7c04f3d0030fefbc3e96f671eecea4073f86c3c554c2aaaf29faa822174d6f10083cab64271f63a8f53414a3df8b7796d5c812bde414e4e852c6d5cb5ff57700388fda316d8263e62ebbd1407118878199905ba98b795add9751a5495c4e4a2fdb5f3d228917d8ebcc912a509e95751d720b423fb3fd6277a3d4d631b7285524927271fb6b60b0b1e5f8158e4b2300b89cede4fd507684045289fcb5f2287c9e7085dd0338baa44c9b67b5f75f7059a77ea6e92cf97fd8e34f0790e29135c70b72118459f41ed4bdc144595aab55dbaa68343b0d8b63dbe45aa73f7746a86231d08970ec54ec5bd91a6d0d7b18a85e56567e3b6aa05727a25909c600488848019cd1cd37b3ded9ee56248adb0d6043403afe1c703a3acba7fdd0c6ff57eea33afb75b70fd212630c5bce9642b26c589a7eba184d93ffa5ca902cddbb6761a7032de00eb9ad40fe7eac97e7db0c94492a8c608a80f278fc2c68389efccb88df18e1e6306e608622a84145e8bf2b7d44ae04f0460e09e356468f7d91ce6862131eba52e2c9f5d7cf0198fe991ab0fb6c1d5d67b2e19d5139d6887ccbb6a65eff0ef99196cdc2b37f6f4b65ae66f6d4e5718bf9f4b6ff32b37b51910ecaf679cc1bc24714447a3a48bb3fbfb9d32478d5b2bc460301c4cd178fcef43c13682ca309b46c814b8fa7fcdd16d3b180cb7a2945359e94b8660b2c1cc96bbe8745f01737a71fa87166947cb7b4a53f1b7881b728937abb7ce2606bc6ed61ab9f5e958b3e08d041707a0183e2df1102bebf1048560b36731edc50145b4390724f6e99bcaa8063248d0a5c46bc5bb028322d37bfdd8cce818eeaef67703fe6d15e5a3e5c2adf73ed4b13f0120925fb5a065359b5bbb2527207e72675b5e7e56eab9c9bf78baec7f837dcf3a8323ea1a6d7b0586f77e2a7ab7061ede70f1e01b1f73ca9420db947b317beff9e550abfd7bc41e4646f650af67e1bf294f7945990e5e1f5bf12193ef1c89c729f43e420236dda5d6747bf05858913285cf197835ad642cf462696542cc1833aaf1422766049af2ad51341d8223fe76f102c160a13bc36dbaa935cf552bfd6f7f7c624cc0ab7258c7091600e0a2ba8044ddf3156380d1a4f221f59fbde3d409c4c547aa5adc705b72f949a024c01d070f63c24516676671e4cb55c169ecaaae72b4e219076790a8b7969312a6e63cb262e0c1d763f75f405962156c53b29dcd3242129626d4a9b48db39382af1ded914601a52bf0f4b82442b909237384b2e2f50cc3ba279f75690937ce8a6106e2bfc6c79d7d41154e8f886893f219ac7e6df05836d53c52f520ed9ba3caa673983c2378b296a24bbc8fdb02e60f39a4d4f73883dcc8a56d7d0bd172a4663394ec0c725c203ca815f3f79ff2d1ad15178a46299eeb3c252de62f70f1346605f0823caaecfe39968466159a01ebf0870ec59022f379e2bc437191258452cb6f4f8c38852f5df9d25ed242cbd02f3bf63c2f8813ea7c851b29cf27bd15c0ee972051720799e6e77dcd7fc0c892c732fbe772c8d136cb42fdf296aebf80f84b727f7e158bb27df31138284ea4722c60da159aba18cc7e092c2f7f4b28fb7897d4762a118e33f52456b845a0502b924d34aba36c75484c1e9adc10fa1d97d47de9af1a9da0d7940e5963fabea950ef0d988bdd050d7236c0a56a47d2331bc641e429f871798b4657518b433b0bb8c3ea890a5e95e639f67e597df2108c3dd1db1fd90fc51527295af569aff56003c2949f3c2125ea7a3559e1a5ecd45046248feaf6e205b222174f87a5a335da498ec7621aa7f6e08cbdc7c0b917b3929527655a807fdad12a484a445c4b06a0f3e',
        'hash': 'fbebe494438cb53334aa8724584f585e8b4a8bf60ed4980715db8f2203e48f0c',
        'authdigest': '9b1d8d8573de12a22e7f5fbe1e7e6d0b5aefdce183f224f1ecc7c719c7218c2b',
        'depends': [
        ],
        'fee': 1000,
        'sigops': 1
      }
    ],
    'coinbasetxn': {
      'data': '050000800a27a726b4d0d6c2000000002bc31a00010000000000000000000000000000000000000000000000000000000000000000ffffffff05032bc31a00ffffffff0468c5e60e000000001976a91470ae7a3b0651c86b5c55be0e913b35753009486c88ac38c94d010000000017a9143e26d22802442171393f2a72adae960987bd55dc8740787d010000000017a914931fec54c1fea86e574462cc32013f5400b8912987286bee000000000017a914d45cb1adffb5215a42720532a076f02c7c778c9087000000',
      'hash': '29410383bf81248ddab1881677023d736ac9fdac15d35bfab2c15d10e530dcf6',
      'authdigest': 'c20859e98dc8ba64bdf2dde85016a12b8a07c331abded92782c45f0cde3a0daf',
      'depends': [
      ],
      'fee': -4840,
      'sigops': 1,
      'required': true
    },
    'longpollid': '0000000001cd28a15ac0b07b288bc3569ff705d5f6a6f6f7c9c1e9c552509a62222',
    'target': '0000000001e4f700000000000000000000000000000000000000000000000000',
    'mintime': 1659055955,
    'mutable': [
      'time',
      'transactions',
      'prevblock'
    ],
    'noncerange': '00000000ffffffff',
    'sigoplimit': 20000,
    'sizelimit': 2000000,
    'curtime': 1659061354,
    'bits': '1c01e4f7',
    'height': 1753899
  };
};

// Mock Daemon GetBlockSubsidy Data
exports.getBlockSubsidy = function() {
  return {
    'fundingstreams': [
      {
        'recipient': 'Electric Coin Company',
        'specification': 'https://zips.z.cash/zip-0214',
        'value': 0.21875000,
        'valueZat': 21875000,
        'address': 't3XyYW8yBFRuMnfvm5KLGFbEVz25kckZXym'
      },
      {
        'recipient': 'Zcash Foundation',
        'specification': 'https://zips.z.cash/zip-0214',
        'value': 0.15625000,
        'valueZat': 15625000,
        'address': 't3XyYW8yBFRuMnfvm5KLGFbEVz25kckZXym'
      },
      {
        'recipient': 'Major Grants',
        'specification': 'https://zips.z.cash/zip-0214',
        'value': 0.25000000,
        'valueZat': 25000000,
        'address': 't3XyYW8yBFRuMnfvm5KLGFbEVz25kckZXym'
      }
    ],
    'miner': 2.50000000,
    'founders': 0.00000000
  };
};

// Mock Daemon GetAuxBlock Data
exports.getAuxBlock = function() {
  return {
    'chainid': 1,
    'height': 1,
    'hash': '8719aefb83ef6583bd4c808bbe7d49b629a60b375fc6e36bee039530bc7727e2',
    'target': Buffer.from('00000ffff0000000000000000000000000000000000000000000000000000000', 'hex'),
  };
};

// Mock Daemon GetBlockchainInfo Data
exports.getBlockchainInfo = function() {
  return {
    'chain': 'main',
    'blocks': 1,
    'headers': 1,
    'bestblockhash': '1d5af7e2ad9aeccb110401761938c07a5895d85711c9c5646661a10407c82769',
    'difficulty': 0.000244140625,
    'mediantime': 1614202191,
    'verificationprogress': 3.580678270509504e-08,
    'initialblockdownload': false,
    'chainwork': '0000000000000000000000000000000000000000000000000000000000200020',
    'size_on_disk': 472,
    'pruned': false,
    'softforks': [
      {
        'id': 'bip34',
        'version': 2,
        'reject': {
          'status': false
        }
      },
      {
        'id': 'bip66',
        'version': 3,
        'reject': {
          'status': false
        }
      },
      {
        'id': 'bip65',
        'version': 4,
        'reject': {
          'status': false
        }
      }
    ],
    'bip9_softforks': {
      'csv': {
        'status': 'defined',
        'startTime': 1485561600,
        'timeout': 1517356801,
        'since': 0
      },
      'segwit': {
        'status': 'defined',
        'startTime': 1485561600,
        'timeout': 1517356801,
        'since': 0
      }
    },
    'warnings': ''
  };
};

// Mock Daemon GetInfo Data
exports.getInfo = function() {
  return {
    'version' : 89900,
    'protocolversion' : 70002,
    'walletversion' : 60000,
    'balance' : 0.00000000,
    'blocks' : 1,
    'timeoffset' : -2,
    'connections' : 8,
    'proxy' : '',
    'difficulty' : 510929738.01615179,
    'testnet' : false,
    'keypoololdest' : 1386220819,
    'keypoolsize' : 101,
    'paytxfee' : 0.00000000,
    'errors' : 'This is a pre-release test build - use at your own risk - do not use for mining or merchant applications'
  };
};

// Mock Daemon GetPeerInfo Data
exports.getPeerInfo = function() {
  return {
    'id': 20,
    'addr': '18.213.13.51:9333',
    'addrlocal': '173.73.155.96:61108',
    'addrbind': '192.168.1.155:61108',
    'services': '000000000000040d',
    'relaytxes': true,
    'lastsend': 1615676709,
    'lastrecv': 1615676709,
    'bytessent': 1793,
    'bytesrecv': 1782,
    'conntime': 1615674308,
    'timeoffset': 0,
    'pingtime': 0.007751,
    'minping': 0.00522,
    'version': 70015,
    'subver': '/LitecoinCore:0.18.1/',
    'inbound': false,
    'addnode': false,
    'startingheight': 1,
    'banscore': 0,
    'synced_headers': 1,
    'synced_blocks': 1,
    'inflight': [],
    'whitelisted': false,
    'minfeefilter': 0.00001000,
    'bytessent_per_msg': {
      'addr': 55,
      'feefilter': 32,
      'getaddr': 24,
      'getheaders': 93,
      'ping': 672,
      'pong': 672,
      'sendcmpct': 66,
      'sendheaders': 24,
      'verack': 24,
      'version': 131
    },
    'bytesrecv_per_msg': {
      'addr': 55,
      'feefilter': 32,
      'headers': 106,
      'ping': 672,
      'pong': 672,
      'sendcmpct': 66,
      'sendheaders': 24,
      'verack': 24,
      'version': 131
    }
  };
};
