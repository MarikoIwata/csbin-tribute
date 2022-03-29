let myForEach;
myForEach = require('./my_for_each');
// myForEach = require('./solution'); // uncomment to test solution file
const arrayToNumbers = require('../../../utils/values/array_to_numbers');

let sum = 0; // for mockCb to mutate

function setup() {
  return {
    sum: 0,
    data: [1, 2, 3],
    dataWithEmpties: [1, , 2, , 3],
    nonEmpties: 3,
    mockCb: jest.fn(function addToSum(num) {
      sum += num;
    }),
    thisAwareCb: jest.fn(function append(val) {
      this.push(val);
    }),
    thisArg: [2, 4, 6],
  };
}

describe('myForEach(array, callback, thisArg)', () => {
  const { data, mockCb } = setup();

  const result = myForEach(data, mockCb);

  test('should call callback for each element in ascending index order', () => {
    const elsToCb = mockCb.mock.calls.flatMap((call) => call[0]);

    expect(elsToCb).toEqual(data);
  });

  test('should pass correct index as second argument to callback', () => {
    const indicesToCb = mockCb.mock.calls.flatMap((call) => call[1]);
    const arrayIndices = arrayToNumbers(Object.keys(data));

    expect(indicesToCb).toEqual(arrayIndices);
  });

  test('should pass array as third argument to callback ', () => {
    const arraysToCb = mockCb.mock.calls.map((call) => call[2]);

    arraysToCb.forEach((arrayArg) => {
      expect(arrayArg).toEqual(data);
    });
  });

  test('should return undefined', () => {
    expect(result).toBeUndefined();
  });

  test('should not invoke the callback for uninitialized values / empty items', () => {
    const { mockCb, dataWithEmpties, nonEmpties } = setup(); // reset mock callback

    myForEach(dataWithEmpties, mockCb);

    expect(mockCb).toHaveBeenCalledTimes(nonEmpties);
  });

  test('if a thisArg argument is provided, it should be used as callback\'s "this" value', () => {
    const { thisAwareCb, thisArg } = setup();
    const thisArgCopy = [...thisArg];

    myForEach(data, thisAwareCb, thisArg);

    expect(thisArg).toEqual([...thisArgCopy, ...data]);
  });
});
