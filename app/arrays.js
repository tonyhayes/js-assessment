if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);

    },

    sum : function(arr) {
        return arr.reduce(function(a, b) {
            return a + b;
        });
    },

    remove : function(arr, item) {
        return arr.filter(function(ele){
            return ele !== item;
        });
    },

    removeWithoutCopy : function(arr, item) {
        // arr = $.grep(arr, function(a) {
        //   return a !== item;
        // });
        // return arr;
        var i = arr.length;
        while (i--) {
            if (arr[i] == item){
                arr.splice(i,1);                
            }
        }
        return arr;    
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr
    },

    curtail : function(arr) {
        arr.shift();
        return arr
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);

    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var n = 0;
        return arr.reduce(function(n, val) {
            return n + (val === item);
        });
    },

    duplicates : function(arr) {
        var sorted_arr = arr.sort(function(a, b) {
                return a - b;
            });                              
        var results = [];
        for (var i = 0; i < arr.length - 1; i++) {
            if (sorted_arr[i + 1] == sorted_arr[i]) {
                if(results.indexOf(sorted_arr[i]) == -1){
                    results.push(sorted_arr[i]);                    
                }
            }
        }
        return results;
    },

    square : function(arr) {
        return arr.map(function (ele) {
            return Math.pow(ele, 2);
        });

    },

    findAllOccurrences : function(arr, target) {
        var position = [];
        var idx = arr.lastIndexOf(target);
        while (idx != -1) {
          position.push(idx);
          idx = (idx > 0 ? arr.lastIndexOf(target, idx - 1) : -1);
        }
        return position
    }
  };
});
