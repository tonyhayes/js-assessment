if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
	    count : function (start, end) {
		    var timeout;
		    function counter () {
		      	console.log(start++);

		      	if (start <= end) {
		        	timeout = setTimeout(counter, 100);
		      	}
		    }

		    counter();

		    return {
		      	cancel : function () {

		        	if(timeout){
		        		clearTimeout(timeout);
		        	} 
		      	}
		    };
    	}
  	};
});