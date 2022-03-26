function countBy(array, callback) {
  return array.reduce((acc, curr) => {
    const returnValue = callback(curr);

    if (acc[returnValue] === undefined) acc[returnValue] = 1;
    else acc[returnValue] += 1;
    return acc;
  }, {});
}

module.exports = countBy;
