function russianRoulette(n) {
  let calls = 0;

  return function () {
    calls += 1;
    if (calls == n) return 'bang';
    if (calls < n) return 'click';
    return 'reload to play again';
  };
}

module.exports = russianRoulette;
