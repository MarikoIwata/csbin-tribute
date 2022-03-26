let combineOperations;
combineOperations = require('./combine_operations');
// combineOperations = require('./solution'); // uncomment to test solution file

const mocks = {
  funcsArr: [
    jest.fn(function add100(num) {
      return num + 100;
    }),
    function divByFive(num) {
      return num / 5;
    },
    function multiplyByThree(num) {
      return num * 3;
    },
    function multiplyFive(num) {
      return num * 5;
    },
    function addTen(num) {
      return num + 10;
    },
  ],
  startValue: 0,
  expectedResult: 310,
};

describe('combineOperations(startVal, arrOfFuncs)', () => {
  const { startValue, funcsArr } = mocks;

  const result = combineOperations(startValue, funcsArr);

  test('should pass startVal to the first function in the array', () => {
    const [firstFunc] = funcsArr;
    const firstFuncArg = firstFunc.mock.calls[0][0];

    expect(firstFuncArg).toBe(startValue);
  });

  test('should return the final value returned by the last function in the array', () => {
    expect(result).toBe(mocks.expectedResult);
  });
});
