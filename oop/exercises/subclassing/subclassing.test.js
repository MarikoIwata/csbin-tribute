'use strict';

const isObject = require('../../../utils/values/is_object');

const {
  userFunctionStore,
  userFactory,
  adminFunctionStore,
  adminFactory,
} = require('./subclassing');

describe('Subclassing', () => {
  describe('adminFunctionStore', () => {
    test('should have access to methods in userFunctionStore', () => {
      const result = adminFunctionStore.sayType();
      const expected = 'I am a undefined';

      expect(adminFunctionStore.sayType).not.toBeUndefined();
      expect(adminFunctionStore.sayType).toBeInstanceOf(Function);
      expect(result).toBe(expected);
    });

    test('should not have userFunctionStore methods as own properties', () => {
      expect(Object.hasOwn(adminFunctionStore, 'sayType')).toBe(false);
      expect(Object.hasOwn(adminFunctionStore.__proto__, 'sayType')).toBe(true);
    });
  });

  describe('adminFactory(name, score)', () => {
    const data = ['Erika', 10];
    const result = adminFactory(...data);

    test('should return an object', () => {
      expect(isObject(result)).toBe(true);
    });

    test('instances should have same own properties as parent class instances', () => {
      const parentInstanceProps = Object.keys(userFactory(...data));
      const instanceProps = Object.keys(result);

      expect(instanceProps).toEqual(parentInstanceProps);
    });

    test('properties should be inherited, not manually copied over', () => {
      const adminFactoryBody = adminFactory.toString();

      expect(adminFactoryBody.includes('.name = name')).toBe(false);
      expect(adminFactoryBody.includes('.score = score')).toBe(false);
    });
  });
});
