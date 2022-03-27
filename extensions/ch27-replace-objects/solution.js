function replaceObjects(arrOfObjs) {
  return arrOfObjs.flatMap(({ value, repeat }) => Array(repeat).fill(value));
}

module.exports = replaceObjects;
