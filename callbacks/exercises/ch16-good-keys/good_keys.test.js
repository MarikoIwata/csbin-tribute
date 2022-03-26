let goodKeys;
goodKeys = require('./good_keys');
// goodKeys = require('./solution'); // uncomment to test solution file

const mocks = {
  obj: {
    mac: 'priest',
    dennis: 'calculating',
    charlie: 'birdlaw',
    dee: 'bird',
    frank: 'warthog',
  },
  cb: jest.fn(function startsWithBird(str) {
    return str.slice(0, 4).toLowerCase() === 'bird';
  }),
  expectedOutput: ['charlie', 'dee'],
};

describe('goodKeys(object, callback)', () => {
  const { obj, cb } = mocks;

  const result = goodKeys(obj, cb);

  test('should return an array', () => {
    expect(Array.isArray(result)).toBe(true);
  });

  test('should perform the callback on each value', () => {
    const numberOfValues = Object.keys(obj).length;
    const numberOfCbCalls = cb.mock.calls.length;

    expect(numberOfCbCalls).toBe(numberOfValues);
  });

  test('returned array should contain keys whose associated values yielded true from the callback', () => {
    expect(result).toEqual(mocks.expectedOutput);
  });
});
