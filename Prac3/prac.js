let cell = document.querySelectorAll(".boxes")
for(i=0; i<cell.length; i++) {
    cell[i].addEventListener("click", mygame)
}
let dec = true
let count = 0
function mygame(){
    count = count + 1;
    let inshort = event.target.textContent
    if(inshort == " " && dec == true){
        event.target.textContent  = "X"
        dec = false
    } 
    else if(inshort == " " && dec == false){
        event.target.textContent  = "O"
        dec = true
    } 
    if(cell[0].textContent == "X" && cell[1].textContent == "X" && cell[2].textContent == "X" ||cell[3].textContent == "X" &&cell[4].textContent == "X" && cell[5].textContent == "X" ||cell[6].textContent == "X" && cell[7].textContent == "X" && cell[8].textContent == "X" || cell[0].textContent == "X" && cell[3].textContent == "X" && cell[6].textContent == "X" || cell[1].textContent == "X" && cell[4].textContent == "X" && cell[7].textContent == "X" || cell[2].textContent == "X" && cell[5].textContent == "X" && cell[8].textContent == "X" || cell[0].textContent == "X" && cell[4].textContent == "X" && cell[8].textContent == "X" || cell[2].textContent == "X" && cell[4].textContent == "X" && cell[6].textContent == "X")
    {
        let result = document.getElementById("result")
        result.innerHTML = "Player 1 WON"
    } 
    else if(cell[0].textContent == "O" && cell[1].textContent == "O" && cell[2].textContent == "O" ||cell[3].textContent == "O" &&cell[4].textContent == "O" && cell[5].textContent == "O" ||cell[6].textContent == "O" && cell[7].textContent == "O" && cell[8].textContent == "O" || cell[0].textContent == "O" && cell[3].textContent == "O" && cell[6].textContent == "O" || cell[1].textContent == "O" && cell[4].textContent == "O" && cell[7].textContent == "O" || cell[2].textContent == "O" && cell[5].textContent == "O" && cell[8].textContent == "O" || cell[0].textContent == "O" && cell[4].textContent == "O" && cell[8].textContent == "O" || cell[2].textContent == "O" && cell[4].textContent == "O" && cell[6].textContent == "O")
    {
        let result = document.getElementById("result")
        result.innerHTML = "Player 2 WON"
    }
    else if(count == 9){
        let result = document.getElementById("result")
        result.innerHTML = "DRAW"
    }
}
