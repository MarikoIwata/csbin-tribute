// arguably more declarative, but advanced in terms of JS feature usage
function range(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}

// trusty old for loop :)
function rangeIterative(start, end) {
  const output = [];

  for (let i = start; i <= end; i++) {
    output.push(i);
  }

  return output;
}

module.exports = range;
