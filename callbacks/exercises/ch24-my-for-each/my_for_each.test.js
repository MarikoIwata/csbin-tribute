let myForEach;
myForEach = require('./my_for_each');
// myForEach = require('./solution'); // uncomment to test solution file
const arrayToNumbers = require('../../../utils/values/array_to_numbers');

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
  valToMutate: 0,
  thisArg: [2, 4, 6],
};

describe('myForEach(array, callback)', () => {
  const { array, callback } = mocks;

  const result = myForEach(array, callback);

  test('should pass each array element to the callback function in order', () => {
    const cbFirstArgs = callback.mock.calls.map((args) => args[0]);
    expect(cbFirstArgs).toEqual(array);
  });

  test('should pass correct index as second argument to the callback', () => {
    const cbSecondArgs = callback.mock.calls.map((args) => args[1]);
    const indices = arrayToNumbers(Object.keys(array));

    expect(cbSecondArgs).toEqual(indices);
  });

  test('should return undefined', () => {
    expect(result).toBeUndefined();
  });

  test('should not invoke the callback for uninitialized values / empty items', () => {
    myForEach(mocks.arrayWithEmpties, callback);

    const cbCalls = callback.mock.calls.length;

    expect(cbCalls).toBe(mocks.numNonEmptyElements);
  });

  test('if a thisArg argument is provided, it should be used as callback\'s "this" value', () => {
    const { thisArg } = mocks;
    const thisArgCopy = [...thisArg];

    myForEach(array, mocks.thisAwareCb, thisArg);

    expect(thisArg).toEqual([...thisArgCopy, ...array]);
  });
});
