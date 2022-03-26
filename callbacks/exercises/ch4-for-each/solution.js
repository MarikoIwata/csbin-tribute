function forEach(array, callback) {
  for (const el of array) {
    callback(el);
  }
}

module.exports = forEach;
