// sneaky way
function unique(array) {
  return [...new Set(array)];
}

// using reduce
function uniqueWithReduce(array) {
  return array.reduce(
    (uniques, elem) =>
      uniques.includes(elem) ? uniques : uniques.concat(elem),
    []
  );
}

// using a for-of loop
function uniqueWithLoop(array) {
  const uniques = [];

  for (const elem of array) {
    if (!uniques.includes(elem)) {
      uniques.push(elem);
    }
  }

  return uniques;
}

module.exports = unique;
