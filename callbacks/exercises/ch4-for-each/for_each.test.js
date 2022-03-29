let forEach;
forEach = require('./for_each');
// forEach = require('./solution'); // uncomment to test solution file

describe('forEach(array, callback)', () => {
  // Arrange
  const data = [1, 2, 3];
  const mockCb = jest.fn(function square(x) {
    return x ** 2;
  });

  // Act
  const result = forEach(data, mockCb);

  // Assert
  test('should not return anything', () => {
    expect(result).toBeUndefined();
  });

  test('should call callback once for each element in the array', () => {
    expect(mockCb).toHaveBeenCalledTimes(data.length);
  });

  test('should handle index, array, and optional thisArg callback parameters', () => {
    // Arrange
    const thisArg = [100, 10, 1];
    const thisAwareCb = jest.fn(function pushLenghAndIndex(el, i, array) {
      this.push(el + i + array.length);
    });
    const expected = [100, 10, 1, 4, 6, 8];

    // Act
    forEach(data, thisAwareCb, thisArg);

    // Assert
    expect(thisArg).toEqual(expected);
  });
});
