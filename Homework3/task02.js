const nestedArr = [[1, -2], [3, -4], [5]];
const flattedArr = nestedArr.flat();
const filteredArr = flattedArr.filter(num => num >= 0);
console.log(filteredArr);
