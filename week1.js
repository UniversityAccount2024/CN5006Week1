// First JavaScript Program 
// Author: Nikita Robinson 
// Date: 4/10/2024
var prompt = require('prompt-sync')();

console.log("This is my first program")
console.log("Welcome, John. Your monthly salary is: £50,000")

// Creating constants 
const num1 = 5;
const num2 = 3;

// Adding constants together 
const sum = num1 + num2;

// Displaying sum of num 1 and 2 (const sum)
console.log ("The sum of " + num1 + " and " + num2 + " is: " + sum);

//---------------------------------------------------------------------
// **TASK 2**
// Program to check if number is positive, negative or 0
// Get user input 
const number = parseInt(prompt("Enter a number: "));   
// Check if number is greater than 0 
if (number > 0)  
{ 
    console.log("The number is positive.") 
} 

// check if number is 0 
else if (number == 0) 
{ 
    console.log("The number is zero") 
} 

// Otherwise, the number is less than 0 
else  
{ 
    console.log("The number is negative") 
} 

// ----------------------------------------------------------------
// **TASK 3** 
// Creating constants 
const number1 = parseInt(prompt("Enter a number: "));  
const number2 = parseInt(prompt("Enter a second number: "));  

// adding, subtracting, multiplying and dividing the constants
const addition = number1 + number2;
const subtract = number1 - number2;
const multiply = number1 * number2;
const divide = number1 / number2; 

//outputting the constants 
console.log ("Adding " + number1 + " and " + number2 + " is: " + addition);
console.log ("Subtracting " + number1 +  " and " + number2 + " is: " + subtract);
console.log ("Multiplying " + number1 + " and " + number2 + " is: " + multiply);
console.log ("Dividing " + number1 + " and " + number2 + " is: " + divide);




