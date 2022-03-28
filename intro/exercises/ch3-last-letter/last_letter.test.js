let lastLetter;
lastLetter = require('./last_letter');
// lastLetter = require('./solution'); // uncomment to test the solution file

describe('lastLetter(word) challenge', () => {
  test('should return last character of passed-in string', () => {
    expect(lastLetter('hello')).toBe('o');
    expect(lastLetter('goodbye!')).toBe('!');
    expect(lastLetter('ZeltoiD')).toBe('D');
  });
});
