/* 
Challenge 11

Construct a function objectFilter that accepts an object as the first parameter 
and a callback function as the second parameter. objectFilter will return 
a new object. The new object will contain only the properties from the input 
object such that the property's value is equal to the property's key passed 
into the callback.

To test your solution run
npm t object_filter
from the command line
*/

function objectFilter(obj, callback) {
  const filteredEntries = Object.entries(obj).filter(
    ([key, value]) => callback(key) === value
  );

  console.log('filteredEntries', filteredEntries);
  return Object.fromEntries(filteredEntries);
}

module.exports = objectFilter;
