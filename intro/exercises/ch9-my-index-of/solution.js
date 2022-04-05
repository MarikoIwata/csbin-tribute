function myIndexOf(array, elem) {
  return array.reduce(
    (index, currElem, currIndex) =>
      index == -1 && currElem === elem ? currIndex : index,
    -1
  );
}

module.exports = myIndexOf;
