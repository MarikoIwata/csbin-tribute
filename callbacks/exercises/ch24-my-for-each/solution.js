function myForEach(array, callback, thisArg) {
  // in case array contains empty value(s)
  array = Object.values(array);

  for (const [index, elem] of array.entries()) {
    callback.call(thisArg, elem, index, array);
  }
}

module.exports = myForEach;
