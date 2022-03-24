/*
Challenge 8

Write a function rollCall that accepts an array of names and returns a function. 
The first time the returned function is invoked, it should return the first name. 
The second time it is invoked, it should return the second name, and so on, until 
all names have been returned. Once all names have been returned, it should return 
'Everyone accounted for'.

To test your solution run 
npm t roll_call
from the command line

*/

function rollCall(names) {
  let i = 0;
  return function () {
    return i >= names.length ? 'Everyone accounted for' : names[i++];
  };
}

module.exports = rollCall;
