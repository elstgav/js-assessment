if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	return {
		fizzBuzz : function(num) {
			var answer = num;

			if (!num || typeof num !== 'number') return false;
			// otherwise the function should return the number, or false if no number
			// was provided or the value provided is not a number

			if (num % 3 === 0) {
				answer = 'fizz';
			}
			if (num % 5 === 0) {
				answer = typeof answer === 'string' ? 'fizzbuzz' : 'buzz';
			}

			return answer;
		}
	};
});
