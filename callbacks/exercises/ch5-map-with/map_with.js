/*
Challenge 5

In challenge 3, you created a function called map. In this challenge, 
you're going to rebuild the map function by creating a function called mapWith. 

This time you're going to use forEach (the function you created in the last exercise)
inside of mapWith instead of a for loop.

Remember: a for loop and forEach serve the same purpose – giving us sequential access to
array elements.

As map and mapWith should behave identically, to test your mapWith works correctly
go to the test file in the ch3-map directory. At the top are instructions on how to make
the tests use your mapWith function from here instead.
*/
// To test your solution run
// npm t ".*/map.test.js"
// from the command line

// gives you access to forEach in this file
const forEach = require('../ch4-for-each/for_each');

function mapWith(array, callback, thisArg) {}

module.exports = mapWith;
