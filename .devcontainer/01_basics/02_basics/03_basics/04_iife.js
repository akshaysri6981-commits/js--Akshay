// Immediately Invoked Function Expressions (IIFE)



(function chai() {
    console.log('DB CONNECTED');
}) ();
 
( (name) => {
    //THEIR IS NO NAME SO IT IS CALLED SIMPLE IIFE
    console.log('DB CONNECTED TWO $ (name) ');
}) ('Akshay')