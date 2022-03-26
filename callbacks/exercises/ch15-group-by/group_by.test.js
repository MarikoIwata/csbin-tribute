let groupBy;
groupBy = require('./group_by');
// groupBy = require('./solution'); // uncomment to test solution file
const isObject = require('../../../utils/values/is_object');
const arrayToNumbers = require('../../../utils/values/array_to_numbers');

const mocks = {
  decimals: [1.3, 2.1, 2.4],
  callback: jest.fn(function floored(num) {
    return Math.floor(num);
  }),
  expectedResult: { 1: [1.3], 2: [2.1, 2.4] },
};

describe('groupBy(array, callback)', () => {
  const { decimals, callback } = mocks;
  const result = groupBy(decimals, callback);

  test('should return an object', () => {
    expect(isObject(result)).toBe(true);
  });
  test('should perform the callback on each element of the array', () => {
    const cbCalls = callback.mock.calls.length;
    const expectedCbCalls = decimals.length;

    expect(cbCalls).toBe(expectedCbCalls);
  });

  test('each returned value from the callback should be a key on the object', () => {
    const cbResults = [
      ...new Set(callback.mock.results.map(({ value }) => value)),
    ];
    // keys need to be coerced from strings to numbers for comparison
    const keys = arrayToNumbers(Object.keys(result));
    expect(cbResults).toEqual(keys);
  });

  test('values of the returned object should be arrays', () => {
    const values = Object.values(result);

    values.forEach((value) => {
      expect(Array.isArray(value)).toBe(true);
    });
  });

  test('the arrays should contain the elements that resulted in their key being returned from the callback.', () => {
    const { expectedResult } = mocks;
    expect(result).toEqual(expectedResult);
  });
});
