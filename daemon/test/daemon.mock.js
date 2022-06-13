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
