// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// ['Brandon', 'is', 'the', 'best', 'man', 'on', 'earth'] => ['Brandon','the', 'man', 'earth']

function everyOther(arr){
    let newArr = [] //create a new arr to store the modified arr
    for(i=0; i<arr.length; i++){ //created a loop that checks each part of the arr
        if(i % 2 == 0){ // if the item in index of the arr is even then
            newArr.push(arr[i]) //it pushes that item into the new arr
        }
    return newArr
    }

}
everyOther(['Brandon', 'is', 'the', 'best', 'man', 'on', 'earth'])
everyOther(1,2,3,4,5,6,7,8,9,)

