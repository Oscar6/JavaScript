// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));
 
// If age is odd
//(not evenly divisible by two)
if(age % 2 !== 0) {
 console.log("Your age is odd!");
}
 
// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}
 
// If age is 21  
if (age < 18) {
	console.log("Too young. GO HOME!");
} else if (age <= 20) {
	console.log("You get to hang out with X's on your hands.");
} else if (age >=21) {
	console.log("Party on Wayne!");
} 
 
