const rollCall = require('./roll_call');

const mocks = ['Victoria', 'Juan', 'Ruth'];

describe('rollCall(names) challenge', () => {
  const rollCaller = rollCall(mocks);

  test('rollCall(names) should return a function', () => {
    expect(rollCaller instanceof Function).toBe(true);
  });

  test('the returned function should return one name per invocation', () => {
    for (const name of mocks) {
      const output = rollCaller();
      expect(typeof output).toBe('string');
      expect(output).toBe(name);
    }
  });

  test('should return "Everyone accounted for" once all names have been returned', () => {
    expect(rollCaller()).toBe('Everyone accounted for');
  });
});
