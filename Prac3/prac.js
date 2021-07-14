let cell = document.querySelectorAll(".boxes")
for(i=0; i<cell.length; i++) {
    cell[i].addEventListener("click", mygame)
}
let dec = true
function mygame(){
    let inshort = event.target.textContent
    if(inshort == " " && dec == true){
        event.target.textContent  = "X"
        dec = false
    } 
    else if(inshort == " " && dec == false){
        event.target.textContent  = "O"
        dec = true
    } 
}
