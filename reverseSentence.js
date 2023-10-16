//1. Take a sentence as an input and reverse every word in that sentence.
//Example - This is a sunny day > shiT si a ynnus yad.

function reverseString(str) {
    return str.split("").reverse().join("");
}
result = reverseString("This is a sunny day"); 
console.log(result); // shiT si a ynnus yad


