const reduce = require('./reduce');

const mocks = {
  numbers: [1, 2, 3, 4, 5],
  sum: 15,
  initialNum: 10,
  strings: ['h', 'e', 'l', 'l', 'o'],
  word: 'hello',
  initialString: 'Oh ',
  cb: function add(x, y) {
    return x + y;
  },
};

describe('reduce() challenge', () => {
  const { numbers, strings, cb, sum, word } = mocks;

  test('should return a single value', () => {
    const returnedNum = reduce(numbers, cb);
    const returnedString = reduce(strings, cb);
    expect(returnedNum).toEqual(sum);
    expect(typeof returnedNum).toBe('number');

    expect(returnedString).toEqual(word);
    expect(typeof returnedString).toEqual('string');
  });

  test('should handle initialValue argument', () => {
    const { initialNum, initialString } = mocks;

    const returnedNum = reduce(numbers, cb, initialNum);
    const returnedString = reduce(strings, cb, initialString);

    expect(returnedNum).toEqual(sum + initialNum);
    expect(typeof returnedNum).toBe('number');

    expect(returnedString).toEqual(initialString + word);
    expect(typeof returnedString).toEqual('string');
  });
});
