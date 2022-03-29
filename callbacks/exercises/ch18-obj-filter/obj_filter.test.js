let objFilter;
objFilter = require('./obj_filter');
// objFilter = require('./solution'); // uncomment to test solution file
const isObject = require('../../../utils/values/is_object');

const mocks = {
  data: {
    6: 3,
    2: 1,
    12: 4,
  },
  mockCb: jest.fn(function half(x) {
    return x / 2;
  }),
  expected: { 2: 1, 6: 3 },
};

describe('objectFilter(obj, callback)', () => {
  const { data, mockCb } = mocks;

  const result = objFilter(data, mockCb);

  test('should return an object', () => {
    expect(isObject(result)).toBe(true);
  });

  test('the returned object should be a new object', () => {
    expect(result).not.toBe(data);
  });

  test('object should only contain key/value pairs where value === callback(key)', () => {
    expect(result).toEqual(mocks.expected);
  });
});
