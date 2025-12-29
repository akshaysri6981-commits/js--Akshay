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
console.log(typeof anotherId);

// **********************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myRealName = "AkshaySrivastava"

let anotherName = "Akki"

console.log(myRealName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.email = "akshay@google.com"

console.log(userOne.email);
console.log(userTwo.email);
// "Both will show the updated email id as both are reffering to same object in the heap memory"
   
