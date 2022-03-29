let countBy;
countBy = require('./count_by');
// countBy = require('./solution'); // uncomment to test solution.js
const isObject = require('../../../utils/values/is_object');

function setup() {
  return {
    array: [1, 2, 3, 4, 5],
    mockCb: jest.fn(function oddOrEven(num) {
      if (num % 2 === 0) return 'even';
      else return 'odd';
    }),
    expected: { odd: 3, even: 2 },
  };
}

describe('countBy(array, callback)', () => {
  const { array, mockCb, expected } = setup();

  const result = countBy(array, mockCb);

  test('should return an object', () => {
    expect(isObject(result)).toBe(true);
  });

  test('should perform the callback on each element of the array', () => {
    expect(mockCb).toHaveBeenCalledTimes(array.length);
  });

  test('should save return values from the callback as object keys', () => {
    const keys = Object.keys(result);
    const expectedKeys = Object.keys(expected);

    expect(keys).toEqual(expectedKeys);
  });

  test('each value should be the number of times its key was returned from the callback', () => {
    expect(result).toEqual(expected);
  });
});
