let range;
range = require('./range');
// range = require('./solution'); // uncomment to test solution file

describe('range(start, end)', () => {
  const result = range(1, 4);

  test('should return an array', () => {
    expect(Array.isArray(result)).toBe(true);
  });

  test('the array should contain integers in increasing order from start to end inclusive', () => {
    expect(result).toEqual([1, 2, 3, 4]);
    expect(range(2, 2)).toEqual([2]);
  });

  test('should return an empty array if start is greater than end', () => {
    expect(range(4, 1)).toEqual([]);
  });
});
