let dateStamp;
dateStamp = require('./date_stamp');
// dateStamp = require('./solution'); // uncomment to test solution file
const isObject = require('../../../utils/values/is_object');

describe('dateStamp(func)', () => {
  const stampedMultBy2 = dateStamp((n) => n * 2);
  const results = [stampedMultBy2(4), stampedMultBy2(6)];

  test('should return a function', () => {
    expect(stampedMultBy2).toBeInstanceOf(Function);
  });

  test('the returned function should return an object', () => {
    expect(isObject(results[0])).toBe(true);
    expect(isObject(results[1])).toBe(true);
  });

  test('returned object should have a date key containing a timestamp with the time of invocation ', () => {
    const dateToday = new Date().toLocaleDateString();
    expect(results).toEqual([
      { date: dateToday, output: 8 },
      { date: dateToday, output: 12 },
    ]);
  });
});
