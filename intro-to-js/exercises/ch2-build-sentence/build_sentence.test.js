const buildSentence = require('./build_sentence');

describe('buildSentence(word1, word2, word3) challenge', () => {
  test('combines three strings and to form sentence with capitalization and punctuation', () => {
    expect(buildSentence('coding', 'is', 'awesome')).toBe('Coding is awesome.');
    expect(buildSentence("we're", 'number', '1')).toBe("We're number 1.");
  });
});
