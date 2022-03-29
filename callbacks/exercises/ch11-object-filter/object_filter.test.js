let objectFilter;
// objectFilter = require('./object_filter');
objectFilter = require('./solution'); // uncomment to test solution file
const isObject = require('../../../utils/values/is_object');

const mocks = {
  object: { London: 'LONDON', LA: 'Los Angeles', Paris: 'PARIS' },
  callback: jest.fn((v) => v.toUpperCase()),
  expected: { London: 'LONDON', Paris: 'PARIS' },
};

describe('objectFilter(obj, callback)', () => {
  const { object, callback, expected } = mocks;

  const result = objectFilter(object, callback);

  test('should return an object', () => {
    expect(isObject(result)).toBe(true);
  });

  test('object should contain props from input object if its value is equal to its key passed into the callback', () => {
    expect(result).toEqual(expected);
  });
});
