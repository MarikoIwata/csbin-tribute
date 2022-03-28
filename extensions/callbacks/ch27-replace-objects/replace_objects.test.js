let replaceObjects;
// replaceObjects = require('./replace_objects');
replaceObjects = require('./solution'); // uncomment to test solution file

describe('replaceObjects(arrOfObjs)', () => {
  test("should return an array with each object's value repeated", () => {
    expect(
      replaceObjects([
        { value: 'a', repeat: 1 },
        { value: 'b', repeat: 0 },
        { value: 'c', repeat: 3 },
      ])
    ).toEqual(['a', 'c', 'c', 'c']);

    expect(
      replaceObjects([
        { value: 1, repeat: 1 },
        { value: 2, repeat: 2 },
        { value: 3, repeat: 3 },
      ])
    ).toEqual([1, 2, 2, 3, 3, 3]);

    expect(replaceObjects([])).toEqual([]);
  });
});
