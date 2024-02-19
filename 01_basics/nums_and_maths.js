const balance = new Number(100) // constructs a number object
console.log(balance) // will return number:100

console.log(balance.toString()) // converts the number to string
console.log(balance.toFixed(2)) // adds decimal values with 0 after the number

const newNum = new Number(123)
console.log(newNum.toPrecision(1));

console.log(Math.floor(Math.random() * 200) + 1) //  returns a random number from 1 to 200

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // takes min and max value a return a random number between them