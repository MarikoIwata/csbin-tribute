function groupBy(array, callback) {
  const res = array.reduce((acc, cur) => {
    const v = callback(cur);
    acc[v] ? acc[v].push(cur) : (acc[v] = [cur]);
    return acc;
  }, {});
  return res;
}

module.exports = groupBy;
