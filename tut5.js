// Returning Vs Mutating
// Mutating: Changing or Modifying

let pets = [
    {name:"Meow", species:"Cat", age: 2}
    {name:"Bark", species:"dog", age: 3}
    {name:"Purrsloud", species:"Cat", age: 8}
]

console.log(pets.push({name:"Puppy", species:"dog", age: 1}))

let ourTest = pets.map(nameOnly)   //array.map:--> Simply returns new value in an arrary 

function nameOnly(x) {
    return x.name
}

console.log(ourTest);

let dogs = pets.map(onlyDogs)

function onlyDogs(x){
    return x.species == "dog"     //true or false
}

console.log(dogs)

function onlyBabies(x) {
    return x.age < 3
}

let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly)  //We can filter the filtered array(nested)...similarly we can also map them too

console.log(babyDogNames)
