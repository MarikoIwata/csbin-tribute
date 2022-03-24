/*
Challenge 4

Create a function addByX that returns a function that will add an input by x.

To test your solution run
npm t add_by_x 
from the command line
*/

function addByX(x) {
  return function (y) {
    return x + y;
  };
}

module.exports = addByX;
