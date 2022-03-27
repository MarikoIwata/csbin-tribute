/*
Challenge 12

Create a function dateStamp that accepts a function and returns a function. 
The returned function will accept however many arguments the passed-in 
function accepts, and return an object with a date key that contains a 
timestamp with the time of invocation, and an output key that contains 
the result from invoking the passed-in function. HINT: You may need to 
research how to access information on Date objects.

To test your solution run
npm t date_stamp
from the command line

*/

function dateStamp(func) {}

module.exports = dateStamp;
