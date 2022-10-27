//OBJECTS

let cat1 = {
    name: "Sparky",
    age: 12,
    meow(){  //WE can also declare a function inside an OBJECT and then the object is ???
        alert("Meeooow");
    }
}

cat.meow(2);  //This is the way how we should call a function inside an object

//We can also add another object inside an existing object
// ***EXAMPLE*** //

let cat = {
    name: "Sparky",
    age: 12,
    favFood:{
        name1: "fish",
        name2: "meat"
    }
}

cat.favFood.name2;  //This is the way how we should another object inside existing object