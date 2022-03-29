function multiMap(arrVals, arrCallbacks) {
  return arrVals.reduce((obj, val) => {
    obj[val] = arrCallbacks.map((cb) => cb(val));
    return obj;
  }, {});
}

module.exports = multiMap;
