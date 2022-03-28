/*
Challenge 1

Create a function memoize that receives a function (func) as input
and also returns a function. You may assume that the func only expects
one argument.

Whenever the returned function gets called, it should check a cache 
to see if it has already computed the result for the given argument.
If it has, it should retrieve it from the cache rather than invoking func.
If it hasn't it should store the argument and output as a key/value 
pair in the cache, and then return the output.

The cache must be hidden from the global slope through closure.

Note: the tests are quite picky about what kind of values can be stored
and retrieved from the cache. You may have to consider how to appropriately
store, check for, and retrieve falsy values...

To test your solution run
npm t memoize
from the command line

*/

function memoize(func) {}

module.exports = memoize;
