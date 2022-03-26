function commutative(func1, func2, value) {
  const fns = [func1, func2];

  const args = [(acc, cur) => cur(acc), value];
  const forwards = fns.reduce(...args);
  const backwards = fns.reduceRight(...args);

  return forwards === backwards;
}

module.exports = commutative;
