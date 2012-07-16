function filterNonObjects(suspect, method) {
    if (suspect.constructor == Object) {
        return suspect;
    }
    else {
        throw new Error(method + " called on a non-object");
    }
}

if (typeof Object.prototype.keys === "undefined") {
    Object.prototype.keys = function() {
        filterNonObjects(this, "Object.keys()");
        var args = argsWithThis.call(this, arguments);
        return _.keys.apply(this, args);
    };
}

if (typeof Object.prototype.values === "undefined") {
    Object.prototype.values = function() {
        filterNonObjects(this, "Object.values()");
        var args = argsWithThis.call(this, arguments);
        return _.values.apply(this, args);
    };
}

if (typeof Object.prototype.functions === "undefined") {
    Object.prototype.functions = function() {
        var args = argsWithThis.call(this, arguments);
        var functions = _.functions.apply(this, args);
        return functions.without('all',
                                 'any',
                                 'bindAll',
                                 'clone',
                                 'collect',
                                 'contains',
                                 'defaults',
                                 'detect',
                                 'each',
                                 'every',
                                 'extend',
                                 'filter',
                                 'find',
                                 'forEach',
                                 'foldr',
                                 'groupBy',
                                 'include',
                                 'inject',
                                 'invoke',
                                 'isEmpty',
                                 'keys',
                                 'map',
                                 'max',
                                 'min',
                                 'pick',
                                 'pluck',
                                 'reduce',
                                 'reduceRight',
                                 'reject',
                                 'select',
                                 'some',
                                 'sortBy',
                                 'sortedIndex',
                                 'shuffle',
                                 'size',
                                 'tap',
                                 'toArray',
                                 'values',
                                 'functions');
    };

    Function.prototype.functions = Object.prototype.functions;
}

if (typeof Object.prototype.extend === "undefined") {
    Object.prototype.extend = function() {
        var args = argsWithThis.call(this, arguments);
        return _.extend.apply(this, args);
    };
}

if (typeof Object.prototype.pick === "undefined") {
    Object.prototype.pick = function() {
        var args = argsWithThis.call(this, arguments);
        return _.pick.apply(this, args);
    };
}

if (typeof Object.prototype.defaults === "undefined") {
    Object.prototype.defaults = function() {
        var args = argsWithThis.call(this, arguments);
        return _.defaults.apply(this, args);
    };
}

if (typeof Object.prototype.clone === "undefined") {
    Object.prototype.clone = function() {
        return _.clone(this);
    };
}