const name = "Akshay"
const repoCount = "10"

//console.log(name + repoCount + "Value");

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String("Cric-ket-com");
//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase())
console.log(gameName.charAt(4));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "   akshay   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://akshay.com/akshay%20srivastava" 
console.log(url.replace('20%', '-'));

// WE CAN ALSO TAKE SOME INFO FROM STRINGS USING TEMPLATE LITERALS

console.log(url.includes('akshay'));

console.log(gameName.split('-'));