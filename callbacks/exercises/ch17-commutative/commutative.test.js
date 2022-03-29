let commutative;
commutative = require('./commutative');
// commutative = require('./solution'); // uncomment to test solution file

function setup() {
  return {
    mockMultBy3: jest.fn(function multBy3(n) {
      return n * 3;
    }),
    mockDivBy4: jest.fn(function divBy4(n) {
      return n / 4;
    }),
    mockSubtract5: jest.fn(function subtract5(n) {
      return n - 5;
    }),
    data: [11, 10, 48],
    expected: [true, false, false],
  };
}

describe('commutative(func1, func2, value)', () => {
  const {
    mockDivBy4,
    mockMultBy3,
    mockSubtract5,
    data: [value1, value2, value3],
  } = setup();

  const results = [
    commutative(mockMultBy3, mockDivBy4, value1),
    commutative(mockMultBy3, mockSubtract5, value2),
    commutative(mockDivBy4, mockSubtract5, value3),
  ];

  test('should return a boolean', () => {
    results.forEach((result) => {
      expect(typeof result).toBe('boolean');
    });
  });

  test('should return true if the operations are commutative, and false otherwise', () => {
    const { expected } = setup();

    expect(results).toEqual(expected);
  });
});
