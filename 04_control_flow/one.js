// if

// if(false) {

// }

// if(true) {

// }

// how does true or false get evaluated

// if(2 == 2) {
//     //true
//     //code gets executed
// }

// const isUserLoggedIn = true

const temperature = 30

// if(temperature < 50) console.log(`less than 50`);

// else console.log(`temperature is greater than 50`);

// if(2 != 3) console.log("code executed");

// else console.log("false");
// < , > , <=, =>, !=, ==, === (comparison operators)

const score = 200;

if(score > 100) {
    const power = 'fly'
    // console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`); out of scope

//short-hand notation
// const balance = 1000
// if(balance > 500) console.log('test'); // (not a good practice)

// else if(balance < 900) console.log("less than 900");

// else console.log('more than 1000');

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allow to shop");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}