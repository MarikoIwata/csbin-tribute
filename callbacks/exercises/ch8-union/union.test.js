const union = require('./union');

const mocks = {
  arg: [
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ],
  expectedOutput: [5, 10, 15, 88, 1, 7, 100],
};

describe('union(arrays) challenge', () => {
  const result = union(mocks.arg);

  test('should return an array', () => {
    expect(Array.isArray(result)).toBe(true);
  });

  test('array should contain all values of the passed-in arrays', () => {
    expect(result).toEqual(mocks.expectedOutput);
  });
});
