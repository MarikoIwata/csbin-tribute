const addS = require('./add_s');

describe('addS(word) challenge', () => {
  test('should return original input with "s" added to the end', () => {
    expect(addS('pizza')).toBe('pizzas');
    expect(addS('bagel')).toBe('bagels');
  });
});
