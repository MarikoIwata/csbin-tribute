const saveOutput = require('./save_output');

const mocks = {
  func: function double(x) {
    return x * 2;
  },
  password: 'boo',
  args: [2, 5, 12],
  cache: {
    2: 4,
    5: 10,
    12: 24,
  },
};

function isObject(x) {
  return x !== null && (typeof x === 'object' || typeof x === 'function');
}

describe('saveOutput(func, password) challenge', () => {
  const { func, password, args, cache } = mocks;
  const store = saveOutput(func, password);

  test('saveOutput(func, password) should return a function', () => {
    expect(store instanceof Function).toBe(true);
  });

  test('the returned function should behave exactly like the passed-in function', () => {
    args.forEach((arg) => {
      const expectedResult = func(arg);
      const actualResult = store(arg);

      expect(actualResult).toBe(expectedResult);
    });
  });

  let o;

  test('if called with password, the returned function should return an object', () => {
    o = store(password);
    expect(isObject(o)).toBe(true);
  });

  test('the returned object should have previous arguments/outputs as key/value pairs', () => {
    o = store(password);
    expect(o).toEqual(cache);
  });
});

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }
