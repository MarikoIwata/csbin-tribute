let majority;
majority = require('./majority');
// majority = require('./solution'); // uncomment to test solution file

function setup() {
  return {
    data: [
      [1, 2, 3, 5, 4],
      [1, 2, 12, 5, 8],
      [2, 3, 6, 5],
    ],
    mockCb: jest.fn(function isOdd(x) {
      return x % 2 === 1;
    }),
  };
}

describe('majority(array, callback) should:', () => {
  const { data, mockCb } = setup();

  const results = data.map((array) => majority(array, mockCb));

  test('return a boolean', () => {
    results.forEach((result) => {
      expect(typeof result).toBe('boolean');
    });
  });

  test('return true if majority of elements return true when passed to callback', () => {
    expect(results[0]).toBe(true);
  });

  test('return false if majority of elements return false when passed to callback', () => {
    expect(results[1]).toBe(false);
  });

  test('return false if number of trues and falses are equal', () => {
    expect(results.at(-1)).toBe(false);
  });

  test('short-circuit once a majority of true/false values has been established', () => {
    // majority of odds confirmed by second-to-last element in first data array
    expect(mockCb).not.toHaveBeenCalledWith(data[0].at(-1));
  });
});
