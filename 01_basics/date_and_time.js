// Dates

let myDate = new Date()

// date methods
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())

// to declare a specific date and time

// let myCreatedDate = new Date(2024, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()); // 1/23/2024, 5:03:00 AM

// let myNewDate = new Date("02-20-2024")
// console.log(myNewDate.toLocaleString()) // 2/20/2024 (mm-dd-yy format)

// let myTimeStamp = Date.now()

// console.log(myTimeStamp)
console.log(Math.floor(Date.now()/1000)) // to convert to milliseconds

let newDate = new Date()
// console.log(newDate.getDay())
// console.log(newDate.getMonth() + 1);

console.log(`The Day is ${newDate.getDay()} and the time is ${newDate.getTime()}`)

// internationalisation

newDate.toLocaleString('default', {
    weekday: "long",
})