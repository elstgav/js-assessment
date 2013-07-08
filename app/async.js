if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
	return {
		async : function(value) {
			var dfd = $.Deferred();
			dfd.resolve(value);
			return dfd.promise();
		},

		manipulateRemoteData : function(url) {
			var dfd = $.Deferred();

			$.get(url, function(data, textStatus, jqXHR){
				var people = $.map(data.people, function(person){
					return person.name;
				});

				dfd.resolve(people.sort());
			});

			return dfd.promise();
		}
	};
});
