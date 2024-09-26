let mixedArr = [1, [2, 3], "hello", [4]];

mixedArr.forEach((item, index) => {
  if (!Array.isArray(item)) {
    mixedArr.splice(index, 1);
  }
});

let allArrays = true;
mixedArr.forEach(item => {
  if (!Array.isArray(item)) allArrays = false;
});

console.log(allArrays);