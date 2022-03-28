let letterExists;
letterExists = require('./letter_exists');
// letterExists = require('./solution'); // uncomment to test solution file

describe('letterExists(word, letter) challenge', () => {
  test('returns true/false depending on whether the passed-in word contains the passed-in letter', () => {
    expect(letterExists('superman', 'e')).toBe(true);
    expect(letterExists('starship', 'S')).toBe(false);
    expect(letterExists('th1s', '1')).toBe(true);
    expect(letterExists('he!lo', '!')).toBe(true);
  });
});
