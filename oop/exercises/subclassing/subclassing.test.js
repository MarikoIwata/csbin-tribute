'use strict';

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
});
