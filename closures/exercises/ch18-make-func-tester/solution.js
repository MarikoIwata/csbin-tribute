function makeFuncTester(arrOfTests) {
  return function (fn) {
    for (const [first, second] of arrOfTests) {
      if (fn(first) !== second) return false;
    }
    return true;
  };
}
module.exports = makeFuncTester;
