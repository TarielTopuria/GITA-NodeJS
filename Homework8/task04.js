function isValidEmail(str) {
  const regex = /^[a-zA-Z0-9._%+-]+@example\.com$/;
  return regex.test(str);
}
  
console.log(isValidEmail("tatotophuria@example.com"));
