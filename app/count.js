if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
	count : function (start, end) {
		var counter;

		function count(){
			console.log(start);

			if (start < end) {
				start++;
				counter = setTimeout(count, 100);
			}
		}

		count();

		return {
			cancel: function() {
				clearTimeout(counter);
			}
		};
	}
  };
});
