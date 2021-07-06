let express = require("express")
let ourApp = express()

ourApp.use(express.urlencoded({extended: false}))     //This is just a boilerplate code..nothing educational...it is used beacuse it is enabling the feature of express so that the users input is easily accessible from request.body object.


ourApp.get('/', function(req, res){       /*"get" request occurs when user requests via URL
                                            "POST" request occurs when user request via input*/
    res.send(`
    <form action = "/answer" method="POST">  
        <p>What color is the sky on a clear and sunny day?</p>
        <input name ="skyColor" autocomplete="off">
        <button>Submit Answer</button>
    </form>
    `)
})
ourApp.post('/answer', function(req, res){
    if(req.body.skyColor.toUpperCase() == "BLUE") {
        res.send(`
        <p>Congrats that is the corret answer!</p>
        <a href="/">Back to homepage </a>
        `)
    } else {
        res.send(`
        <p>Sorry!! Its the wrong answer</p>
        <a href="/">Back to homepage </a>
        `)
    }
})
ourApp.listen(3000)
