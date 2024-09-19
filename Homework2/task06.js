function filterWordsWithSpecialCharacters(arr) {
    const specialCharacters = '@#$%^&*()_+=[]{}|\\:;"\'<>,.?/~`!';
    let filteredArray = [];
    let removedWords = [];
    
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let containsSpecialChar = false;
        
        for (let j = 0; j < word.length; j++) {
            if (specialCharacters.includes(word[j])) {
                containsSpecialChar = true;
                break;
            }
        }
        
        if (containsSpecialChar) {
            removedWords.push(word);
        } else {
            filteredArray.push(word);
        }
    }
    
    return { filteredArray, removedWords };
}

const { filteredArray, removedWords } = filterWordsWithSpecialCharacters(["hello", "wor#ld", "how", "are@you", "fine"]);
console.log("Filtered Array:", filteredArray);
console.log("Removed Words:", removedWords);
