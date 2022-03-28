function arrayBuilder(count) {
  return Object.entries(count).reduce((arr, [key, value]) => {
    const elems = Array(value).fill(key);
    return arr.concat(elems);
  }, []);
}

module.exports = arrayBuilder;
