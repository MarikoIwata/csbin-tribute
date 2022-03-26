function highestFunc(objOfFuncs, subject) {
  const outputs = Object.values(objOfFuncs).map((fn) => fn(subject));

  const index = outputs.indexOf(Math.max(...outputs));

  return Object.keys(objOfFuncs)[index];
}

module.exports = highestFunc;
