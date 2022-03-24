const counter = require('./counter');

describe('counter(step) challenge', () => {
  test('returned function should return a number incremented by passed-in step each time it is invoked', () => {
    const mocks = [1, 3, -1];
    let fn;

    mocks.forEach((x) => {
      fn = counter(x);
      const outputs = [fn(), fn(), fn()];
      const expectedOutputs = [x, 2 * x, 3 * x];

      expect(outputs).toEqual(expectedOutputs);
    });
  });
});
