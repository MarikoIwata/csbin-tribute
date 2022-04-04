const Person = require('./new_keyword'); // comment out to test solution file
// const Person = require('./solution'); // uncomment to test solution file
const isObject = require('../../../utils/values/is_object');

describe('Person(name, age)', () => {
    const result = new Person('Marina', 32);

    test('should throw a TypeError if called without the new keyword', () => {
        expect(() => {
            Person('Marina', 32);
        }).toThrow(TypeError);
    });

    test('should return an object', () => {
        expect(isObject(result)).toBe(true);
    });

    test("returned object should have key/value pairs matching Person's params/args ", () => {
        const expected = { name: 'Marina', age: 32 };

        expect(result).toEqual(expected);
    });

    test('returned object should have access do a greet method through Person.prototype', () => {
        expect(Object.hasOwn(result, 'greet')).toBe(false);
        expect(Object.hasOwn(Person.prototype, 'greet')).toBe(true);
        expect(Person.prototype.greet).toBeInstanceOf(Function);
    });

    test('greet should return a greeting including the correct name value', () => {
        const expected = 'Hi, my name is Marina';

        expect(result.greet()).toBe(expected);

        // Check name isn't hard coded!
        const greetFn = result.greet.toString();
        const cheat = greetFn.includes('Marina');

        expect(cheat).toBe(false);
    });
});
