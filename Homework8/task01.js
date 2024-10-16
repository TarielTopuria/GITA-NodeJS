function startsWithUpperCase(str) {
  return /^[A-Z]/.test(str);
}

console.log(startsWithUpperCase("Hello"));
console.log(startsWithUpperCase("hello"));
