const { personStore, person } = require('./object_create'); // comment out when testing solution file
// const { personStore, person } = require('./solution'); // uncomment to test solution file
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

        test('should have an introduce property', () => {
            expect(Object.hasOwn(personStore, 'introduce')).toBe(true);
        });

        test('introduce should be a function', () => {
            expect(personStore.introduce).toBeInstanceOf(Function);
        });

        test("introduce should return a greeting including the person's name", () => {
            const result = person('Marina', 32).introduce();
            const expected = 'Hi, my name is Marina';

            expect(result).toBe(expected);

            // Check solution hasn't hard coded name!
            const introduceFn = personStore.introduce.toString();
            const cheat = introduceFn.includes('Marina');

            expect(cheat).toBe(false);
        });
    });

    describe('person(name, age)', () => {
        const result = person('Marina', 32);

        test('should create an object using Object.create with personStore', () => {
            const personFn = person.toString();

            expect(personFn.includes('Object.create(personStore)')).toBe(true);
        });

        test('should return an object with name and age properties', () => {
            expect(isObject(result)).toBe(true);
            expect(Object.hasOwn(result, 'name')).toBe(true);
            expect(Object.hasOwn(result, 'age')).toBe(true);
        });

        test('property values should mirror their parameter/argument pairs', () => {
            const expected = { name: 'Marina', age: 32 };

            expect(result).toEqual(expected);
        });
    });
});
