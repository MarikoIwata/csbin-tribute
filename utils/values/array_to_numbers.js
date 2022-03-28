function arrayToNumbers(array) {
  return array.map(Number).filter((x) => !Number.isNaN(x));
}

module.exports = arrayToNumbers;
