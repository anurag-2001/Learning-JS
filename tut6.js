//Scope & Context

// ******SCOPE******
//Note: keyword "let" uses block lev scope whereas keyword "var" uses function lev scope
let myName = "Anurag";

function amazingFunction(){
    let myName = "Sharma"
    if (2+2 == 4){
        let myName="Anurag Sharma";
        console.log("inside the if statement", myName);
    }
    console.log("inside our function", myName);
}

amazingFunction();
console.log("in the global scope", myName);

// *****CONTEXT******

let john = {
    firstName: "John",
    lastName: "Doe",
    driveCar(){
        console.log(this.firstName + " " + this.lastName + " is driving a car.")   //The this keyword points towards the object that is executing the current function.
    }
}

john.driveCar();

function breathe(){
    console.log(this.firstName + " " + this.lastName + " just inhaled and exhaled.")
}

breathe.call(john); //here the "call" keyword will connect the "breathe function" directly to the object mentioned inside the parenthesis eg:("...")


