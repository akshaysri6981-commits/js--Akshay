
function sayMyName(){

    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("Y");

}

//sayMyName()

// function addTwoNumber(Number1, Number2){
//       // These are parameters (Number1, Number2)
//     console.log(Number1 + Number2);

    function addTwoNumber(Number1, Number2){

    // let result = Number1 + Number2
    // return result
    return Number1 + Number2   
}

addTwoNumber(3, "7")//    //  This is argument/values(null)

console.log("Result: ", result);
function loginUserMessage(username = "sam"){
   //if(!username){  This is another form used in this function (! this sign opposite like {False = True, True = False})
   if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return '$(username) just logged in'
}

// console.log(loginUserMessage("Akshay"))
//console.log(loginUserMessage("akshay"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 6000))

const user = {
    username: "akshay",
    price: 199
}

function handleObject(anyObject){
    console.log('username is ${anyObject.username} and price is ${anyObject.price}');
}    

//handleObject(user)
handleObject({
    username: "Akshay",
    price: 299
})    

const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray){
    return getArray[1]

}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));