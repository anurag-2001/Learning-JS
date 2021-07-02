//Higher Order Function

function Createmultiplier(multiplier) {
    return function(x){
        return x * multiplier;
    }
}
 let doubleMe = createMultiplier(2);
 let tripleMe = createMultiplier(3);
 let quadrupleMe = createMultiplier(4);

 document.write(tripleMe(10));  //Output: 30


 let myColors = ['red','orange','yellow']

 myColors.forEach(saySomethingNice)

 function saySomethingNice(color){
     document.write("The color" + color + "is a great color.<br>")
 }