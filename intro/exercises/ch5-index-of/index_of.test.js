const myIndexOf = require('./index_of');

describe('myIndexOf() challenge', () => {
  test('returns correct index if match found, otherwise returns helpful error message', () => {
    expect(myIndexOf('CodeSmith', 'o')).toBe(1);
    expect(myIndexOf('hello', 'll')).toBe(2);
    expect(myIndexOf('zebra', 'z')).toBe(0);
    expect(myIndexOf('banana', 'B')).toBe('Error: "B" not found');
  });
});
