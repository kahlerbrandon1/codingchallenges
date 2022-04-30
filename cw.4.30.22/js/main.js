// Your task is to make a function that can take any non-negative integer 
// as an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


// I could take n, turn it into an a string using tostring, then take that string and
//  separate it into an array using split. Then I can look at each element in the array and see
// if it is larger than the other elements and add it to the [0] index. Then repeat and 
// keep adding it to the next index. That would require a lot of if statements though.

function descendingOrder(n){
    let convert = n.toString(); //converts n the number into a string
    let newArr = convert.split(''); // forms an array
    let sorted = newArr.sort(); // sorts the array in order
    let reversed = sorted.reverse(); // reverses that array
    let convertToString = reversed.join('') //converts array into a string 
    let convertToN = Number(convertToString) //turns the reversed ordered string back into a number
    return convertToN

  }

//   best answer on codewars: 
git