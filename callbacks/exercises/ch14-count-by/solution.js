function countBy(array, callback) {
  return array.reduce((acc, curr) => {
    const returnValue = callback(curr);

    if (acc[returnValue] === undefined) acc[returnValue] = 1;
    else acc[returnValue] += 1;
    return acc;
  }, {});
}

function otherCountBy(array, callback) {
  return array.reduce((acc, cur) => {
    const v = callback(cur);
    acc[v] === undefined ? (acc[v] = 1) : ++acc[v];
    return acc;
  }, {});
}

module.exports = countBy;
