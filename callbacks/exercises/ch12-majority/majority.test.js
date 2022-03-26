let majority;
majority = require('./majority');
// majority = require('./solution'); // uncomment to test solution file

const mocks = {
  arr1: [1, 2, 3, 5, 4],
  arr2: [1, 2, 12, 5, 8],
  arr3: [2, 3, 6, 5],
  callback: jest.fn(function isOdd(x) {
    return x % 2 === 1;
  }),
};

describe('majority(array, callback)', () => {
  const { arr1, arr2, arr3, callback } = mocks;
  const expectedTrue = majority(arr1, callback);
  const expectedFalse = majority(arr2, callback);
  const equalTruesFalses = majority(arr3, callback);

  test('should return a boolean', () => {
    expect(typeof expectedTrue).toBe('boolean');
    expect(typeof expectedFalse).toBe('boolean');
  });

  test('should return true if majority of elements return true when passed to callback', () => {
    expect(expectedTrue).toBe(true);
    expect(expectedFalse).toBe(false);
  });
  test('if number of true and false returns are equal, then majority(...) should return false', () => {
    expect(equalTruesFalses).toBe(false);
  });

  test('majority(...) should short-circuit once a majority of true/false values has been established', () => {
    expect(callback.mock.calls).not.toContainEqual([arr1.at(-1)]);
  });
});
