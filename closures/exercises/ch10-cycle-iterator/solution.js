function cycleIterator(array) {
  let i = 0;
  return function cycle() {
    return array[i++ % array.length];
  };
}

module.exports = cycleIterator;
