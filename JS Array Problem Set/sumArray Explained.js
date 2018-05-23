
function sumArray(fred) {
 // We're defining a function called 'sumArray' which takes an argument called 'fred'
 // That means that when we use (or 'call') this function, we'll 'pass in' a variable which we'll
 // refer to as 'fred'.
 
var total = 0; // We declare a variable called 'total' and set it equal to zero
 
fred.forEach(function(doris) {
     
     // OK, this is the interesting bit.
     // We tell the function that we want it to take 'fred' (the thing we passed in
     // when we called the 'sumArray' function) and we want it to work its way through
     // that array and do something with each element that it finds. We use the name 'doris'
     // to represent each element that is found in 'fred', so 'doris' will probably take
     // different values as we work our way through 'fred'.
     
    // We want to work our way through 'fred' and perform a function on each element that we find
     // Which function do we want it to perform? The function which we're about to define
     // That's right, we're going to define another function inside the function called 'sumArray'
     // and just to make things interesting, we're not going to give this 'inner' function
     // a name. It's what we call an 'anonymous' function. But that's OK, because we'd
     // only need to give it a name if we wanted to call it from outside 'sumArray', 
     // and we don't. We just want Javascript to get on and use it inside the 'sumArray' function.
 
 total = total + doris;
     // We tell this 'inner' function what we want it to do.
     // We want it to take the value of 'total' and add 'doris' to it.
     // Remember 'doris' is the name we're giving the elements in 'fred'.
     // Javascript knows that the values of 'doris' come from the array called 'fred'
     // simply from the syntax of that 'forEach' statement.
     // So Javascript works its way through 'fred', adding the elements it finds to 'total'
     // So 'total' will end up being the sum of all the values in the array called 'fred'. 
 
 }); // end of the 'fred.forEach' statement
 
 return total;
    // when the function called sumArray has done everything we told it to,
    // we need it to pass back the value of 'total'.
 
} // end of the definition of sumArray function
 
 
 
// make sure it works
var janet = [1,4,3,9,2];
var sumOfJanet = sumArray(janet);
console.log(sumOfJanet); // 19

