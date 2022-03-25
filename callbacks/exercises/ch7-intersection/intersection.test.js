const intersection = require('./intersection');

const mocks = {
  arg: [
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ],
  expectedOutput: [5, 15],
};

describe('intersection(arrays) challenge', () => {
  const result = intersection(mocks.arg);

  test('should return an array', () => {
    expect(Array.isArray(result)).toBe(true);
  });

  test('array should contain elements appearing in all of the passed-in arrays', () => {
    expect(result).toEqual(mocks.expectedOutput);
  });
});
