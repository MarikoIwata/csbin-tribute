function reduce(array, callback, initialValue) {
  if (initialValue === undefined) {
    initialValue = array[0];
    array = array.slice(1);
  }

  for (const [currentIndex, currentValue] of array.entries()) {
    initialValue = callback(initialValue, currentValue, currentIndex, array);
  }

  return initialValue;
}

module.exports = reduce;
