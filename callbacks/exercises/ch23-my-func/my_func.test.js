let myFunc;
myFunc = require('./my_func');
// myFunc = require('./solution'); // uncomment to test solution file

const mocks = {
  mixedNumbers: [2, 3, 6, 64, 10, 8, 12],
  evenNumbers: [2, 4, 6, 8, 10, 12, 64],
  arrayLength: 7,
  callback: jest.fn(function isOdd(num) {
    return num % 2 !== 0;
  }),
  expectedResults: [1, -1],
};

describe('myFunc(array, callback)', () => {
  const { mixedNumbers, evenNumbers, callback: isOdd } = mocks;

  const results = [myFunc(mixedNumbers, isOdd), myFunc(evenNumbers, isOdd)];

  test('should return a valid array index, or -1', () => {
    results.forEach((result) => {
      expect(result).toBeGreaterThanOrEqual(-1);
      expect(result).toBeLessThan(mocks.arrayLength);
    });
  });

  test('should return index of the first element that returns true when passed to callback', () => {
    expect(results[0]).toBe(mocks.expectedResults[0]);
  });

  test('should return -1 if no element returns true when passed to callback', () => {
    expect(results[1]).toBe(mocks.expectedResults[1]);
  });

  test('should short-circuit as soon as the callback returns true', () => {
    /* 
     myFunc(mixedNumbers, isOdd) should short-circuit after second 
     element (3 – because it's odd!). Therefore the third argument received 
     by the isOdd callback should be first element of the evenNumbers array 
     during myFunc(evenNumbers, isOdd).
     */
    const thirdCbArg = isOdd.mock.calls[2][0];

    expect(thirdCbArg).toBe(evenNumbers[0]);
  });
});
