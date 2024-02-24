const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // it will merge the 2nd array as a single element without spreading

console.log(marvel_heros)
console.log(marvel_heros[3][1])

const allHeros = marvel_heros.concat(dc_heros) // this will concat the array after spreading
console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros] // another way of merging arrays
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

console.log(Array.isArray("aditya")) // checks if the value is an array
console.log(Array.from("aditya")) // creates an array from object
console.log(Array.from({ name: "aditya" })) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // returns a new array from a set of elements