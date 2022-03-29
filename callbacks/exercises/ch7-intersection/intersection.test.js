let intersection;
intersection = require('./intersection');
// intersection = require('./solution'); // uncomment to test solution file

describe('intersection(arrays)', () => {
  const data = [
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ];
  const expected = [5, 15];

  const result = intersection(data);

  test('should return an array', () => {
    expect(result).toBeInstanceOf(Array);
  });

  test('the array should contain elements appearing in all of the passed-in arrays', () => {
    expect(result).toEqual(expected);
  });
});
