let map;
map = require('./map');
// map = require('./solution'); // uncomment to test solution file

const mocks = {
  array: [1, 2, 3],
  cb: function double(x) {
    return x * 2;
  },
  output: [2, 4, 6],
};

describe('map(array, callback) challenge', () => {
  const { array, cb: double, output: expectedOutput } = mocks;
  const returnedValue = map(array, double);

  test('should return a new array', () => {
    expect(Array.isArray(returnedValue)).toBe(true);
    expect(returnedValue).not.toBe(array);
  });

  test("returned array's elements should have been transformed by the passed-in callback", () => {
    expect(returnedValue).toEqual(expectedOutput);
  });
});
