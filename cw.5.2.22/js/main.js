// Write a method, that will get an integer array as parameter and will 
// process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// Notes
// The input array will always contain only positive numbers, 
// and will never be empty or null.

function squareOrSquareRoot(array) {
    for (i=0; i < array.length; i++){
        if(Math.sqrt([i]) % 1 === 0 ){
            [i].unshift()
        }else{
            return Math.pow(array[i], 2)
        }
    }
    
    return array;  
  }

  squareOrSquareRoot([3, 5, 9, 49, 6, 17])
