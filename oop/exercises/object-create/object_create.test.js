const { personStore, person } = require('./object_create'); // comment out when testing solution file
// const { personStore, person} = require('./solution'); // uncomment to test solution file
const isObject = require('../../../utils/values/is_object');

describe('Using Object.create', () => {
    describe('personStore', () => {
        test('should have a greet property', () => {
            expect(Object.hasOwn(personStore, 'greet')).toBe(true);
        });

        test('greet should be a function', () => {
            expect(personStore.greet).toBeInstanceOf(Function);
        });

        test('greet should return "hello"', () => {
            expect(personStore.greet()).toBe('hello');
        });
    });

    describe('person(name, age)', () => {
        test('should create an object using Object.create', () => {
            const personFn = person.toString();
            expect(personFn.includes('Object.create')).toBe(true);
        });

        test('should return an object with name and age properties', () => {
            const result = person();

            expect(isObject(result)).toBe(true);
            expect(Object.hasOwn(result, 'name')).toBe(true);
            expect(Object.hasOwn(result, 'age')).toBe(true);
        });

        test('property values should mirror their parameter/argument pairs', () => {
            const result = person('Marina', 32);
            const expected = { name: 'Marina', age: 32 };

            expect(result).toEqual(expected);
        });
    });
});
