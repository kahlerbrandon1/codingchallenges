// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the 
// second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you 
// should return [10, -65].


function countAndSum(arr){


if (input == null || arr.length < 1){
    return [];
}

let newArr = [0,0]

for(i=0; i < arr.length; i++){
    if(arr[i] > 0){
        newArr[0] += 1
    }else{
        if(arr[i] < 0){
         newArr[1] += arr[i]
        }
    }
}
return newArr;
}

console.log(countAndSum([1, 6, 5, 6, 7, 9, -11, -33, -22]))

