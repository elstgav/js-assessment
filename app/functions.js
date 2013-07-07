if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
	argsAsArray : function(fn, arr) {
		return fn.apply(fn, arr);
	},

	speak : function(fn, obj) {
		return fn.call(obj);
	},

	functionFunction : function(str) {
		return function(str2) {
			return str +', '+ str2;
		};
	},

	makeClosures : function(arr, fn) {
		return arr.map(function(val, i, arr) {
			return fn.bind(fn, val);
		});
	},

	partial : function(fn, str1, str2) {
		return fn.bind(fn, str1, str2);
	},

	useArguments : function() {
		var arr = Array.prototype.slice.call(arguments);
		return arr.reduce(function(prev, curr) {
			return prev + curr;
		});
	},

	callIt : function(fn) {
		fn.apply(fn, Array.prototype.slice.call(arguments, 1));
	},

	partialUsingArguments : function(fn) {
		return fn.bind.apply(fn, arguments);
	},

	curryIt : function(fn) {
		var len = fn.length,
			args = [],
			curry = function(val) {
				args.push(val);

				if(args.length === len) {
					return fn.apply(fn, args);
				} else {
					return curry;
				}
			};

		return curry;
	}
  };
});
