let longestWord;
longestWord = require('./longest_word');
//longestWord = require('./solution'); // uncomment to test solution file

describe('longestWord(sentence)', () => {
  test('should return the longest word in the sentence', () => {
    expect(longestWord('my JavaScript is exceptional')).toBe('exceptional');
    expect(longestWord('hate having hungry hippos')).toBe('hippos');
    expect(longestWord('JavaScript')).toBe('JavaScript');
    expect(longestWord('')).toBe('');
  });
});
