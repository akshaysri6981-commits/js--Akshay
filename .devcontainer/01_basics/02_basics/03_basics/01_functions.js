
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
console.log(loginUserMessage())
