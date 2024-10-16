function isValidGEPhoneNumber(str) {
  const regex = /^598-\d{2}-\d{2}-\d{2}$/;
  return regex.test(str);
}
  
console.log(isValidGEPhoneNumber("598-12-34-56"));