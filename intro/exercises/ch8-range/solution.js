function range(start, end) {
  const length = end - start;
  return Array.from({ length }, (_, i) => i + start);
}

module.exports = range;
