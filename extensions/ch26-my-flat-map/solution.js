function myFlatMap(arr, callback) {
  const result = [];
  for (const [index, elem] of arr.entries()) {
    const x = callback(elem, index, arr);

    // we allow callback to return non-arrays
    if (Array.isArray(x)) {
      result.push(...x);
    } else {
      result.push(x);
    }
  }
  return result;
}

module.exports = myFlatMap;
