let memoize;
memoize = require('./memoize');
// memoize = require('./solution'); // uncomment to test solution file
const unique = require('../../../../utils/values/uniques');
const getNumCbCalls = require('../../../../utils/mocks/get_num_cb_calls');

const mocks = {
  func: function square(x) {
    return typeof x != 'number' ? undefined : x ** 2;
  },
  args: [2, 3, 6, 2, 3, 'hi', 'hi'],
  expectedResults: [4, 9, 36, 4, 9, undefined, undefined],
};

describe('memoize(func)', () => {
  const { args } = mocks;
  let mockFunc;
  let memoizedFunc;

  beforeEach(() => {
    mockFunc = jest.fn(mocks.func);
    memoizedFunc = memoize(mockFunc);
  });

  test('should return a function', () => {
    expect(memoizedFunc).toBeInstanceOf(Function);
  });

  test('the returned a function should check a cache before computing its output value', () => {
    const uniqueArgs = unique(args);

    args.forEach((arg) => {
      memoizedFunc(arg);
    });

    const callsToFunc = getNumCbCalls(mockFunc);
    expect(callsToFunc).toBe(uniqueArgs.length);
  });

  test('the cache should be able to store and retrieve any value, including falsy values', () => {
    const hiStrings = args.slice(-2);
    hiStrings.forEach((hi) => {
      memoizedFunc(hi);
    });

    const callsToFunc = getNumCbCalls(mockFunc);
    expect(callsToFunc).toBe(1);
  });

  test('returned function should return the same values as the passed-in func', () => {
    args.forEach((arg, index) => {
      const expectedValue = mocks.expectedResults[index];
      const returnedValue = memoizedFunc(arg);

      expect(returnedValue).toBe(expectedValue);
    });
  });
});
