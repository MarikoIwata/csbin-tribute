let russianRoulette;
russianRoulette = require('./russian_roulette');
// russianRoulette = require('./solution'); // uncomment to test solution file

const play = russianRoulette(3);

const mocks = {
  n: 3,
  results: [play(), play(), play(), play(), play()],
};

describe('russianRoulette(n)', () => {
  const { n, results } = mocks;

  test('should return a function', () => {
    expect(play).toBeInstanceOf(Function);
  });

  test('the returned function should return "click" the first n - 1 times it is invoked', () => {
    const nMinus1Results = results.slice(0, n - 1);
    nMinus1Results.forEach((result) => {
      expect(result).toBe('click');
    });
  });

  test('should return "bang" on the nth invocation', () => {
    const nthResult = results[n - 1];
    expect(nthResult).toBe('bang');
  });

  test('should return "reload to play again" thereafter', () => {
    const remainingResults = results.slice(n);

    remainingResults.forEach((result) => {
      expect(result).toBe('reload to play again');
    });
  });
});
