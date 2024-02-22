// Arrays

// ways to declare an array

// const myArr = [1,2,3,4,5]
// const badGuys = new Array("Dr. Octopus", "Osborne", "Sand Man")

// console.log(myArr[4]) // logs the last element (0-based indexing)
// console.log(badGuys[1]) // logs the second element from array (string type)

// console.log(myArr) // logs the complete array
// console.log(badGuys)

// console.log(typeof(myArr)) // object type

const newArr = []; // initialised an empty array

newArr.push("Aditya");
newArr.push("Kumar")
// console.log(newArr)

// newArr.pop();
// console.log(newArr)

/* shift and unshift methods (not - optimised) */

newArr.unshift("Mr. ") //adds a new element at the beginning of the array
console.log(newArr)

newArr.shift() // removes the first element from the array (pop)