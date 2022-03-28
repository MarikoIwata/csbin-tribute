let not;
not = require('./not');
// not = require('./solution'); // uncomment to test solution file

const mocks = {
  func: function isEven(x) {
    return x % 2 === 0;
  },
  nums: [1, 2, 3, 4, 5],
};

describe('not(func)', () => {
  const { func: isEven, nums } = mocks;
  const isOdd = not(isEven);

  test('should return a function', () => {
    expect(isOdd).toBeInstanceOf(Function);
  });

  test('the returned function should return a boolean', () => {
    nums.forEach((num) => {
      expect(typeof isOdd(num)).toBe('boolean');
    });
  });

  test('the returned function should return the opposite boolean to the passed-in func', () => {
    nums.forEach((num) => {
      expect(isOdd(num)).toBe(!isEven(num));
    });
  });
});
