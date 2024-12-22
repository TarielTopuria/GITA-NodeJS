function calculateRectangleArea(rectangle) {
    return rectangle.width * rectangle.height;
}
function calculateRectanglePerimeter(rectangle) {
    return 2 * (rectangle.width + rectangle.height);
}
function calculateCircleArea(circle) {
    return Math.PI * Math.pow(circle.radius, 2);
}
function calculateCirclePerimeter(circle) {
    return 2 * Math.PI * circle.radius;
}
function addNumbers(a, b) {
    return a + b;
}
function multiplyNumbers(a, b) {
    return a * b;
}
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function filterEvenNumbers(numbers) {
    return numbers.filter(function (num) { return num % 2 === 0; });
}
function findMax(numbers) {
    return Math.max.apply(Math, numbers);
}
function isPalindrome(str) {
    var cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    var reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
}
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * calculateFactorial(n - 1);
    }
}
// Example usage
var rectangle = { width: 5, height: 8 };
var circle = { radius: 3 };
var rectangleArea = calculateRectangleArea(rectangle);
var rectanglePerimeter = calculateRectanglePerimeter(rectangle);
var circleArea = calculateCircleArea(circle);
var circlePerimeter = calculateCirclePerimeter(circle);
console.log("Rectangle Area: ".concat(rectangleArea, ", Perimeter: ").concat(rectanglePerimeter));
console.log("Circle Area: ".concat(circleArea, ", Perimeter: ").concat(circlePerimeter));
var sumResult = addNumbers(5, 3);
var multiplicationResult = multiplyNumbers(4, 7);
var capitalizedString = capitalizeString("javascript is fun");
var evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
console.log("Sum: ".concat(sumResult));
console.log("Multiplication: ".concat(multiplicationResult));
console.log("Capitalized String: ".concat(capitalizedString));
console.log("Even Numbers: ".concat(evenNumbers));
var maxNumber = findMax([23, 56, 12, 89, 43]);
var isPalindromeResult = isPalindrome("A man, a plan, a canal, Panama");
var factorialResult = calculateFactorial(5);
console.log("Max Number: ".concat(maxNumber));
console.log("Is Palindrome: ".concat(isPalindromeResult));
console.log("Factorial: ".concat(factorialResult));
