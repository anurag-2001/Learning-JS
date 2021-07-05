let http = require("http")          //We have to request the node.js... what we require and assign it to an variable 

let ourApp = http.createServer(function(req, res){   //here we are creating a server with a functon having two parameters request"req" & response"res"
    if(req.url == "/"){       //if local host has this url show the message printed below
        res.end("Welcome to my Home page")     //response.end and print the message"(....)"
    }

    if(req.url == "/about"){
        res.end("Thanks for knowing about us")
    }
res.end("Sorry We can't find the page you are looking for")
})
ourApp.listen(3000)   //listen to the variable in which we have created the server with the port number "3000"