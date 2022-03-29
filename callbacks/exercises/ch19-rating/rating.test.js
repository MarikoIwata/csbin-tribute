let rating;
rating = require('./rating');
// rating = require('./solution'); // uncomment to test solution file

const mocks = {
  mockCbs: [
    jest.fn(function isEven(x) {
      return x % 2 === 0;
    }),
    jest.fn(function greaterThanFour(x) {
      return x > 4;
    }),
    jest.fn(function isPerfectSquare(x) {
      return Math.sqrt(x) % 1 === 0;
    }),
    jest.fn(function hasSix(x) {
      return x.toString().includes('6');
    }),
  ],
  data: [64, 66],
  expected: [100, 75],
};

describe('rating(arrOfFuncs, value)', () => {
  const {
    mockCbs,
    data: [value1, value2],
  } = mocks;

  const results = [rating(mockCbs, value1), rating(mockCbs, value2)];

  test('should call all of the functions in the array', () => {
    mockCbs.forEach((func) => {
      expect(func).toHaveBeenCalled();
    });
  });

  test('should return a number', () => {
    results.forEach((result) => expect(typeof result).toBe('number'));
  });

  test('returned number should be between 0 and 100', () => {
    results.forEach((result) => {
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(100);
    });
  });

  test('should return percentage of function calls that returned true', () => {
    expect(results).toEqual(mocks.expected);
  });
});
