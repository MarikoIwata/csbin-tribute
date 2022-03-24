/* 
Challenge 7

Write a function delay that accepts a callback as the first parameter and the wait 
in milliseconds before allowing the callback to be invoked as the second parameter. 

Any additional arguments after wait are provided to func when it is invoked. 

HINT: research setTimeout() – note it behaves differently in nodeJS vs the browser
specifically it differs in the value it returns see:
https://nodejs.org/en/docs/guides/timers-in-node/

To test your solution run
npm t delay
from the command line

*/

function delay(func, wait, ...args) {
  const id = setTimeout(func, wait, ...args);
  return id;
}

module.exports = delay;
