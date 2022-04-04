'use strict';

const { Person, Developer } = require('./es6_classes'); // comment out to test solution
// const { Person, Developer } = require('./es6_classes.solution'); // uncomment to test solution

describe('ES6 Classes', () => {
  describe('Person', () => {
    const result = new Person('Marina');

    test("should be defined using the 'class' keyword", () => {
      const personBody = Person.toString();

      expect(personBody.startsWith('class')).toBe(true);
    });

    test("instances should have a 'name' property, with value of constructor argument", () => {
      const expected = { name: 'Marina' };

      expect(result).toEqual(expected);
    });

    test('should have a greet method in its prototype', () => {
      expect(Object.hasOwn(result, 'greet')).toBe(false);
      expect(Person.prototype.greet).toBeInstanceOf(Function);
    });

    test("greet should return 'hello'", () => {
      expect(result.greet()).toBe('hello');
    });
  });

  describe('Developer', () => {
    const result = new Developer('Dom');
    const developerBody = Developer.toString();

    test("should use the 'class' and 'extends' keywords", () => {
      const [firstWord, , thirdWord] = developerBody.split(' ');

      expect(firstWord).toBe('class');
      expect(thirdWord).toBe('extends');
    });

    test('instances should have a name property', () => {
      expect(Object.hasOwn(result, 'name')).toBe(true);
    });

    test('instances should have access to a greet method ', () => {
      expect(Object.hasOwn(result, 'greet')).toBe(false);
      expect(Object.hasOwn(Developer.prototype, 'greet')).toBe(false);
      expect(Object.hasOwn(Developer.__proto__.prototype, 'greet')).toBe(true);
    });

    test('instances should have access to an introduce method ', () => {
      expect(Object.hasOwn(result, 'introduce')).toBe(false);
      expect(Object.hasOwn(Developer.prototype, 'introduce')).toBe(true);
    });

    test('introduce should return the appropriate greeting', () => {
      const expected = 'Hi, my name is Dom';

      expect(result.introduce()).toBe(expected);
    });
  });
});
