//Miscellaneous Information

// ***ANONYMOUS FUNCTION***:--> A function with no Name

document.addEventListener("click", function(){
    alert("You Clicked");
})   
//OUTPUT: we can click wherever on the webpage we will get an alert pop up.   



// ***ARROW FUNCTION***

document.addEventListener("click", () => {
    alert("You Clicked");
}) //In arrow function you don't need to write the "function" keyword.
//We don't even need to write the function name as well.

document.addEventListener("click", () => alert("You Clicked"))  //When the body of the function is on the same line...we can even erase the parenthisis "{}" from the function

let myNumbers = [10,50,2000]
let doubleNumbers = myNumbers.map(x => /*return*/ x * 2)   //In arrow function if the code is on the same line then we don't even need to write the "return" keyword.....also if there is a single parameter then we can erase the parenthisis "()" around the parameter

//NOTE: If Function body is there then return statement and paranthesis({..}) are required




// ***FUNCTION HOISTING***

cool()
function cool(){console.log("why so cool?")} 
//As the output we can see that the above fuction is still getting executed even if we have called the function before even declaring it...well this is because of Function Hoisting




// ***TEMPLATE LITERALS***

let myName = "Anurag"
console.log("Hello, my name is " + myName + " and the sky is blue");

//Well there is an alternative of this by using two back ticks `` known as template literals.

let myName = "Anurag"
console.log(`Hello,my name is ${myName} and the sky is blue.`) //by using ${....} we can do something dynamic. 

 




