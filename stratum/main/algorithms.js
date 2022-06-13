const hashing = require('bindings')('hashing.node');

////////////////////////////////////////////////////////////////////////////////

// Main Algorithms Function
const Algorithms = {

  // Equihash Algorithm
  'equihash': {
    multiplier: 1,
    diff: parseInt('0x0007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
    hash: function() {
      return function() {
        return hashing.equihash.apply(this, [arguments[0], arguments[1], 'ZcashPoW', 200, 9]);
      };
    }
  },

  // Sha256d Algorithm
  'sha256d': {
    multiplier: 1,
    diff: parseInt('0x00000000ffff0000000000000000000000000000000000000000000000000000'),
    hash: function() {
      return function() {
        return hashing.sha256d.apply(this, arguments);
      };
    }
  },
};

module.exports = Algorithms;
