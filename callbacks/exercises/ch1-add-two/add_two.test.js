const addTwo = require('./add_two');

describe('addTwo(num) challenge', () => {
  test('should return input + 2', () => {
    expect(addTwo(3)).toBe(5);
    expect(addTwo(10)).toBe(12);
  });
});
