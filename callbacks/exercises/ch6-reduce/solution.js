function reduce(array, reducerCallback, initialValue) {
  if (initialValue === undefined) {
    initialValue = array[0];
    array = array.slice(1);
  }

  for (const [currentIndex, currentValue] of array.entries()) {
    initialValue = reducerCallback(
      initialValue,
      currentValue,
      currentIndex,
      array
    );
  }

  return initialValue;
}

module.exports = reduce;
