// // // Arrays

// // // ways to declare an array

// // // const myArr = [1,2,3,4,5]
// // // const badGuys = new Array("Dr. Octopus", "Osborne", "Sand Man")

// // // console.log(myArr[4]) // logs the last element (0-based indexing)
// // // console.log(badGuys[1]) // logs the second element from array (string type)

// // // console.log(myArr) // logs the complete array
// // // console.log(badGuys)

// // // console.log(typeof(myArr)) // object type

// // const newArr = []; // initialised an empty array

// // newArr.push("Aditya");
// // newArr.push("Kumar")
// // // console.log(newArr)

// // // newArr.pop();
// // // console.log(newArr)

// // /* shift and unshift methods (not - optimised) */

// // newArr.unshift("Mr. ") //adds a new element at the beginning of the array
// // console.log(newArr)

// // newArr.shift() // removes the first element from the array (pop)

// const $myArr = [1,2,3,4,5]
// console.log($myArr.includes(5)) // logs boolean values true or false if array includes a value x
// console.log($myArr.indexOf(2)) // logs the index of an element if not present logs -1

// const newArr = $myArr.join() // binds the elements of array and converts it into a string
// console.log(typeof newArr, newArr)

/* Slice & Splice Methods */
const newArr1 = [0,1,2,3,4,5]
const myN1 = newArr1.slice(1,3) // slices the array from start point to n - 1 (does not manipulate the original array)
console.log("A", newArr1) // [0,1,2,3,4,5]
console.log(myN1) // [1,2]

const myN2 = newArr1.splice(1,3) // slices the array from start point to n - 1 (manipulates the original array)
console.log("B", newArr1) // [0, 4, 5]
console.log(myN2) // [ 1, 2, 3 ]