let isPrime;
isPrime = require('./is_prime');
// isPrime = require('./solution'); // uncomment to test solution file

describe('isPrime(number)', () => {
  test('returns boolean indicating whether number is a prime number', () => {
    expect(isPrime(-7)).toBe(false);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(15)).toBe(false);
  });
});
