let objOfMatches;
objOfMatches = require('./obj_of_matches');
// objOfMatches = require('./solution'); // uncomment to test solution file
const isObject = require('../../../utils/values/is_object');

function setup() {
  return {
    data: [
      ['hi', 'howdy', 'bye', 'later', 'hello'],
      ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
    ],
    mockUpperCase: jest.fn(function upperCase(str) {
      return str.toUpperCase();
    }),
    expected: { hi: 'HI', bye: 'BYE', later: 'LATER' },
  };
}

describe('objOfMatches(array1, array2, callback)', () => {
  const { data, mockUpperCase, expected } = setup();

  const result = objOfMatches(...data, mockUpperCase);

  test('should return an object', () => {
    expect(isObject(result)).toBe(true);
  });

  test('should call the callback once for each element in array1', () => {
    expect(mockUpperCase).toHaveBeenCalledTimes(data[0].length);
  });

  test('array1 elements that equal their corresponding array2 element after being passed to callback become key/value pairs in the returned object', () => {
    expect(result).toEqual(expected);
  });
});
