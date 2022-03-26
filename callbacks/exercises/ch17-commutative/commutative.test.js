let commutative;
commutative = require('./commutative');
// commutative = require('./solution'); // uncomment to test solution file

const mocks = {
  funcArgs: {
    multBy3: jest.fn((n) => n * 3),
    divBy4: jest.fn((n) => n / 4),
    subtract5: jest.fn((n) => n - 5),
  },
  valueArgs: [11, 10, 48],
  expectedResults: [true, false, false],
};

describe('commutative(func1, fun2, value)', () => {
  const {
    funcArgs: { multBy3, divBy4, subtract5 },
    valueArgs,
  } = mocks;

  const results = [
    commutative(multBy3, divBy4, valueArgs[0]),
    commutative(multBy3, subtract5, valueArgs[1]),
    commutative(divBy4, subtract5, valueArgs[2]),
  ];

  test('should return a boolean', () => {
    results.forEach((result) => {
      expect(typeof result).toBe('boolean');
    });
  });

  test('should return true if the operations are commutative, and false otherwise', () => {
    expect(results).toEqual(mocks.expectedResults);
  });
});
