/*
Challenge 1

Create a function memoize that receives a function as input
Memoize should also return a function.
Whenever the returned function gets called, it should call the passed-in
function and store its input and output as a key/value pair in a cache object 
The cache object must be hidden from the global slope through closure.
If the cache already has a key
You may assume that the memoized function takes only one argument
and that it is a primitive. Memoize should return a function that when called,
will check if it has already computed the result for the given argument
and return that value instead of recomputing it.

To test your solution run
npm t memoize
from the command line

*/

function memoize(func) {}

module.exports = memoize;
