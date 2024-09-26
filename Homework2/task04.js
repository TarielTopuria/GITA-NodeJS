function countTotalCharacters(arr) {
  let totalChars = 0;

  for (let i = 0; i < arr.length; i++) totalChars += arr[i].length;

  return totalChars;
}

console.log(countTotalCharacters(["a", "ab", "abc"]));
