function prioritize(array, callback) {
  const trues = array.filter(callback);
  const falses = array.filter((elem) => !callback(elem));
  return [...trues, ...falses];
}

module.exports = prioritize;
