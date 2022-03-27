function average() {
  const nums = [];
  const avg = (arr) => arr.reduce((x, y) => x + y) / arr.length;
  let currAvg = 0;

  return function (x) {
    if (x) {
      nums.push(x);
      currAvg = avg(nums);
    }

    return currAvg;
  };
}

module.exports = average;
