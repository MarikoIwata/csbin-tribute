function defineFirstArg(func, arg) {
  return function (...furtherArgs) {
    return func(arg, ...furtherArgs);
  };
}

module.exports = defineFirstArg;
