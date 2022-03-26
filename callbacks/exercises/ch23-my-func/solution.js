function myFunc(array, callback) {
  for (const [index, elem] of array.entries()) {
    if (callback(elem)) return index;
  }
  return -1;
}

module.exports = myFunc;
