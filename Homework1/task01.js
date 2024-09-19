function reverseWords(str) {
    const words = str.split(' ');
    let reversedString = '';

    for (let i = words.length - 1; i >= 0; i--) {
        reversedString += words[i];
        if (i > 0) reversedString += ' ';
    }

    return reversedString;
}

console.log(reverseWords("Hello World"));  