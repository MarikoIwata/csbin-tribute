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

    test("object should have key/value pairs matching Person's params/args ", () => {
        const expected = { name: 'Marina', age: 32 };

        expect(result).toEqual(expected);
    });
});
