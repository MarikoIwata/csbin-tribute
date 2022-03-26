/* ========== *
 * Challenge 8 *

Create a function range returns an array of all whole numbers between 
'start' and 'end' in sequential order.

To test your solution run 
npm t range
from the command line

* =========== */

function range(start, end) {
  const output = [];

  for (let i = start; i <= end; i++) {
    output.push(i);
  }
  return output;
}

module.exports = range;
