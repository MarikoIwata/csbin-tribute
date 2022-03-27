let censor;
// censor = require('./censor');
censor = require('./solution'); // uncomment to test solution file

describe('censor()', () => {
  const changeScene = censor();

  test('should return a function', () => {
    expect(changeScene).toBeInstanceOf(Function);
  });

  test('returned function should not return anything when provided with two arguments', () => {
    expect(changeScene('dogs', 'cats')).toBeUndefined();
    expect(changeScene('quick', 'slow')).toBeUndefined();
  });

  test('When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs)', () => {
    expect(changeScene('The quick, brown fox jumps over the lazy dogs.')).toBe(
      'The slow, brown fox jumps over the lazy cats.'
    );
  });
});
