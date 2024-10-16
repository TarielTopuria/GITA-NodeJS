function isValidDate(str) {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  return regex.test(str);
}
  
console.log(isValidDate("29/05/1997"));
