if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(arg) {
            return str + ', ' + arg;
        };
    },

    makeClosures : function(arr, fn) {
        var returnArr = [];

        var whatEv = function(val) {
            return function() { return fn(val); };
        };

        for (var i = 0, len = arr.length; i < len; i++) {
            returnArr.push(whatEv(arr[i]));
        }

        return returnArr;
    },

    partial : function(fn, str1, str2) {
       return function(str3) {
            return fn.call(null, str1, str2, str3);
        };
    },

    useArguments : function() {
        var total = 0;

        for (var i = 0, len = arguments.length; i < len; i++) {
            total += arguments[i];
        }

        return total;

    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        fn.apply(null, args);

    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function() {
            var moreArgs = args.concat(Array.prototype.slice.call(arguments));
            return fn.apply(null, moreArgs);
        };

    },

    curryIt : function(fn) {
        function applyArguments(fn, arguments) {
          return fn.apply(null, arguments);
        }

        function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
            return function (currentArgument) {
                accumulatedArguments.push(currentArgument);

                var args = accumulatedArguments.length === expectedArgumentsCount;

                if (args) {
                    return applyArguments(fn, accumulatedArguments);
                } else {
                    return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
                }
            };
        }

        return getArgumentAccumulator([], fn.length);

        }
    };
});
