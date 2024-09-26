function cleanSentence(sentence) {
  const digits = "0123456789";
  let cleanedSentence = "";

  for (let i = 0; i < sentence.length; i++)
    if (!digits.includes(sentence[i])) cleanedSentence += sentence[i];

  return cleanedSentence;
}

console.log(cleanSentence("This looks5 grea8t!"));
