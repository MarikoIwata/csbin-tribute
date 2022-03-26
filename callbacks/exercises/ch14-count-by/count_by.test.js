let countBy;
countBy = require('./count_by');
// countBy = require('./solution'); // uncomment to test solution.js
const isObject = require('../../../utils/values/is_object');

const mocks = {
  array: [1, 2, 3, 4, 5],
  callback: jest.fn(function oddOrEven(num) {
    if (num % 2 === 0) return 'even';
    else return 'odd';
  }),
  expectedOutput: { odd: 3, even: 2 },
};

describe('countBy(array, callback)', () => {
  const { array, callback, expectedOutput } = mocks;
  const returnedValue = countBy(array, callback);

  test('should return an object', () => {
    expect(isObject(returnedValue)).toBe(true);
  });

  test('should perform the callback on each element of the array', () => {
    const callbackInvocations = callback.mock.calls.length;
    expect(callbackInvocations).toBe(array.length);
  });

  test('should save return values from the callback as object keys', () => {
    const returnedKeys = Object.keys(returnedValue);
    const expectedKeys = Object.keys(expectedOutput);

    expect(returnedKeys).toEqual(expectedKeys);
  });

  test('each value should be the number of times its key was returned from the callback', () => {
    const numberOfOdds = callback.mock.results.reduce(
      (count, { value }) => (value === 'odd' ? count + 1 : count),
      0
    );
    const numberOfEvens = callback.mock.calls.length - numberOfOdds;

    expect(numberOfOdds).toBe(expectedOutput.odd);
    expect(numberOfEvens).toBe(expectedOutput.even);
    expect(returnedValue).toEqual(expectedOutput);
  });
});
