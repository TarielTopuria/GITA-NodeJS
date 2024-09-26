function doubleChars(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) result += str[i] + str[i];

  return result;
}

const result = doubleChars("Hello World");
console.log(result);
