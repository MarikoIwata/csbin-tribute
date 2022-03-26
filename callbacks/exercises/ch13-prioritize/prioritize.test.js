let prioritize;
prioritize = require('./prioritize');
// prioritize = require('./solution'); // comment in to test solution file

const mocks = {
  array: ['curb', 'rickandmorty', 'Seinfeld', 'sunny', 'friends', 'sea'],
  callback: function startsWithS(str) {
    return str[0] === 's' || str[0] === 'S';
  },
  expectedResult: [
    'Seinfeld',
    'sunny',
    'sea',
    'curb',
    'rickandmorty',
    'friends',
  ],
};

describe('prioritize(array, callback)', () => {
  const { array, callback, expectedResult } = mocks;
  const returnedValue = prioritize(array, callback);

  test('should return an array', () => {
    expect(Array.isArray(returnedValue)).toBe(true);
  });

  test('should return a new array', () => {
    expect(returnedValue).not.toBe(array);
  });

  test('returned array should contain elements the yielded true first, and those that yielded false after', () => {
    expect(returnedValue).toEqual(expectedResult);
  });
});
