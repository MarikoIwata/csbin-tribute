let groupBy;
groupBy = require('./group_by');
// groupBy = require('./solution'); // uncomment to test solution file
const isObject = require('../../../utils/values/is_object');
const arrayToNumbers = require('../../../utils/values/array_to_numbers');
const unique = require('../../../utils/values/uniques');

function setup() {
  return {
    data: [1.3, 2.1, 2.4],
    mockCb: jest.fn(function floored(num) {
      return Math.floor(num);
    }),
    expected: { 1: [1.3], 2: [2.1, 2.4] },
  };
}

describe('groupBy(array, callback)', () => {
  const { data, mockCb } = setup();

  const result = groupBy(data, mockCb);

  test('should return an object', () => {
    expect(isObject(result)).toBe(true);
  });

  test('should perform the callback on each element of the array', () => {
    expect(mockCb).toHaveBeenCalledTimes(data.length);
  });

  test('each returned value from the callback should be a key on the object', () => {
    const cbResults = unique(
      mockCb.mock.results.map(({ value }) => value)
    );
    // keys need to be coerced from strings to numbers for comparison
    const keys = arrayToNumbers(Object.keys(result));

    expect(cbResults).toEqual(keys);
  });

  test("returned object's values should be arrays", () => {
    const values = Object.values(result);

    values.forEach((value) => {
      expect(value).toBeInstanceOf(Array);
    });
  });

  test('arrays should contain elements that resulted in their key being returned from the callback.', () => {
    const { expected } = setup();

    expect(result).toEqual(expected);
  });
});
