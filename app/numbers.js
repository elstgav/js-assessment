if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        // rmurphey's solution: return 1 & (num >> (bit-1))
        //
        // Her solution is really clever and far more elegant than mine! Using bitwise
        // shifting (>>) she moves the bit she's interested in into the "1" position, and
        // then uses a bitwise AND to see if the bit is equal to 1.
        //
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
        // for more info on bitwise operators.
        //
        // Now that I have a better grasp of bitwise shifting, I wonder if I would have
        // arrived at the same solution. Instead, I created a binary number that has a 1
        // in the bit position I'm concerned with. I did that with Math.pow(2, bit-1),
        // effectively doing the work of 1 << (num-1). I then do a bitwise AND with the
        // number. If it returns a number, then the bit was a 1, otherwise it's 0.
        //
        // Demo:
        // num = 43 (101011), bit = 4
        // So the bit I'm concerned with is this: 101011
        //                                          ^
        // 2^(4-1) = 8. In binary, 8 is 1000.
        // Using a bitwise AND (&), then 43 & 8 equals:
        //
        //     101011 (43)
        //   &   1000  (8)
        //   --------
        //       1000  (8)
        //
        // 8 is truthy, so I return a 1.
        return (num & (Math.pow(2, bit-1))) ? 1 : 0;
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        // Here I use Number.toString([radix]) to convert the number into a binary string,
        // and then pad it with zeroes until the string is 8 chars long.
        //
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

        var bin = num.toString(2);

        while (bin.length < 8) {
            bin = '0' + bin;
        }

        return bin;
    },

    multiply: function(a, b) {
        // Peeking at rmurphey's solution, she figures out how many decimals she has to
        // adjust by using Math.log (equivalent to ln(x)). Unfortunately, that produces
        // huge or even incorrect exponents when working with small or "complex" decimals,
        // like 0.2344232
        //
        // I chose a different route, by converting the decimal into a string, splitting
        // it by the decimal point, and then counting the length of the string to the
        // right of the decimal.

        function getSafeToDivide(num) {
            var decimals   = num.toString().split('.')[1], // 21.0002 => "0002"
                exponent   = decimals ? decimals.length : 0,
                multiplier = Math.pow(10, exponent);

            return {
                safe:       num * multiplier,
                multiplier: multiplier
            };
        }

        a = getSafeToDivide(a);
        b = getSafeToDivide(b);

        return (a.safe * b.safe) / (a.multiplier * b.multiplier);
    }
  };
});

