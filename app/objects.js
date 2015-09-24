if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  	return {
	    alterContext : function(fn, obj) {
	    	obj.sayIt = fn;
	    	return obj.sayIt();
	    },

	    alterObjects : function(constructor, greeting) {
			constructor.prototype.greeting = greeting;
	    },

	    iterate : function(obj) {

	 		var arr = [];
		  	for (var prop in obj) {
		    	if (obj.hasOwnProperty(prop)) {
		      		arr.push(prop + ': ' + obj[prop]);
		    	}
		  	}
		  	return arr;

	    }
  	};
});
