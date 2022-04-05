'use strict';

const isObject = require('../../../utils/values/is_object');

const {
  userFactory,
  adminFunctionStore,
  adminFactory,
} = require('./subclassing'); // comment out to test solution file

// const {
//   userFactory,
//   adminFunctionStore,
//   adminFactory,
// } = require('./subclassing.solution'); // uncomment to test solution file

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

    test("instances should have 'Admin' as their 'type' value", () => {
      expect(result.type).toBe('Admin');
    });

    test('instances should have access to adminFunctionStore methods', () => {
      expect(result.__proto__).toBe(adminFunctionStore);
    });

    test("sharePublicMessage() should return 'Welcome users!'", () => {
      expect(adminFunctionStore.sharePublicMessage()).toBe('Welcome users!');
    });

    test('sharePublicMessage() should only be available to admins', () => {
      const nonAdmin = userFactory(...data);

      expect(nonAdmin.sharePublicMessage).toBeUndefined();
      expect(result.sharePublicMessage).toBe(
        adminFunctionStore.sharePublicMessage
      );
    });
  });
});
