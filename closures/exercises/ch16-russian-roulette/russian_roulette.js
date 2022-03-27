/*
Challenge 16

Create a function russianRoulette that accepts a number (let us call it n), 
and returns a function. The returned function will take no arguments, 
and will return the string 'click' the first n - 1 number of times it 
is invoked. On the very next invocation (the nth invocation), the returned 
function will return the string 'bang'. On every invocation after that, 
the returned function returns the string 'reload to play again'.

To test your solution run
npm t russian_roulette
from the command line

*/

function russianRoulette(n) {}

module.exports = russianRoulette;
