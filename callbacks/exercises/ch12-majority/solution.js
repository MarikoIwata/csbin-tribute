function majority(array, callback) {
  const majorityThreshold = Math.floor(array.length / 2);
  let trues = 0;
  let falses = 0;

  for (const elem of array) {
    callback(elem) ? trues++ : falses++;

    if (trues > majorityThreshold) return true;
    if (falses > majorityThreshold) return false;
  }

  // if we make it here -> trues === falses
  return false;
}

module.exports = majority;
