/*
Challenge 3

Create a function compose that expects an arbitrary number of functions
as arguments – comma separated, NOT an array.
Note:  Also all of the functions only accept one argument, except the last one 
which can accept any number (take a look at the tests if this is confusing).

compose should return a function, which when called passes its arguments to
the last of the originally passsed-in functions, and then passes the output to 
the second to last function, then that output to the third from last etc. 
In other words, it does its 'composition' from right to left.

To test your solution run
npm t compose
from the command line

*/

function compose(...funcs) {}

module.exports = compose;
