function generateRandomWord(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomWord = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomWord += characters[randomIndex];
  }

  return randomWord;
}

console.log(generateRandomWord(4));
