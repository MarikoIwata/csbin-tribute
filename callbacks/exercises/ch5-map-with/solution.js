const forEach = require('../ch4-for-each/solution');

function mapWith(array, callback, thisArg) {
  const output = [];

  forEach(array, (elem, index, array) => {
    const mappedElem = callback.call(thisArg, elem, index, array);
    output.push(mappedElem);
  });

  return output;
}

module.exports = mapWith;
