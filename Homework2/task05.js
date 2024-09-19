function findPalindromes(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let reversedWord = '';
        
        for (let j = word.length - 1; j >= 0; j--) reversedWord += word[j];
        
        if (word === reversedWord) result.push(word);
    }
    
    return result;
}

console.log(findPalindromes(['level', 'giga', 'ana', 'button', 'abba']));
