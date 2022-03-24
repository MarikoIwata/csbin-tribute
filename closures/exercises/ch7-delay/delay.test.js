const delay = require('./delay');

const mocks = {
  func: function sum(...args) {
    return args.reduce((x, y) => x + y, 0);
  },
  wait: 1000, // ms
  args: [1, 2, 3],
  expectedOutput: 6,
};

function wrappedDelay(func, wait, ...args) {
  return new Promise((res, _rej) => {
    setTimeout(() => {
      const output = func(...args);
      res(output);
    }, wait);
  });
}

describe('delay(func, wait) challenge', () => {
  const { func, wait, args, expectedOutput } = mocks;

  test('delay(func, wait) should return the Timeout object', () => {
    const returnedValue = delay(func, wait);
    expect(returnedValue.constructor.name).toBe('Timeout');
  });

  test('delay(func, wait, ...args) should eventually invoke func with passed-in args', async () => {
    const eventualOutput = await wrappedDelay(func, wait, ...args);
    expect(eventualOutput).toBe(expectedOutput);
  });
});
