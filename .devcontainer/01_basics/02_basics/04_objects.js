// const tinderUser = new Object()   // THIS IS SINGLE TERM OBJECT
const tinderUser = {} //  THIS IS NOT SINGLE TERM OBJECT

tinderUser.id = "123abc"
tinderUser.name = "Soni"
tinderUser.isLoggedIn = false



//console.log(tinderUser);


const regularUser = {
      email: "some@gmail.com",
      fullname: {
        userfullname: {

          firstname: "Akshay",
          lastname: "Srivastava"

        }
      }

}

//console.log(regularUser.fullname.userfullname.firstname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

//console.log(obj3);

const users = [
    {      
    },
    {
    },
    {
    },
]
users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
      coursename: "JavaScript",
      price: "999",
      courseInstructor: "Hitesh"

}
 
// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

// const navbar = () => {
// }

// navbar(company = "Hitesh")


// {
//     "name": "Akshay",
//     "coursename": "JavaScript",
//     "price": "Free"
// }

[
     {},
     {},
     {}

]
