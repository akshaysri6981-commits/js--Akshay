const user = {
    username: "Akshay",
    price: 999,

    welcomeMessage: function() {
        console.log(' ${this.username} , welcome to website');
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Aditya"
// user.welcomeMessage()

function chai(){
    let username = "Akshay"
    console.log(this);
}
chai()

console.log(addTwo(3, 4))


//const chai = function() {
//  let username = "Akshay"
//  console.log(this.username);
 
//} 


// function chai(){

//     let username = "Akshay"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "Akshay"
    console.log(this);
}

//chai()

// ******************* ARROW FUNCTION ********************

// const addTwo = (num1, num2) => {
//     //     return num1 + num2

// }
//     
//    

                   //(**** this function is called emplicit return****)
//const addTwo = (num1, num2) =>  num1 + num2
const addTwo = (num1, num2) => ({username: "Akshay"})
             // if we use curly parenthesis then we have to give return 
             // and then we use simple bracket then we then this run without any return                                     

console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function () {})

//myArray.forEach(function () {})
// this is arrow functions 
// myArrow.forEach(() => {})
// myArrow.forEach(() => ())
// this is some syntax whch we can use

