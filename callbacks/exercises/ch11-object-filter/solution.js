function objectFilter(obj, callback) {
  const filteredEntries = Object.entries(obj).filter(
    ([key, value]) => callback(key) === value
  );

  return Object.fromEntries(filteredEntries);
}

module.exports = objectFilter;
