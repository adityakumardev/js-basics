// there are two types of data types classified:
// 1. Primitive Datatype => value datatypes

//datatypes which gives the copy of it for another use

/*
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. BigInt
7. Symbol
*/

// 2. Non-primitive data types => reference data types

//datatypes which passes the reference of it for reuse

/*
1. Array
2. Object
3. Function
*/

const num = 100
console.log(typeof num);

const isString = "Hello World"
console.log(typeof isString);

const isLoggedIn = false
console.log(typeof isLoggedIn);

const value = null
console.log(typeof value);

let UndefinedVariable;
console.log(typeof UndefinedVariable);

const BigNumber = 10000000000000000n
console.log(typeof BigNumber);

const isASymbol = Symbol(123)
console.log(typeof isASymbol);

console.log("\n");

const arr = ["one", "two"]
console.log(typeof arr);

const anObject = {
    name: "Aditya",
    hasAName: "true",
}

console.log(typeof anObject)

let click = function clickme() {
    click++;
}

console.log(typeof click)