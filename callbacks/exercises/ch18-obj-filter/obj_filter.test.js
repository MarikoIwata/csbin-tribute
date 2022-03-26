let objFilter;
objFilter = require('./obj_filter');
// objFilter = require('./solution'); // uncomment to test solution file
const isObject = require('../../../utils/values/is_object');

const mocks = {
  object: {
    6: 3,
    2: 1,
    12: 4,
  },
  callback: jest.fn((x) => x / 2),
  expectedResult: { 2: 1, 6: 3 },
};

describe('objectFilter(obj, callback)', () => {
  const { object, callback } = mocks;
  const result = objFilter(object, callback);

  test('should return an object', () => {
    expect(isObject(result)).toBe(true);
  });

  test('the returned object should be a new object', () => {
    expect(result).not.toBe(object);
  });

  test('object should only contain key/value pairs where value === callback(key)', () => {
    expect(result).toEqual(mocks.expectedResult);
  });
});
