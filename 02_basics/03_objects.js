// objects can be declared in two ways
// 1. as a literal
// 2. as a constructor (singleton)

// Object Literals

// Object.create() 

const mySym = Symbol("key1")

const user = {
    name: "Aditya", "full name": "aditya kumar",
    // mySym: "mykey1", // data type not changed to symbol
    [mySym] : "newKey", // right syntax
    age: 21,
    email: "adityak.kumar78@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(user.name)
console.log(user["full name"]) // cannot be accessed from dot operator
console.log(user[mySym])
console.log(user.email)
console.log(typeof(user[mySym])) // still a string instead of symbol

// methods to change data in objects
user.email = "4dityarajput@protonmail.com"

// to stop any changes in objects we can freeze it
// Object.freeze(user) // passed the object to freeze as the param
user.email = "4dityarajput@pm.me"

console.log(user);

//passing a function to object
user.greeting = function() {
    console.log(`Hi there, ${this.name}`); // prints the string with name
}

console.log(user.greeting());
