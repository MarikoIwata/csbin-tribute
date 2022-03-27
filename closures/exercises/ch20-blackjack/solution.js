function blackjack(array) {
  const iterator = array[Symbol.iterator]();

  return function dealer(x, y) {
    let playerCalls = 0;
    let sum = x + y;
    let busted = false;

    return function player() {
      if (busted) return 'you are done!';

      playerCalls += 1;
      if (playerCalls == 1) return sum;
      if (playerCalls == 2) {
        sum += iterator.next().value;
        if (sum > 21) {
          busted = true;
          return 'bust';
        } else return sum;
      }

      sum += iterator.next().value;
      if (sum > 21) {
        busted = true;
        return 'bust';
      }

      return sum;
    };
  };
}

module.exports = blackjack;
