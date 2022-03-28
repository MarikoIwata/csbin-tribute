let compose;
compose = require('./compose');
// compose = require('./solution'); // uncomment to test solution file

const mocks = {
  toUpper: (str) => str.toUpperCase(),
  add: (x) => (y) => x + y,
  multiply: (x) => (y) => x * y,
  classyGreeting: (firstName, lastName) => {
    return "The name's " + lastName + ', ' + firstName + ' ' + lastName;
  },
  initialArgs: [['James', 'Bond'], -4],
  expectedOutputs: ["THE NAME'S BOND, JAMES BOND", 7],
};

describe('compose(funcs)', () => {
  const {
    toUpper,
    add,
    multiply,
    classyGreeting,
    initialArgs: [bond, neg4],
    expectedOutputs: [expectedGreeting, expectedNum],
  } = mocks;

  // create jest mock functions
  const mockToUpper = jest.fn(toUpper);
  const mockClassyGreeting = jest.fn(classyGreeting);
  const mockAdd1 = jest.fn(add(1));
  const mockDouble = jest.fn(multiply(2));

  // prepare compositions
  const yellGreeting = compose(mockToUpper, mockClassyGreeting);
  const doubleIncrementAbs = compose(Math.abs, mockAdd1, mockDouble);

  // compute outputs
  const greet007 = yellGreeting(...bond);
  const numericalResult = doubleIncrementAbs(neg4);

  test('should return a function', () => {
    expect(yellGreeting).toBeInstanceOf(Function);
    expect(doubleIncrementAbs).toBeInstanceOf(Function);
  });

  test('the returned function should pass its arguments to the last initially passed-in function', () => {
    expect(mockClassyGreeting).toHaveBeenLastCalledWith(...bond);
  });

  test('should correctly perform right to left composition', () => {
    expect(greet007).toBe(expectedGreeting);
    expect(numericalResult).toBe(expectedNum);
  });
});
