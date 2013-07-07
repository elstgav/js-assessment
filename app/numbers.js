if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return (num & (Math.pow(2, bit-1))) ? 1 : 0;
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var bin = num.toString(2);
        while (bin.length < 8) {
            bin = '0' + bin;
        }
        return bin;
    },

    multiply: function(a, b) {
        var pow = (b + '').split('.')[1].length || 0;
        b *= Math.pow(10, pow);
        return (a*b) / (Math.pow(10, pow));
    }
  };
});

