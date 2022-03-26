function intersection(arrays) {
  return arrays.reduce((acc, curr) => {
    return acc.filter((elem) => curr.includes(elem));
  });
}

module.exports = intersection;
