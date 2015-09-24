if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  	return {
	    async : function(value) {
	  		var deferred = new $.Deferred();
	        deferred.resolve(value);
	    	return deferred.promise();
	    },

	    manipulateRemoteData : function(url) {

    		var d = $.Deferred();
    		$.get(url)
    		.done(function(response){
			  	var names = response.people.map(function (person){
			  		return person.name;
		  		});    			
    			d.resolve(names.sort());
    			})
    		.fail(d.reject);

    		return d.promise();


	    }
  	};
});
