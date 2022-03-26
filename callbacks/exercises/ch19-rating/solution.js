function rating(arrOfFuncs, value) {
  const trues = arrOfFuncs.reduce((acc, fn) => (fn(value) ? acc + 1 : acc), 0);
  return (trues / arrOfFuncs.length) * 100;
}

module.exports = rating;
