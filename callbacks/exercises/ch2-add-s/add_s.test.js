let addS;
addS = require('./add_s');
// addS = require('./solution'); // uncomment to test solution file

describe('addS(word)', () => {
  test('should return original input with "s" added to the end', () => {
    expect(addS('pizza')).toBe('pizzas');
    expect(addS('bagel')).toBe('bagels');
  });
});
