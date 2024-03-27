// Immediately invoked function execution

// we wrapp the function in ( fn() ) and use () just after the function to execute it immediately
// It is used to remove pollution of global variables

// named iife
( function doThis() {
    console.log(`Backend Started ...`);
}) (); // if we have to write more than one iife's we should seperate each function with a semi-colon

// arrow function (unnamed iife)

( (/* argument */) => {
    console.log(`DB Connected ...`);
}) ( /* values */ )