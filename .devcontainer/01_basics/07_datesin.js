// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 23)
// let myCreatedDate = new Date(2025, 0, 23, 5, 3);
let myCreatedDate = new Date("2025-01-28")
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);

// To avoid this decimal output for this to find millisec.
// you have to take this formula (Math.floor/round o make this decimal output go away!)

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log((newDate));
console.log(newDate.getMonth());
console.log(newDate.getDay());

//'${newDate.getDate()} and the time'

newDate.toLocaleString('default', {
    weekday: "long",
})