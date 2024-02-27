function addTwoNumbers (a , b) {
    return a + b; // returns addition of two numbers
}

let a = 10, b = 20
// console.log(`${a} + ${b} =`, addTwoNumbers(a, b));

/*------------------------------------------------*/

function userLoginInfo(username) {
    if(!username) { // if username === undefined
        return `please enter a username`
    }

    return `${username} just logged in`
}

// console.log(userLoginInfo("Aditya"));