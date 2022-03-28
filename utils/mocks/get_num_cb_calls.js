function getNumCbCalls(cb) {
  return cb.mock.calls.length;
}

module.exports = getNumCbCalls;
