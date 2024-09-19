function countDigitsInElements(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++)
        result.push(arr[i].toString().length);
    
    return result;
}

console.log(countDigitsInElements([123, 45, 6]));
