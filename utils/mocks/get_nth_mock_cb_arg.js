function getNthMockCbArg(cb, n) {
  return cb.mock.calls.map((args) => args[n - 1]);
}

module.exports = getNthMockCbArg;
