let goodKeys;
// goodKeys = require('./good_keys');
goodKeys = require('./solution'); // uncomment to test solution file

function setup() {
  return {
    data: {
      mac: 'priest',
      dennis: 'calculating',
      charlie: 'birdlaw',
      dee: 'bird',
      frank: 'warthog',
    },
    mockCb: jest.fn(function startsWithBird(str) {
      return str.slice(0, 4).toLowerCase() === 'bird';
    }),
    expected: ['charlie', 'dee'],
  };
}

describe('goodKeys(object, callback) should:', () => {
  const { data, mockCb } = setup();

  const result = goodKeys(data, mockCb);

  test('return an array', () => {
    expect(result).toBeInstanceOf(Array);
  });

  test('call the callback with each object value', () => {
    const values = Object.values(data);
    const mockCbArgs = mockCb.mock.calls.flat();

    expect(mockCbArgs).toEqual(values);
  });

  test('returned array should contain the keys whose values returned true when passed to callback', () => {
    const { expected } = setup();

    expect(result).toEqual(expected);
  });
});
