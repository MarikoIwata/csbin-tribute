function memoize(func) {
  const cache = {};

  function memoizedFunc(x) {
    if (Object.hasOwn(cache, x)) return cache[x];

    return (cache[x] = func(x));
  }

  memoizedFunc.cache = cache;
  return memoizedFunc;
}

module.exports = memoize;
