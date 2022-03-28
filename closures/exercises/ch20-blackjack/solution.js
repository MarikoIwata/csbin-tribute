function blackjack(array) {
  const BLACKJACK = 21;
  const iterator = array[Symbol.iterator]();

  return function dealer(x, y) {
    let playerCalls = 0;
    let sum = x + y;
    let busted = false;

    return function player() {
      if (busted) return 'you are done!';

      playerCalls += 1;
      // on first call: simply return sum
      if (playerCalls == 1) return sum;

      // otherwise increment sum by next array value and check
      sum += iterator.next().value;
      if (sum > BLACKJACK) {
        busted = true;
        return 'bust';
      }

      return sum;
    };
  };
}

module.exports = blackjack;
