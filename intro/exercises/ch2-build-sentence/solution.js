function buildSentence(word1, word2, word3) {
  const firstChar = word1[0];
  const restOfFirstWord = word1.slice(1);

  return `${firstChar.toUpperCase()}${restOfFirstWord} ${word2} ${word3}.`;
}

module.exports = buildSentence;
