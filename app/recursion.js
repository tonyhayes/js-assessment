if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
	    var list = [];
	    var folders = [];

	    read(data);

	    function read(folder) {
	      	var i, len, file;
	      	var files = folder.files;

	      	folders.push( folder.dir );

	      	for (i = 0, len = files.length; i < len; i++) {
	        	file = files[i];
	        	if (typeof file === 'string') {
	          		if (!dirName || folders.indexOf(dirName) > -1) {
	            		list.push(files[i]);
	          		}
	        	} else {
	          		read(files[i]);
	        	}
	      	}

	      	folders.pop();
	    }

	    return list;

    },

    	permute: function(arr) {

		    // http://stackoverflow.com/a/11509565/54468
		    var temp = [];
		    var answer = [];

		    return sliceAndDice(arr);

		    function sliceAndDice(a) {
		      	var i, len, item;

		      	for (i = 0, len = arr.length; i < len; i++) {
		        	// remove the item at index i
		        	item = arr.splice(i, 1)[0];

		        	// add that item to the array we're building up
		        	temp.push(item);

		        	if (arr.length) {
		          	// if there's still anything left in the array,
		          	// recurse over what's left
		          		sliceAndDice(arr);
		        	} else {
		          	// otherwise, log the result and move on
		          		print();
		        	}

		        	// restore the item we removed at index i
		        	// and remove it from our temp array
		        	arr.splice(i, 0, item);
		        	temp.pop();
		      	}

		      	return answer;
		    }

		    function print() {
		      answer.push(
		        // make a copy of temp using .slice()
		        // so we can continue to work with temp
		        temp.slice()
		      );
		    }



    	}
  	};
});
