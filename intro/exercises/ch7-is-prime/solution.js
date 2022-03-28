const range = require('../../../utils/values/range');

function isPrime(number) {
  if (number <= 2) {
    return number == 2 && true;
  }

  // range creates an array of integers between its first and second arg
  // (second arg exclusive)
  const nums = range(3, Math.ceil(Math.sqrt(number)));

  for (const x of nums) {
    if (number % x == 0) return false;
  }

  return true;
}

module.exports = isPrime;
