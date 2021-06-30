//Functions
function greet(x, y){  //We can use multiple parameters in a function
    alert("Hey my name is " + x +" & my fav color is " + y);
}
greet("Anurag", "red");

function triple(x){
    return 3 * x;
}
let num = triple(15);  //We can also assign the function to an variable
alert(num);