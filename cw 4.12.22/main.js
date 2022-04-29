function reverseArray(num){
    let numArray = num.toString().split('').reverse()

return numArray.map(e => parseInt(e))
}
console.log(reverseArray(1245))
