let myIndexOf;
myIndexOf = require('./my_index_of');
//myIndexOf = require('./solution'); // uncomment to test solution file

describe('myIndexOf(string1, string2)', () => {
  test('should return index where string2 begins within string1', () => {
    expect(myIndexOf([1, 2, 3, 4, 5], 5)).toBe(4);
    expect(myIndexOf(['a', 'b', 'c'], 'a')).toBe(0);
    expect(myIndexOf(['a', 'b', 'c'], 'd')).toBe(-1);
  });
});
