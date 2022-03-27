let defineFirstArg;
defineFirstArg = require('./define_first_arg');
// defineFirstArg = require('./solution'); // uncomment to test solution file

const mocks = {
  cb: jest.fn(function subtract(big, small) {
    return big - small;
  }),
  args: [20, 5],
  expectedResult: 15,
};

describe('defineFirstArg(func, arg)', () => {
  const {
    cb: subtract,
    args: [firstArg, secondArg],
  } = mocks;

  const subFrom20 = defineFirstArg(subtract, firstArg);
  const result = subFrom20(secondArg); // => 15

  test('should return a function', () => {
    expect(subFrom20).toBeInstanceOf(Function);
  });

  test('the returned function should invoke the passed-in func ', () => {
    expect(subtract).toHaveBeenCalled();
    expect(result).toBe(mocks.expectedResult);
  });

  test('the passed-in arg should be the fist argument', () => {
    expect(subtract.mock.lastCall.at(-1)).toBe(5);
  });
});
