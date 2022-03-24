const createFunctionPrinter = require('./create_function_printer');

describe('createFunctionPrinter(input) challenge', () => {
  function* genMocks() {
    yield 'sample';
    yield 'hello';
  }

  const mocks = genMocks();
  let fn;
  let output;

  beforeEach(() => {
    const { value } = mocks.next();
    fn = createFunctionPrinter(value);
    output = fn();
  });

  test('returned function should return originally passed-in input when invoked', () => {
    expect(output).toBe('sample');
  });

  test('returned function should return originally passed-in input when invoked', () => {
    expect(output).toBe('hello');
  });
});
