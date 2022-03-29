function objOfMatches(array1, array2, callback) {
  const o = {};

  for (const [index, elem] of array1.entries()) {
    if (callback(elem) === array2[index]) {
      o[elem] = array2[index];
    }
  }

  return o;
}

module.exports = objOfMatches;
