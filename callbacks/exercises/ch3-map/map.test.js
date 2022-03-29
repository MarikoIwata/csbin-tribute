let map;
map = require('./map');
// map = require('./solution'); // uncomment to test solution file

describe('map(array, callback) challenge', () => {
  const data = [1, 2, 3];
  const mockCb = jest.fn(function double(x) {
    return x * 2;
  });
  const expected = [2, 4, 6];

  const result = map(data, mockCb);

  test('should return a new array', () => {
    expect(result).toBeInstanceOf(Array);
    expect(result).not.toBe(data);
  });

  test("returned array's elements should have been transformed by the passed-in callback", () => {
    expect(result).toEqual(expected);
  });
});
