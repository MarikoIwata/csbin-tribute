function not(func) {
  return function negatedFunc(x) {
    return !func(x);
  };
}

module.exports = not;
