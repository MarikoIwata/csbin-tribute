/*
Challenge 19

To test your solution run
npm t make_history
from the command line

*/

function makeHistory(limit) {
  const history = [];

  return function (string) {
    if (string === 'undo') {
      return history.length === 0
        ? 'nothing to undo'
        : `${history.pop()} undone`;
    }

    if (history.length >= limit) {
      history.shift();
    }
    history.push(string);

    return `${string} done`;
  };
}

module.exports = makeHistory;
