let multiMap;
multiMap = require('./multi_map');
// multiMap = require('./solution'); // uncomment to test solution file
const isObject = require('../../../utils/values/is_object');

function setup() {
  return {
    values: ['catfood', 'glue', 'beer'],
    callbacks: [
      jest.fn(function upperCase(str) {
        return str.toUpperCase();
      }),
      jest.fn(function toTitleCase(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      }),
      jest.fn(function repeat(str) {
        return str + str;
      }),
    ],
    expected: {
      catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
      glue: ['GLUE', 'Glue', 'glueglue'],
      beer: ['BEER', 'Beer', 'beerbeer'],
    },
  };
}

describe('multiMap(arrVals, arrCallbacks)', () => {
  const { values, callbacks } = setup();

  const result = multiMap(values, callbacks);

  test('should return an object', () => {
    expect(isObject(result)).toBe(true);
  });

  test("the object's keys should be the elements of the arrVals array", () => {
    const keys = Object.keys(result);

    expect(keys).toEqual(values);
  });

  test("the object's values should be arrays", () => {
    const values = Object.values(result);

    values.forEach((value) => {
      expect(value).toBeInstanceOf(Array);
    });
  });

  test('the arrays should contain the outputs from each callback invoked with their key', () => {
    const { expected } = setup();

    expect(result).toEqual(expected);
  });
});
