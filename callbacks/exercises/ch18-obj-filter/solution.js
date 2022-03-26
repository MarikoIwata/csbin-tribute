function objFilter(obj, callback) {
  const o = {};

  for (const [k, v] of Object.entries(obj)) {
    if (callback(k) === v) o[k] = v;
  }

  return o;
}

module.exports = objFilter;
