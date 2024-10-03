// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct.
// Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// DESCRIBE the code as it would be run, then let us know what the OUTCOME of the
// console.log statement will be.


// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. If it is,
// 'yes' will be console.logged.
// OUTCOME:
// 'yes' is what is logged.

// CODE:
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// 1.
// DESCRIPTION
// We create a variable for 'name' and have set the value to 'Dane'.
// Then we created a conditional that works as follows:
// If the value of the variable 'name' is actually an exact match for 'Mary', then the console.log will display 'Hi, Mary!'
// If the value of the variable 'name' is any other value aside from 'Mary, then the console.log will display 'How do you do?'
// Since we have already set the value to 'Dane', we know our result will land in the second category since it is a different value than 'Mary'.
//
// OUTCOME:
// console.log = 'How do you do?'

// CODE:
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 2.
// DESCRIPTION:
// First we create a variable called 'secret', leaving its value undefined (to be defined by the variable).
// Then a second variable is create, 'code', and it has  value set of '123'. 
// The conidtional is then made to define the value of 'secret' depending on what is put in.
// The first part of the conditional is that if the code is an exact match of '123', the secret's value will be 'super' and the code will be multiplied by 2.
// The second part says that if the code's value is greater than 250, then the value of 'secret' will be 'duper'.
//
// OUTCOME:
// console.log = 'super'

// CODE:
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 3.
// DESCRIPTION
// The first variable is created (isStudent) and given the boolean value 'True'.
// The second variable is created (age) and given the value '34'.
// The third variable is created (zip) and given the value '55407'.
// Then the conditional is made with 4 possible options that create different outcomes. They go as follows:
// If the isStudent value is true, AND the zip code is greater than 80000, then the console.log will be 'You're a student on the West Coast!'
// If the isStudent value is false OR the age is less than 30, then the console.log will be 'What are your hobbies?'
// If the isStudent value is true, the console.log will be 'Welcome to Prime!'
// And finally, if the values don't fall into any of those, then the console.log will be 'How about the weather?'
//
// OUTCOME:
// console.log = 'Welcome to Prime!'

// CODE:
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

// CODE:
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 4. 
// DESCRIPTION:
// We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// CODE:
/*
//FIX: description says colorONe is 'blue' and colorTwo is 'red'. Switch these two values to match the description.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX: this will only change colorOne to purple, there should be (colorTwo = 'purple') added so that both colors are turned to purple.
if (mix === true) {
  colorOne = 'purple';
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 5.
// DESCRIPTION:
// We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// CODE:
/*
let temp = 40;
const time = 4;

FIX: the description uses an 'and' statement, so if the temp is greater than 39 AND if the time is equal to or greater than 4. Replace (|| (which mean 'or')) with (&&)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 6.
// DESCRIPTION:
// We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// CODE:
/*
let age = 21;
const minAge = 21;

// FIX: This is saying that if the minAge is less than age of the person, they can't enter, but we mean the opposite. And if the age equals the minAge, then they would be able to enter. 
// so change (minAge <= age) for (age < minAge), that way if the age is under 21, the result is 'no entry'.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
