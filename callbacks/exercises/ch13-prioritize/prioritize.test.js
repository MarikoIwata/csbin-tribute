let prioritize;
prioritize = require('./prioritize');
// prioritize = require('./solution'); // uncomment to test solution file

function setup() {
  return {
    array: [
      'curb',
      'rickandmorty',
      'Seinfeld',
      'sunny',
      'friends',
      'sea',
    ],
    mockCb: jest.fn(function startsWithS(str) {
      return str[0] === 's' || str[0] === 'S';
    }),
    expected: [
      'Seinfeld',
      'sunny',
      'sea',
      'curb',
      'rickandmorty',
      'friends',
    ],
  };
}

describe('prioritize(array, callback)', () => {
  const { array, mockCb } = setup();

  const result = prioritize(array, mockCb);

  test('should return a new array', () => {
    expect(result).toBeInstanceOf(Array);
    expect(result).not.toBe(array);
  });

  test('should call the callback on each element', () => {
    const mockCbCalls = mockCb.mock.calls.length;

    expect(mockCbCalls).toBeGreaterThanOrEqual(array.length);
  });

  test('elements that returned true when passed to callback should come before those that returned false', () => {
    const { expected } = setup();

    expect(result).toEqual(expected);
  });
});
