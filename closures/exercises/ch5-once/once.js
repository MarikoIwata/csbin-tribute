/*
Challenge 5

Write a function once that accepts a callback as input and returns a function. 
When the returned function is called the first time, it should call the callback 
and return that output. If it is called any additional times, instead of calling 
the callback again it will simply return the output value from the first time it was called.

To test your solution run 
npm t once
from the command line
*/

function once(func) {
  let output;
  return function (x) {
    if (output === undefined) output = func(x);
    return output;
  };
}

module.exports = once;
