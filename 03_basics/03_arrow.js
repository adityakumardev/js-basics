// const user = {
//     username: "aditya",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`)
//     }
// }

// user.welcomeMessage()
// user.username = "Sankit"
// user.welcomeMessage()

// console.log(this)

// function newfn() {
//     let username = "Aditya"
//     console.log(username)
// }

// newfn()

// const newfn = function () {
//     let username = "aditya"
//     console.log(this.username);
// }

// const anotherfn = () => {
//     let username = "aditya"
//     console.log(this.username);
// }

// anotherfn()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => num1 + num2 // one liner arrow function(implicit return)

// console.log(addTwo(2,4));

const returnUser = () => ({username: "Aditya"}) // to print an object we have to wrap it in paranthesis ({})
console.log(returnUser())

// const myArray = [2,5,3,7,9]

// myArray.forEach()