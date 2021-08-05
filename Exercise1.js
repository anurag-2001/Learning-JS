//Accept the User name via Prompt and Greet by changing the first letter in Capital rest of the word should be small.

let myName = prompt("Please enter your name");
let firstLetter = myName.slice(0,1);     //selecting the first letter by SLICE
let rest = myName.slice(1,myName.length);  
alert("Welcome "+ firstLetter.toUpperCase() + rest.toLowerCase());
