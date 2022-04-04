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
      const greetResult = result.greet();

      expect(greetResult).toBe('hello');
    });
  });
});
