(function() {

    // Convenience method to filter out non objects and
    // throw an error on bad values
    function filterNonObjects(suspect, method) {
        if (suspect.constructor == Object) {
            return suspect;
        }
        else {
            throw new Error(method + " called on a non-object");
        }
    }

    //### keys
    if (typeof Object.prototype.keys === "undefined") {
        // Retrieve all the names of the object's properties.
        Object.prototype.keys = function() {
            filterNonObjects(this, "Object.keys()");
            var args = argsWithThis.call(this, arguments);
            return _.keys.apply(this, args);
        };
    }

    //### values
    if (typeof Object.prototype.values === "undefined") {
        // Return all of the values of the object's properties.
        Object.prototype.values = function() {
            filterNonObjects(this, "Object.values()");
            var args = argsWithThis.call(this, arguments);
            return _.values.apply(this, args);
        };
    }

    //### functions
    if (typeof Object.prototype.functions === "undefined") {
        // Returns a sorted list of the names of every method in an object — that is to say, the name of every function property of the object.
        Object.prototype.functions = function() {
            var args = argsWithThis.call(this, arguments);
            var functions = _.functions.apply(this, args);
            return functions.without('functions',
                                     'keys',
                                     'values',
                                     'extend',
                                     'pick',
                                     'defaults',
                                     'clone',
                                     'isEqual',
                                     'isEmpty',
                                     'isElement',
                                     'isArguments',
                                     'isObject',
                                     'isArray',
                                     'isNumber',
                                     'isBoolean',
                                     'isFunction',
                                     'isDate',
                                     'isRegExp',
                                     'isFinite',
                                     'isNaN',
                                     'isNull',
                                     'isUndefined',
                                     'tap');
        };

        Function.prototype.functions = Object.prototype.functions;
    }

})();