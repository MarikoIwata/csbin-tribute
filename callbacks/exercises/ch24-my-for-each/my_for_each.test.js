let myForEach;
myForEach = require('./my_for_each');
// myForEach = require('./solution'); // uncomment to test solution file
const arrayToNumbers = require('../../../utils/values/array_to_numbers');
const getNthMockCbArg = require('../../../utils/mocks/get_nth_mock_cb_arg');

let sum = 0; // for mocks.callback to mutate
const mocks = {
  array: [1, 2, 3],
  arrayWithEmpties: [1, , 2, , 3],
  numNonEmptyElements: 6,
  callback: jest.fn(function addToSum(num) {
    sum += num;
  }),
  thisAwareCb: jest.fn(function append(val) {
    this.push(val);
  }),
  thisArg: [2, 4, 6],
};

describe('myForEach(array, callback)', () => {
  const { array, callback } = mocks;

  const result = myForEach(array, callback);

  test('should pass each array element to callback in order', () => {
    const cbFirstArgs = getNthMockCbArg(callback, 1);
    expect(cbFirstArgs).toEqual(array);
  });

  test('should pass correct index as second argument to callback', () => {
    const cbSecondArgs = getNthMockCbArg(callback, 2);
    const indices = arrayToNumbers(Object.keys(array));

    expect(cbSecondArgs).toEqual(indices);
  });

  test('should pass array as third argument to callback ', () => {
    const cbThirdArgs = getNthMockCbArg(callback, 3);

    cbThirdArgs.forEach((thirdArg) => {
      expect(thirdArg).toStrictEqual(array);
    });
  });

  test('should return undefined', () => {
    expect(result).toBeUndefined();
  });

  test('should not invoke the callback for uninitialized values / empty items', () => {
    myForEach(mocks.arrayWithEmpties, callback);

    expect(callback).toHaveBeenCalledTimes(mocks.numNonEmptyElements);
  });

  test('if a thisArg argument is provided, it should be used as callback\'s "this" value', () => {
    const { thisArg } = mocks;
    const thisArgCopy = [...thisArg];

    myForEach(array, mocks.thisAwareCb, thisArg);

    expect(thisArg).toEqual([...thisArgCopy, ...array]);
  });
});
