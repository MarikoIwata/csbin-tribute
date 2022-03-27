function callTimes() {
  let calls = 0;

  return function () {
    return ++calls;
  };
}

module.exports = callTimes;
