/* 
Challenge 12

Create a function majority that accepts an array and a callback. 
The callback will return either true or false. majority will 
iterate through the array and perform the callback on each 
element until it can be determined if the majority of the return 
values from the callback are true. If the number of true returns 
is equal to the number of false returns, majority should return false. 

To test your solution run
npm t majority
from the command line

*/
function majority(array, callback) {
  const majorityThreshold = Math.floor(array.length / 2);
  let trues = 0;
  let falses = 0;

  for (const elem of array) {
    callback(elem) ? trues++ : falses++;

    if (trues > majorityThreshold) return true;
    if (falses > majorityThreshold) return false;
  }

  // if we make it here -> trues === falses
  return false;
}

module.exports = majority;
