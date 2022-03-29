let pipe;
pipe = require('./pipe');
// pipe = require('./solution'); // uncomment to test solution file

const mocks = {
  mockCbs: [
    jest.fn(function capitalize(str) {
      return str.toUpperCase();
    }),
    jest.fn(function addLowerCase(str) {
      return str + str.toLowerCase();
    }),
    jest.fn(function repeat(str) {
      return str + str;
    }),
  ],
  arg: 'cat',
  expected: 'CATcatCATcat',
};

describe('pipe(arrOfFuncs, value)', () => {
  const { mockCbs, arg } = mocks;

  const result = pipe(mockCbs, arg);

  test('should invoke each function in the array', () => {
    mockCbs.forEach((cb) => {
      expect(cb).toHaveBeenCalled();
    });
  });

  test('should pass value argument to the first function in the array', () => {
    const firstCbArg = mockCbs[0].mock.calls[0][0];
    expect(firstCbArg).toBe(arg);
  });

  test('should return the correct final output', () => {
    expect(result).toBe(mocks.expected);
  });
});
