let countEl = document.getElementById("count-el");  /*I selected the specific element of HTML by it's ID
                                                      and stored it in the variable named countEl*/

let prevEl = document.getElementById("prev-el");   /*I selected the specific element of HTML by it's ID
                                                     and stored it in the variable named prevEl*/

count = 0;    //I initialized count to start from 0                            
function increment() {   // Initializing the function for increment button

    count += 1;   //(Incrementing count)...It could also be written as "Count = count + 1"

    countEl.innerText = count; /* "countE1" is the variable that I declared in the start and "innerText"
                                   is used to edit the content inside the selected portion of HTML...Here I am updating the value of count in HTML to the incremented count.
                                */
}
function save() {    // Initializing the function for save button

   let numstr = count + " - ";    /*Here I have declared another variable numstr in which I have stored
                                    the value of count and created a string "-"(just for crating gap)*/

   prevEl.innerHTML += numstr;    /*Here I am storing the value of numstr variable that I declared above in
                                    "previous entries" of HTML...{"innerHTML" is just an alternative of    innerText...just reffer MDN for more information}*/

   countEl.innerText = 0;       // I have done this to reset the value of count to 0 and print it in HTML

   count = 0;        //I have done this to again start the count from 0
}

 