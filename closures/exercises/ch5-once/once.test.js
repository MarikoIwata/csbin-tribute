const once = require('./once');

describe('once(callback) challenge', () => {
  const double = (x) => x * 2;
  const doubleOnce = once(double);

  const initialOutput = doubleOnce(4);

  test('once(callback) should returned a function', () => {
    expect(doubleOnce instanceof Function).toBe(true);
  });

  test('the returned function should return the evaluated result of invoking the originally passed-in callback ', () => {
    const expectedOutput = double(4); // 8
    expect(initialOutput).toBe(expectedOutput);
  });

  test('If invoked again, the returned function should return the output value from the first time it was called', () => {
    const moreInputs = [2, 5, 8];

    moreInputs.forEach((input) => {
      const output = doubleOnce(input);
      expect(output).not.toBe(double(input));
      expect(output).toBe(initialOutput);
    });
  });
});
