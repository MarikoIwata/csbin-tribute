let union;
union = require('./union');
// union = require('./solution'); // uncomment to test solution file

describe('union(arrays)', () => {
  const data = [
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ];
  const expected = [5, 10, 15, 88, 1, 7, 100];

  const result = union(data);

  test('should return an array', () => {
    expect(result).toBeInstanceOf(Array);
  });

  test('returned array should contain all values of the passed-in arrays', () => {
    expect(result).toEqual(expected);
  });
});
