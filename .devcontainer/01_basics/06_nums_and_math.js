const score = 400
//console.log(score);

const balance = new Number(100);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 43.54556
//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('IN-en'));

// YOU CAN CHANGE INDIAN SYSTEM TO INTERN. SYSTEM NY ('IN-en');


//************************ Maths ****************************//

console.log(Math);
console.log(Math.abs(4));

// In this abs func. this can change (-)negetive number into (+)positive 

// console.log(Math.round(4.6))
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,6,2,8,9));
// console.log(Math.max(4,6,2,8,9));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)
// THIS WILL GIVE RANDOM NUMBER BETWEEN 10 TO 20
// FORMULA FOR RANDOM NUMBER BETWEEN ANY TWO NUMBERS
//Math.floor(Math.random()*(max - min + 1)) + min
// 