function buildSentence(word1, word2, word3) {
  const firstCharUpper = word1[0].toUpperCase();
  const restOfFirstWord = word1.slice(1);
  return `${firstCharUpper}${restOfFirstWord} ${word2} ${word3}.`;
}

module.exports = buildSentence;
