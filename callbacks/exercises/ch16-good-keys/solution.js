function goodKeys(object, callback) {
  return Object.entries(object)
    .filter(([, v]) => callback(v))
    .map((e) => e[0]);
}

module.exports = goodKeys;
