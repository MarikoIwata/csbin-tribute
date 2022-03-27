function censor() {
  const store = {};

  return function (str1, str2) {
    if (str2) store[str1] = str2;
    else {
      for (const [k, v] of Object.entries(store)) {
        str1 = str1.replaceAll(k, v);
      }
      return str1;
    }
  };
}

module.exports = censor;
