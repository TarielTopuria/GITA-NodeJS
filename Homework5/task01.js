function logRandomNumberWhileEqual(targetNumber) {
  if (targetNumber < 0 || targetNumber > 10) {
    console.log(
      `Entered number must be between 0 and 10, you entered ${targetNumber}`
    );
    return;
  }

  const randomNumber = Math.floor(Math.random() * 11);
  if (randomNumber === targetNumber)
    console.log(
      `Random number (${randomNumber}) equals the target number (${targetNumber}).`
    );
}

logRandomNumberWhileEqual(5);
