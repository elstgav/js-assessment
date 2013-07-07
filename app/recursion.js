if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
	listFiles: function(data, dirName) {
		var arr = [],
			pushFilesToArray = function(directory) {
				var i, file;

				for (i = 0; i < directory.files.length; i++) {
					file = directory.files[i];
					if (typeof file === 'string') {
						arr.push(file);
					} else {
						// It's a directory object
						pushFilesToArray(file);
					}
				}
			},
			huntForDirectory = function(directory) {
				var i;

				if (directory.dir === dirName) {
					pushFilesToArray(directory);
				} else {
					for (i = 0; i < directory.files.length; i++) {
						if (typeof directory.files[i] === 'object') {
							huntForDirectory(directory.files[i]);
						}
					}
				}

			};
		if (dirName) {
			huntForDirectory(data);
		} else {
			pushFilesToArray(data);
		}
		return arr;
	},

	permute: function(arr) {
		var permutations = [],
			permutation = [],

			compute = function(arr) {
				var i;
				for (i=0; i<arr.length; i++) {
					permutation.push(arr.splice(i,1)[0]); // permutation = [1], arr = [2,3,4]
					if(arr.length === 0) {
						permutations.push(permutation.slice());
					} else {
						compute(arr);
					}
					arr.splice(i, 0, permutation.pop());
				}
			};

		compute(arr);

		return permutations;
	}
  };
});
