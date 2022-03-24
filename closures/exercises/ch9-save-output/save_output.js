/*
Challenge 9

Create a function saveOutput that accepts a function 
(that will accept one argument), and a string 
(that will act as a password). saveOutput will then return 
a function that behaves exactly like the passed-in function, 
except for when the password string is passed in as an argument. 
When this happens, the returned function will return an object 
with all previously passed-in arguments as keys, and the 
corresponding outputs as values.

To test your solution run 
npm t save_output
from the command line
*/

function saveOutput(func, password) {
  const cache = {};

  return function (arg) {
    if (arg === password) return cache;

    return (cache[arg] = func(arg));
  };
}

module.exports = saveOutput;
