// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(para1, para2, cb){
  return cb(para1, para2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add (num1, num2){
  console.log(num1 + num2) ;
}

function multiply(num1, num2){
  console.log(num1 * num2) ;
}

function greeting(first, last){
  console.log(`Hello ${first} ${last}, nice to meet you!`) ;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


const external = "I'm outside the function"; // this is a global scope varible

function myFunction() {                             // this is a outer function    
  console.log(external);                            // this function can only see what variables are declear inside his scope, and global scope
  const internal = "Hello! I'm inside myFunction!"; // this function can not see any variable protected by other functions, even the given function was decleared inside of it.

  function nestedFunction() {                       // this is a inner function,
    console.log(internal);                          // this function can see varibles exist ourside of it's scope
  };                                                // this is the definition of a closure
  nestedFunction();                                 // closure behavior was inherited from the lexical enviroment.  
}
myFunction();