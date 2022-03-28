function memoize(func) {
  const cache = {};

  return function memoizedFunc(x) {
    if (Object.hasOwn(cache, x)) return cache[x];

    return (cache[x] = func(x));
  };
}

module.exports = memoize;
