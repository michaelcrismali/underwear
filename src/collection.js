//### each
// Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is bound to the context object, if one is passed. Each invocation of iterator is called with three arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list). Delegates to the native forEach function if it exists.
if (typeof Array.prototype.each === "undefined") {
    Array.prototype.each = function() {
        var args = argsWithThis.call(this, arguments);
        return _.each.apply(this, args);
    };
}

if (typeof Object.prototype.each === "undefined") {
    Object.prototype.each = function() {
        var args = argsWithThis.call(this, arguments);
        return _.each.apply(this, args);
    };
}

if (typeof Object.prototype.forEach === "undefined") {
    Object.prototype.forEach = Object.prototype.each;
}

//### map, collect
// Produces a new array of values by mapping each value in list through a transformation function (iterator). If the native map method exists, it will be used instead. If list is a JavaScript object, iterator's arguments will be (value, key, list).
if (typeof Object.prototype.map === "undefined") {
    Object.prototype.map = function() {
        var args = argsWithThis.call(this, arguments);
        return _.map.apply(this, args);
    };
}

if (typeof HTMLCollection.prototype.map === "undefined") {
    HTMLCollection.prototype.map = function() {
        var args = argsWithThis.call(this, arguments);
        return _.map.apply(this, args);
    };
}

if (typeof Object.prototype.collect === "undefined") {
    Object.prototype.collect = Object.prototype.map;
}

//### reduce, inject
// Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iterator.
if (typeof Object.prototype.reduce === "undefined") {
    Object.prototype.reduce = function() {
        var args = argsWithThis.call(this, arguments);
        return _.reduce.apply(this, args);
    };
}

if (typeof Object.prototype.inject === "undefined") {
    Object.prototype.inject = Object.prototype.reduce;
}

//### reduceRight, foldr
// The right-associative version of reduce. Delegates to the JavaScript 1.8 version of reduceRight, if it exists. Foldr is not as useful in JavaScript as it would be in a language with lazy evaluation.
if (typeof Object.prototype.reduceRight === "undefined") {
    Object.prototype.reduceRight = function() {
        var args = argsWithThis.call(this, arguments);
        return _.reduceRight.apply(this, args);
    };
}

if (typeof Object.prototype.foldr === "undefined") {
    Object.prototype.foldr = Object.prototype.reduceRight;
}

//### find, detect
// Looks through each value in the list, returning the first one that passes a truth test (iterator). The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
if (typeof Object.prototype.find === "undefined") {
    Object.prototype.find = function() {
        var args = argsWithThis.call(this, arguments);
        return _.find.apply(this, args);
    };
}

if (typeof Object.prototype.detect === "undefined") {
    Object.prototype.detect = Object.prototype.find;
}

//### filter
// Looks through each value in the list, returning an array of all the values that pass a truth test (iterator). Delegates to the native filter method, if it exists.
if (typeof Object.prototype.filter === "undefined") {
    Object.prototype.filter = function() {
        var args = argsWithThis.call(this, arguments);
        return _.filter.apply(this, args);
    };
}

if (typeof Object.prototype.select == 'undefined') {
    Object.prototype.select = Object.prototype.filter;
}

//### reject
// Returns the values in list without the elements that the truth test (iterator) passes. The opposite of filter.
if (typeof Object.prototype.reject === "undefined") {
    Object.prototype.reject = function() {
        var args = argsWithThis.call(this, arguments);
        return _.reject.apply(this, args);
    };
}

//### every, all
// Returns true if all of the values in the list pass the iterator truth test. Delegates to the native method every, if present.
if (typeof Object.prototype.every === "undefined") {
    Object.prototype.every = function() {
        var args = argsWithThis.call(this, arguments);
        return _.every.apply(this, args);
    };
}

if (typeof Object.prototype.all == 'undefined') {
    Object.prototype.all = Object.prototype.every;
}

//### some, any
// Returns true if any of the values in the list pass the iterator truth test. Short-circuits and stops traversing the list if a true element is found. Delegates to the native method some, if present.
if (typeof Object.prototype.some === "undefined") {
    Object.prototype.some = function() {
        var args = argsWithThis.call(this, arguments);
        return _.some.apply(this, args);
    };
}

if (typeof Object.prototype.any == 'undefined') {
    Object.prototype.any = Object.prototype.some;
}

//### include
// Returns true if the value is present in the list, using === to test equality. Uses indexOf internally, if list is an Array.
if (typeof Object.prototype.include === "undefined") {
    Object.prototype.include = function() {
        var args = argsWithThis.call(this, arguments);
        return _.include.apply(this, args);
    };
}

if (typeof Object.prototype.contains === "undefined") {
    Object.prototype.contains = Object.prototype.include;
}

//### invoke
// Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
if (typeof Object.prototype.invoke === "undefined") {
    Object.prototype.invoke = function() {
        var args = argsWithThis.call(this, arguments);
        return _.invoke.apply(this, args);
    };
}

//### pluck
// A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.
if (typeof Object.prototype.pluck === "undefined") {
    Object.prototype.pluck = function() {
        var args = argsWithThis.call(this, arguments);
        return _.pluck.apply(this, args);
    };
}

//### max
// Returns the maximum value in list. If iterator is passed, it will be used on each value to generate the criterion by which the value is ranked.
if (typeof Object.prototype.max === "undefined") {
    Object.prototype.max = function() {
        var args = argsWithThis.call(this, arguments);
        return _.max.apply(this, args);
    };
}

//### min
// Returns the minimum value in list. If iterator is passed, it will be used on each value to generate the criterion by which the value is ranked.
if (typeof Object.prototype.min === "undefined") {
    Object.prototype.min = function() {
        var args = argsWithThis.call(this, arguments);
        return _.min.apply(this, args);
    };
}

//### sortBy
// Returns a sorted copy of list, ranked in ascending order by the results of running each value through iterator. Iterator may also be the string name of the property to sort by (eg. length).
if (typeof Object.prototype.sortBy === "undefined") {
    Object.prototype.sortBy = function() {
        var args = argsWithThis.call(this, arguments);
        return _.sortBy.apply(this, args);
    };
}

//### groupBy
// Splits a collection into sets, grouped by the result of running each value through iterator. If iterator is a string instead of a function, groups by the property named by iterator on each of the values.
if (typeof Object.prototype.groupBy === "undefined") {
    Object.prototype.groupBy = function() {
        var args = argsWithThis.call(this, arguments);
        return _.groupBy.apply(this, args);
    };
}

//### sortedIndex
// Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order. If an iterator is passed, it will be used to compute the sort ranking of each value.
if (typeof Object.prototype.sortedIndex === "undefined") {
    Object.prototype.sortedIndex = function() {
        var args = argsWithThis.call(this, arguments);
        return _.sortedIndex.apply(this, args);
    };
}

//### shuffle
// Returns a shuffled copy of the list, using a version of the [Fisher-Yates](http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle "Fisher-Yates") shuffle.
if (typeof Object.prototype.shuffle === "undefined") {
    Object.prototype.shuffle = function() {
        var args = argsWithThis.call(this, arguments);
        return _.shuffle.apply(this, args);
    };
}

//### toArray
// Converts the list (anything that can be iterated over), into a real Array. Useful for transmuting the arguments object.
if (typeof Object.prototype.toArray === "undefined") {
    Object.prototype.toArray = function() {
        var args = argsWithThis.call(this, arguments);
        return _.values.apply(this, args);
    };
}

//### size
// Return the number of values in the list.
if (typeof Object.prototype.size === "undefined") {
    Object.prototype.size = function() {
        var args = argsWithThis.call(this, arguments);
        return _.size.apply(this, args);
    };
}