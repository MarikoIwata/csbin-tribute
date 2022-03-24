const createFunction = require('./create_function');

describe('createFunction() challenge', () => {
  const fn = createFunction();

  test('should return a function', () => {
    expect(typeof fn).toBe('function');
  });

  test('returned function should return "hello" when called', () => {
    const fnOutput = fn();
    expect(fnOutput).toBe('hello');
  });
});
