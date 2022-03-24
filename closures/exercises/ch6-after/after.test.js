const after = require('./after');

describe('after(count, func) challenge', () => {
  const mocks = {
    count: 3,
    // mock function returns x raised to power of y
    func: jest.fn((x, y) => x ** y),
    args: [2, 3],
    expectedOutput: 8,
  };

  const fn = after(mocks.count, mocks.func);
  const returnedValues = mocks.func.mock.results;

  test('after(count, func) should return a function', () => {
    expect(fn instanceof Function).toBe(true);
  });

  test('the originally passed-in func should only be invoked when the returned function has been called "count" times', () => {
    const { count, args, expectedOutput } = mocks;
    let calls = 1;

    while (calls < count) {
      // passed-in func shouldn't be called within loop
      fn(...args);
      calls += 1;

      expect(returnedValues.length).toBe(0);
    }

    // passed-in func should be called now
    fn(...args);

    expect(returnedValues.length).toBe(1);
    expect(returnedValues[0].value).toBe(expectedOutput);
  });
});
