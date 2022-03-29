function forEach(array, callback, thisArg) {
  for (const [index, elem] of array.entries()) {
    callback.call(thisArg, elem, index, array);
  }
}

module.exports = forEach;
