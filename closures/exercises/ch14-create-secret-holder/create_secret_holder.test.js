let createSecretHolder;
createSecretHolder = require('./create_secret_holder');
// createSecretHolder = require('./solution'); // uncomment to test solution file
const isObject = require('../../../utils/values/is_object');

describe('createSecretHolder(secret)', () => {
  const result = createSecretHolder(5);

  test('should return an object', () => {
    expect(isObject(result)).toBe(true);
  });

  test('returned object should only have two method properties', () => {
    const values = Object.values(result);

    expect(values.length).toBe(2);

    values.forEach((value) => {
      expect(value).toBeInstanceOf(Function);
    });
  });
});
