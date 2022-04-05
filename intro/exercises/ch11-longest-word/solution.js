function longestWord(sentence) {
  const words = sentence.split(' ');

  return words.reduce(
    (longest, current) =>
      current.length >= longest.length ? current : longest,
    ''
  );
}

module.exports = longestWord;
