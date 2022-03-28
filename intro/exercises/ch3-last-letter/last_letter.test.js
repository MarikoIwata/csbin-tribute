const lastLetter = require('./last_letter');

describe('lastLetter(word) challenge', () => {
  test('should return last character of passed-in string', () => {
    expect(lastLetter('hello')).toBe('o');
    expect(lastLetter('goodbye!')).toBe('!');
    expect(lastLetter('ZeltoiD')).toBe('D');
  });
});
