const nestedArr = [[2, 4], [6, 8]];
const flattedArr = nestedArr.flat();
const sum = flattedArr.reduce((acc, curr) => acc + (curr ** 2), 0);
console.log(sum);
