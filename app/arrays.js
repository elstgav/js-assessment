if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
	indexOf : function(arr, item) {
		return arr.indexOf(item);
	},

	sum : function(arr) {
		return arr.reduce(function(prev, cur, i, arr){
			return prev + cur;
		});
	},

	remove : function(arr, item) {
		while(arr.indexOf(item) > 0) {
			arr.splice(arr.indexOf(item), 1);
		}
		return arr;
	},

	removeWithoutCopy : function(arr, item) {
		while(arr.indexOf(item) > 0) {
			arr.splice(arr.indexOf(item), 1);
		}
		return arr;
	},

	append : function(arr, item) {
		arr.push(item);
		return arr;
	},

	truncate : function(arr) {
		arr.pop();
		return arr;
	},

	prepend : function(arr, item) {
		arr.unshift(item);
		return arr;
	},

	curtail : function(arr) {
		arr.shift();
		return arr;
	},

	concat : function(arr1, arr2) {
		return arr1.concat(arr2);
	},

	insert : function(arr, item, index) {
		arr.splice(index, 0, item);
		return arr;
	},

	count : function(arr, item) {
		var count = 0,
			lastIndex = arr.indexOf(item, 0);

		while (lastIndex >= 0) {
			count++;
			lastIndex = arr.indexOf(item, lastIndex + 1);
		}
		return count;
	},

	duplicates : function(array) {
		var temp = [],
			duplicates = [];

		array.forEach(function(val, i, arr){
			if (temp[val]) {
				temp[val]++;
			} else {
				temp[val] = 1;
			}
		});
		temp.forEach(function(val, i, arr) {
			if (val >= 2) {
				duplicates.push(i);
			}
		});
		return duplicates;
	},

	square : function(arr) {
		return arr.map(function(val) {
			return Math.pow(val, 2);
		});
	},

	findAllOccurrences : function(arr, target) {
		var occurences = [],
			lastIndex = arr.indexOf(target, 0);

		while (lastIndex >= 0) {
			occurences.push(lastIndex);
			lastIndex = arr.indexOf(target, lastIndex + 1);
		}

		return occurences;
	}
  };
});
