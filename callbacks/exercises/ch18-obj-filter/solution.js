function objFilter(object, callback) {
  const o = {};

  for (const [k, v] of Object.entries(object)) {
    if (callback(k) === v) o[k] = v;
  }

  return o;
}

module.exports = objFilter;
