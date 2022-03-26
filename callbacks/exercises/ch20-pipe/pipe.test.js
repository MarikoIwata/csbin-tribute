let pipe;
pipe = require('./pipe');
// pipe = require('./solution'); // uncomment to test solution file

const mocks = {
  arrOfFuncs: [
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
  expectedResult: 'CATcatCATcat',
};

describe('pipe(arrOfFuncs, value)', () => {
  const { arrOfFuncs, arg } = mocks;

  const result = pipe(arrOfFuncs, arg);

  test('should invoke each function in the array', () => {
    arrOfFuncs.forEach((func) => {
      expect(func).toHaveBeenCalled();
    });
  });

  test('should pass value argument to the first function in the array', () => {
    const firstFuncArg = arrOfFuncs[0].mock.calls[0][0];
    expect(firstFuncArg).toBe(arg);
  });

  test('should return the correct final output', () => {
    expect(result).toBe(mocks.expectedResult);
  });
});
