function map(array, callback, thisArg) {
  const output = [];

  for (const [index, elem] of array.entries()) {
    const mapped = callback.call(thisArg, elem, index, array);
    output.push(mapped);
  }

  return output;
}

module.exports = map;
