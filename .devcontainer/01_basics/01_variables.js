const accountId = 144567
let accountEmail = "akshay@google.com"
var acccountPassword = "12345"
accountCity = "Lucknow"
let accountState;
// accountId = 2 // not allowed

accountEmail = "hc@ch.com"
acccountPassword = "23464433"
accountCity = "gurgaon"
 
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, acccountPassword, accountCity, accountState]);