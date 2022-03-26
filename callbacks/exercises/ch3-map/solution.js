function map(array, callback) {
  const output = [];

  for (const [index, elem] of array.entries()) {
    output.push(callback(elem, index, array));
  }

  return output;
}

module.exports = map;
