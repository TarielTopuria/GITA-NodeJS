function isWideNumber(num) {
  const digits = num.toString().split("").map(Number);
  const numOfDigits = digits.length;
  const sumOfDigits = digits.reduce((acc, digit) => acc + digit, 0);
  return numOfDigits > sumOfDigits;
}

console.log(isWideNumber(123));
console.log(isWideNumber(1000));
