// Given a random non-negative number, you have to return 
// the digits of this number within an array in reverse order.

// 348597 => [7,9,5,8,4,3]
// 0 => [0]

let num = 348597 
arr = String(num).split('').reverse().map(Number);
console.log(arr)

// String(num).split('') => converts the variable of integers into an array of strings
// .reverse() => reverses the order of the strings 
// .map(Number); => goes over the array and converts the string into numbers 
