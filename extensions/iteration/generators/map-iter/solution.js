function* mapIter(iterable, func) {
  let index = 0;

  for (const x of iterable) {
    yield func(x, index);
    index++;
  }
}

module.exports = mapIter;
