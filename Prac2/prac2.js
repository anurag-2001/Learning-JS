let myForm = document.getElementById("myForm");
let myInput = document.getElementById("myInput");
let myList = document.getElementById("myList");

myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createItem(myInput.value);
})

function createItem(x){
    let ourHTML = `<li>${x} <button onclick = "deleteItem(this)">Delete</button> </li> <br>`
    myList.insertAdjacentHTML("beforeend", ourHTML);
    myInput.value = "";
    myInput.focus();
}

function deleteItem(deleteMe){
    deleteMe.parentElement.remove();
}
