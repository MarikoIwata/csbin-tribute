function map(array, callback) {
  const output = [];

  for (const x of array) {
    output.push(callback(x));
  }

  return output;
}

module.exports = map;
