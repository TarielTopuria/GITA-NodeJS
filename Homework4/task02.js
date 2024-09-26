function deleteKeyFromObject(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

const myObj = { a: 1, b: 2, c: 3 };
const updatedObj = deleteKeyFromObject(myObj, "b");

console.log(updatedObj);
