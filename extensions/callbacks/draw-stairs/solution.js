function drawStairs(num) {
  const subArrs = Array(num).fill(' ');
  const arr = Array(num).fill(subArrs);

  const lines = arr.map((subArr, index) => {
    const starsBegin = -index - 1;

    const stars = subArr.slice(starsBegin).fill('*');
    const spaces = subArr.slice(0, starsBegin);

    return spaces.concat(stars).join('');
  });

  for (const line of lines) {
    console.log(line);
  }
}

// Test your code below:
// console.log(drawStairs(1)); //
// console.log(drawStairs(2)); //
console.log(drawStairs(5)); //
//
