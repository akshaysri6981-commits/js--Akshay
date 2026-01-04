// singleton

// object literals

const mySym = Symbol("Key1") // make this symbol made work 


const JsUser = {
    name: "Akshay",
    "full name": "Akshay Srivastava",
    [mySym]: "myKey1",
    age: 21,
    location: "Jaipur",
    email: "akshay@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"] 
}

//
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

//

JsUser.email = "akshay@github.com"
//Object.freeze(JsUser)
JsUser.email = "akshay@microsoft.com"

//console.log(JsUser);

JsUser.greeting = function() {
      console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
      console.log('Hello JS user, $(this.name)');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());