function isObject(v) {
  return v !== null && (typeof v === 'object' || typeof v === 'function');
}

module.exports = isObject;
