let cycleIterator;
cycleIterator = require('./cycle_iterator');
// cycleIterator = require('./solution'); // uncomment to test solution file

describe('cycleIterator(array)', () => {
  const longWeekend = ['Fri', 'Sat', 'Sun'];
  const longWeekendCycler = cycleIterator(longWeekend);

  test('should return a function', () => {
    expect(longWeekendCycler).toBeInstanceOf(Function);
  });

  test('calling the returned function should return the next array element, starting from the first', () => {
    expect(longWeekendCycler()).toBe('Fri');
    expect(longWeekendCycler()).toBe('Sat');
    expect(longWeekendCycler()).toBe('Sun');
  });

  test('after returning last element, the next invocation should restart the cycle from the beginning of the array', () => {
    expect(longWeekendCycler()).toBe('Fri');
    expect(longWeekendCycler()).toBe('Sat');
  });
});
