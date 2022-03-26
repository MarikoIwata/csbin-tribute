const pipe = require('../ch20-pipe/solution');

function combineOperations(startVal, arrOfFuncs) {
  return pipe(arrOfFuncs, startVal);
}

module.exports = combineOperations;
