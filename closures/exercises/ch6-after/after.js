/*Challenge 5

Write a function after that takes the number of times the callback needs 
to be called before being executed as the first parameter and the callback as the second parameter.

To test your solution run
npm t after
from the command line
*/

function after(count, func) {
  let calls = 0;

  return function (...args) {
    calls += 1;
    if (calls >= count) return func(...args);
  };
}

module.exports = after;
