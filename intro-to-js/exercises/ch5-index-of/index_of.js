/* ========== *
 * Challenge 5 *

indexOf is a function that you can call on a string (string1) and accepts another string (string2) as an argument.
It searches through string1 from left to right checking each character to see if it can find string2.
If it finds string2 it returns the index position of the FIRST character that matches string2. 
If it cannot find string2 it returns negative one: -1.

Create a function myIndexOf that takes two strings (string1 and string2). 
It should behave identically to calling string1.indexOf(string2), EXCEPT that instead of returning -1
if it cannot find string2, it should return `Error: "${string2}" not found`

To test your solution run
npm t index_of
from the command line

 * =========== */

function myIndexOf(string1, string2) {}

module.exports = myIndexOf;
