const addByX = require('./add_by_x');

describe('addByX(x) challenge', () => {
  let fn;

  test('addByX(x) should return a function', () => {
    fn = addByX(2);
    expect(fn instanceof Function).toBe(true);
  });

  test('the returned function should add an input by x and return the result', () => {
    const mocks = [
      { x: 1, input: 5, expected: 6 },
      { x: 3, input: 10, expected: 13 },
      { x: -1, input: 20, expected: 19 },
    ];

    mocks.forEach(({ x, input, expected }) => {
      fn = addByX(x);
      const output = fn(input);

      expect(output).toEqual(expected);
    });
  });
});
