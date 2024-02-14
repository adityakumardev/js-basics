const name = "Aditya"
const repoCount = 8

// console.log(name + repoCount + " Value")

// this is the best way to concatenate strings

//we use backticks to make a container and use ${} to inject variable in string
// it is more readable and clean, used extensively in backend development
// we can easily use string methods
console.log(`hi my name is ${name} and my repo count is ${repoCount}`)

// other way to define a string is using string constructer

const myName = new String('Aditya-Kumar')

console.log(myName); // it returns a string as an object with key value pairs

// string methods
console.log(myName.length);
console.log(myName.toUpperCase());

//access values of string
console.log(myName.charAt(10))
console.log(myName.indexOf('r'))

// string slicing methods

const newString = myName.substring(0,6)
console.log(newString);

// reverse a string

// const revString = myName.slice(-6, 6)
// console.log(revString);

const revString = newString.split("");
console.log(revString);

console.log(`${revString.reverse().join("")}`);
