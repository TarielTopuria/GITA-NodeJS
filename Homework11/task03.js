const fs = require("fs");
const randomText = "This is a random text.";

function writeRandomText() {
  fs.writeFile("text.txt", randomText, (err) => {
    if (err) throw err;
    console.log("Text written to text.txt");
    countVowels();
  });
}

function countVowels() {
  fs.readFile("text.txt", "utf8", (err, data) => {
    if (err) throw err;

    const vowelCount = data.match(/[aeiouAEIOU]/g)?.length || 0;
    console.log(`The text contains: ${vowelCount}.`);
  });
}

writeRandomText();
