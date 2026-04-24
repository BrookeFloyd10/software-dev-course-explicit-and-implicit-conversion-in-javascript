/*


Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
 - Run the script to observe unexpected outputs.
 - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
 - Annotate the code with comments explaining why the fix works.


Part 2: Write Your Own Examples
Write their own code that demonstrates:
 - One example of implicit type conversion.
 - One example of explicit type conversion.


 *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.


*/




let result = "5" - 2;
console.log("The result is: " + result);


let isValid = Boolean("false");
if (isValid) {
   console.log("\nThis is valid!\n");
}
// The use of boolean () converts the string into a boolean value
// and since the string is not empty the value is truthy making isValid, valid
// as a result the console log runs


let age = Number("25"); // This converts "25" from a string to 25 a number so it will be added instead of concatenated
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
console.log("\nBefore conversion age is a string: ''25'' " );
console.log("After conversion age is a number: " + age);

// Implicit Type Conversion
let olderSister = 38; // value is number
let youngerSister = "15"; // value is a string
let olderSisterDifference = olderSister - age; // subtracts a number from a number
let youngerSisterDifference = age - youngerSister; // demonstrates how JS will implicitly turn a string into a number when using the (-) operator
console.log("\nI have 2 sisters. My big sister is " + olderSisterDifference + " years older, and my little sister is " + youngerSisterDifference + " years younger than me.");


// Explicit Type Conversion
let dogs = 2;
let cats = 3;
let reptiles = Number(null) // Number() converts null into a number so it shows up as 0 instead of a string in the final result
console.log("I love my pets, I have " + dogs + " dogs " + cats + " cats and " + reptiles + " reptiles.");
console.log("\nBefore conversion reptiles = : " + null);
console.log("After conversion reptiles = : " + reptiles);