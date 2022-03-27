function dateStamp(func) {
  return function (x) {
    return {
      date: new Date().toLocaleDateString(),
      output: func(x),
    };
  };
}

module.exports = dateStamp;
