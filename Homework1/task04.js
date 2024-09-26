function abbreviate(sentence) {
  const words = sentence.split(" ");
  let abbreviation = "";

  for (let i = 0; i < words.length; i++)
    abbreviation += words[i][0].toUpperCase() + ".";

  return abbreviation;
}

const result = abbreviate("Tato Topuria");
console.log(result);
