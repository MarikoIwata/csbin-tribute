function range(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => i + start);
}

module.exports = range;
