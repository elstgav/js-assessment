if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
	return {
		async : function(value) {
			var def = $.Deferred();
			def.resolve(value);
			return def.promise();
		},

		manipulateRemoteData : function(url) {
			var def = $.Deferred(),
				people = [];

			$.get(url, function(data, textStatus, jqXHR){
				for (var person in data.people) {
					people.push(data.people[person].name);
				}
				people.sort();
				def.resolve(people);
			});

			return def.promise();
		}
	};
});
