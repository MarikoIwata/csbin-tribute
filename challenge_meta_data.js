const challenges = {};
challenges.extensions = {};

challenges.intro = [
  { challenge: 'my-index-of', params: ['array', 'elem'] },
  { challenge: 'unique', params: ['array'] },
  { challenge: 'longest-word', params: ['sentence'] },
  { challenge: 'disemvowel', params: ['string'] },
  { challenge: 'divisible-by-five-pair-sum', params: ['array'] },
  { challenge: 'highest-score', params: ['students'] },
  { challenge: 'least-common-multiple', params: ['num1', 'num2'] },
  { challenge: 'array-builder', params: ['count'] },
  { challenge: 'object-builder', params: ['count'] },
  { challenge: 'secret-cipher', params: ['sentence', 'cipher'] },
  { challenge: 'passing-students', params: ['students'] },
];

challenges.callbacks = [
  { challenge: 'add-two', params: ['num'] },
  { challenge: 'add-s', params: ['word'] },
  { challenge: 'map', params: ['array', 'callback'] },
  { challenge: 'for-each', params: ['array', 'callback'] },
  { challenge: 'map-with', params: ['array', 'callback'] },
  { challenge: 'reduce', params: ['array', 'reducerCallback', 'initialValue'] },
  { challenge: 'intersection', params: ['arrays'] },
  { challenge: 'union', params: ['arrays'] },
  { challenge: 'obj-of-matches', params: ['array1', 'array2', 'callback'] },
  { challenge: 'multi-map', params: ['arrVals', 'arrCallbacks'] },
  { challenge: 'object-filter', params: ['obj', 'callback'] },
  { challenge: 'majority', params: ['array', 'callback'] },
  { challenge: 'prioritize', params: ['array', 'callback'] },
  { challenge: 'count-by', params: ['array', 'callback'] },
  { challenge: 'group-by', params: ['array', 'callback'] },
  { challenge: 'good-keys', params: ['object', 'callback'] },
  { challenge: 'commutative', params: ['func1', 'func2', 'value'] },
  { challenge: 'obj-filter', params: ['object', 'callback'] },
  { challenge: 'rating', params: ['arrOfFuncs', 'value'] },
  { challenge: 'pipe', params: ['arrOfFuncs', 'value'] },
  { challenge: 'highest-func', params: ['objOfFuncs', 'subject'] },
  { challenge: 'combine-operations', params: ['startVal', 'arrOfFuncs'] },
  { challenge: 'my-func', params: ['array', 'callback'] },
  { challenge: 'my-for-each', params: ['array', 'callback', 'thisArg'] },
];

challenges.recursion = [
  { challenge: 'countdown', params: ['n'] },
  { challenge: 'sum', params: ['array'] },
  { challenge: 'palindrome', params: ['string'] },
  { challenge: 'is-prime', params: ['num'] },
  { challenge: 'path-finder', params: ['obj', 'arr'] },
  { challenge: 'flatten-recursively', params: ['arr'] },
  { challenge: 'find-in-ordered-set', params: ['arr', 'target'] },
  { challenge: 'ways-to-reach-nth-stair', params: ['n'] },
  { challenge: 'get-permutations', params: ['arr'] },
  { challenge: 'get-range-between', params: ['x', 'y'] },
];

challenges.closures = [
  { challenge: 'create-function', params: [] },
  { challenge: 'create-function-printer', params: ['input'] },
  { challenge: 'counter', params: ['step'] },
  { challenge: 'add-by-x', params: ['x'] },
  { challenge: 'once', params: ['func'] },
  { challenge: 'after', params: ['count', 'func'] },
  { challenge: 'delay', params: ['func', 'wait', '...args'] },
  { challenge: 'roll-call', params: ['names'] },
  { challenge: 'save-output', params: ['func', 'password'] },
  { challenge: 'cycle-iterator', params: ['array'] },
  { challenge: 'define-first-arg', params: ['func', 'arg'] },
  { challenge: 'date-stamp', params: ['func'] },
  { challenge: 'censor', params: [] },
  { challenge: 'create-secret-holder', params: ['secret'] },
  { challenge: 'call-times', params: [] },
  { challenge: 'russian-roulette', params: ['num'] },
  { challenge: 'average', params: [] },
  { challenge: 'make-func-tester', params: ['arrOfTests'] },
  { challenge: 'make-history', params: ['limit'] },
  { challenge: 'blackjack', params: ['array'] },
];

challenges.async = [];

challenges.extensions.callbacks = [
  { challenge: 'toNumbers', params: ['array'] },
];

challenges.extensions.closures = [
  { challenge: 'memoize', params: ['func'] },
  { challenge: 'not', params: ['func'] },
  { challenge: 'compose', params: ['funcs'] },
];

challenges.extensions.iteration = [
  { challenge: 'filter-iter', params: ['iterable', 'func'] },
  { challenge: 'filter-iter', params: ['iterable', 'func'] },
  { challenge: 'map-iter', params: ['iterable', 'func'] },
  { challenge: 'assembly-line', params: ['array'] },
];

module.exports = challenges;
