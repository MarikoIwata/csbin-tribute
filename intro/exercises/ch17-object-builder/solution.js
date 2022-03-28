function objectBuilder(count) {
  const o = {};
  const MULTIPLE = 5;

  for (let i = 0; i <= count; i++) {
    o[i] = i * MULTIPLE;
  }
  return o;
}

module.exports = objectBuilder;
