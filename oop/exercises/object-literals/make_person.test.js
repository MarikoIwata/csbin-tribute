let makePerson;
makePerson = require('./make_person');
// makePerson = require('./solution') // uncomment to test solution file
const isObject = require('../../../utils/values/is_object');

describe('makePerson(name, age)', () => {
  const vicky = makePerson('Vicky', 24);

  test('should return an object', () => {
    expect(isObject(vicky)).toBe(true);
  });

  test('the object should have a name and age property ', () => {
    expect(Object.hasOwn(vicky, 'name')).toBe(true);
    expect(Object.hasOwn(vicky, 'age')).toBe(true);
  });

  test('the values for name and age should correspond to the arguments passed to makePerson(...) ', () => {
    expect(vicky).toEqual({ name: 'Vicky', age: 24 });
  });
});
