/* 
full credit to 
Dr. Axel Rauschmayer for this challenge and solution
 */

const fs = require('fs');
const path = require('path');

function logPaths(dir) {
  for (const fileName of fs.readdirSync(dir)) {
    const filePath = path.resolve(dir, fileName);
    console.log(filePath);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      logPaths(filePath); // recursive call
    }
  }
}

// logPaths('../');

function visitPaths(dir, cb) {
  for (const fileName of fs.readdirSync(dir)) {
    const filePath = path.resolve(dir, fileName);
    cb(filePath);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      visitPaths(filePath, cb);
    }
  }
}

function* iterPaths(dir) {
  for (const fileName of fs.readdirSync(dir)) {
    const filePath = path.resolve(dir, fileName);
    yield filePath;
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      yield* iterPaths(filePath);
    }
  }
}

function* objectEntries(obj) {
  const propKeys = Reflect.ownKeys(obj);

  for (const propKey of propKeys) {
    // `yield` returns a value and then pauses
    // the generator. Later, execution continues
    // where it was previously paused.
    yield [propKey, obj[propKey]];
  }
}

// function objectEntries(obj) {
//   let index = 0;
//   let propKeys = Reflect.ownKeys(obj);

//   return {
//       [Symbol.iterator]() {
//           return this;
//       },
//       next() {
//           if (index < propKeys.length) {
//               let key = propKeys[index];
//               index++;
//               return { value: [key, obj[key]] };
//           } else {
//               return { done: true };
//           }
//       }
//   };
// }

function iterateOver(...args) {
  let index = 0;
  const iterable = {
    [Symbol.iterator]() {
      const iterator = {
        next() {
          if (index < args.length) {
            return { value: args[index++] };
          } else {
            return { done: true };
          }
        },
      };
      return iterator;
    },
  };
  return iterable;
}

function sleep(milliseconds) {
  const start = Date.now();
  while (Date.now() - start < milliseconds);
}
