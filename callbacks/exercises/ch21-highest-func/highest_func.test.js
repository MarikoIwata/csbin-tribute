let highestFunc;
highestFunc = require('./highest_func');
// highestFunc = require('./solution'); // uncomment to test solution file

const mocks = {
  funcsObj: {
    double: jest.fn((n) => n * 2),
    addTen: jest.fn((n) => n + 10),
    inverse: jest.fn((n) => n * -1),
  },
  args: [5, 11, -20],
  expected: ['addTen', 'double', 'inverse'],
};

describe('highestFunc(objOfFuncs, subject)', () => {
  const { funcsObj, args } = mocks;

  const results = args.map((arg) => highestFunc(funcsObj, arg));

  test('should return a string', () => {
    results.forEach((result) => {
      expect(typeof result).toBe('string');
    });
  });

  test("the returned string should be one of the passed-in object's keys", () => {
    results.forEach((result) => {
      expect(Object.hasOwn(funcsObj, result)).toBe(true);
    });
  });

  test("the key's associated function should return the largest number when it receives subject as an argument", () => {
    expect(results).toEqual(mocks.expected);
  });
});
