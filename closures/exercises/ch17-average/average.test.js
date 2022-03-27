let average;
average = require('./average');
// average = require('./solution'); // uncomment to test solution file

describe('average()', () => {
  const avgSoFar = average();

  test('should return a function', () => {
    expect(avgSoFar).toBeInstanceOf(Function);
  });

  test('when invoked the returned function should return the average of all the numbers that have ever been passed to it ', () => {
    expect(avgSoFar()).toBe(0);
    expect(avgSoFar(4)).toBe(4);
    expect(avgSoFar(8)).toBe(6);
    expect(avgSoFar()).toBe(6);
    expect(avgSoFar(12)).toBe(8);
    expect(avgSoFar()).toBe(8);
  });
});
