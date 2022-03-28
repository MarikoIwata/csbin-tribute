function compose(...funcs) {
  return function (...args) {
    return funcs.reduceRight(
      (acc, func) => (acc === args ? func(...acc) : func(acc)),
      args
    );
  };
}

module.exports = compose;
