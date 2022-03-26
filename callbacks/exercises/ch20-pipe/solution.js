function pipe(arrOfFuncs, value) {
  return arrOfFuncs.reduce((acc, fn) => fn(acc), value);
}

module.exports = pipe;
