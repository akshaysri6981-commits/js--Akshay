// Primitive

// 7 types : Strings, Numbers, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1355566653323n


// Refrence (Non primitive)

// Array, Object, Function

const heros = ["Spiderman", "Ironman", "Thor"];        // Array
let myObj = {                                          // Object
    name: "Akshay",
    age: 21,
} 
const myFunction = function(){                         // Function
    console.log("Hello world");
}
console.log(typeof heros);