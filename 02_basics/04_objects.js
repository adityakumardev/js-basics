// const tinderUser = new Object () => singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Tarun"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regUser = {
    email: "abc@gmail.com",
    fullname: {
        user_name: {
            first_name: "Aditya",
            last_name: "Kumar"
        }
    }
}

// console.log(regUser.fullname?.user_name.first_name);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} // object concatenation using spread operator
// console.log(obj3);

// accessing keys and values as array

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(valueOf(tinderUser.name));

// object destructuring

const schoolInfo = {
    school_name: "Delhi Public School",
    school_code: 123,
    school_email: "dps@gmail.com"
}

const {school_name : name, school_code : code, school_email : email} = schoolInfo // destructor

console.log(name.toUpperCase());
console.log(Number(code));
console.log(email.toLowerCase());