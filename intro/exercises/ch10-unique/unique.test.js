let unique;
unique = require('./unique');
//unique = require('./solution'); // uncomment to test solution file

describe('unique(array)', () => {
  test('should return an array of unique values', () => {
    expect(unique([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
    expect(unique(['a', 'a', 'c', 'aa', 'b', 'b'])).toEqual([
      'a',
      'c',
      'aa',
      'b',
    ]);
  });
});
