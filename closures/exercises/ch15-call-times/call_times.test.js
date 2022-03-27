let callTimes;
callTimes = require('./call_times');
// callTimes = require('./solution'); // uncomment to test solution file
const range = require('../../../utils/values/range');

describe('callTimes()', () => {
  const [myNewFunc1, myNewFunc2] = [callTimes(), callTimes()];

  test('should return a function', () => {
    expect(myNewFunc1).toBeInstanceOf(Function);
    expect(myNewFunc2).toBeInstanceOf(Function);
  });

  test('the returned function should return the number of times it has been called', () => {
    const mockFunc = jest.fn(callTimes());
    const nums = range(1, 5);

    nums.forEach((num) => {
      mockFunc();
      expect(mockFunc.mock.calls.length).toBe(num);
    });
  });
});
