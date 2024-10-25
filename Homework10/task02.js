function evaluateMathQuestion(text, userAnswer) {
  const match = text.match(/What is (\d+) (plus|minus) (\d+)\?/);

  if (!match) {
    console.log("Invalid question format.");
    return;
  }

  const a = parseInt(match[1]);
  const operator = match[2];
  const b = parseInt(match[3]);

  let correctAnswer;
  if (operator === "plus") correctAnswer = a + b;
  else if (operator === "minus") correctAnswer = a - b;
  else {
    console.log("Unsupported operation.");
    return;
  }

  if (parseInt(userAnswer) === correctAnswer) console.log("You're human!");
  else console.log("You're a robot!");
}

evaluateMathQuestion("What is 7 plus 5?", "12");
