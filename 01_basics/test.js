// lets check what happens if we re-assign values to variables declared with different keywords (var, let & const)

var name = "Aditya"
let age = 21
const gender = "male"
email = "adityak.kumar78@gmail.com" // not explicitly declared the variable 
                                    //( automatically declared as a window object in non-strict mode)
let phoneNo // undefined!

//reassign!

name = "aditya kumar" // can be redeclared (var)
age = "22" // can be redeclared (let)
// gender = null // assignment to const variable (TypeError)
email = "test@telegmail.com" // can be redeclared (window.object)

console.table([name, age, gender, email, phoneNo])