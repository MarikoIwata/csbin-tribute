let forEach;
forEach = require('./for_each');
// forEach = require('./solution'); // uncomment to test solution file

const mocks = {
  array: [1, 2, 3],
  cb: jest.fn(function square(x) {
    return x ** 2;
  }),
};

describe('forEach(array, callback) challenge', () => {
  const { array, cb, output: expectedOutput } = mocks;

  test('forEach should not return anything', () => {
    const returnedValue = forEach(array, cb);
    expect(returnedValue).toBe(undefined);
  });

  test('the callback should be called once for each element in the array', () => {
    const expectedCalls = array.length;
    const actualCalls = cb.mock.calls.length;

    expect(actualCalls).toBe(expectedCalls);
  });
});
