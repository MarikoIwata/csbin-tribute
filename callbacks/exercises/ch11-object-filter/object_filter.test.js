const objectFilter = require('./object_filter');
const isObject = require('../../../utils/values/is_object');

const mocks = {
  object: { London: 'LONDON', LA: 'Los Angeles', Paris: 'PARIS' },
  callback: jest.fn((v) => v.toUpperCase()),
  expectedOutput: { London: 'LONDON', Paris: 'PARIS' },
};

describe('objectFilter()', () => {
  const { object, callback, expectedOutput } = mocks;
  const output = objectFilter(object, callback);

  test('should return an object', () => {
    expect(isObject(output)).toBe(true);
  });

  test('object should contain props from input object if its value is equal to its key passed into the callback', () => {
    expect(output).toEqual(expectedOutput);
  });
});
