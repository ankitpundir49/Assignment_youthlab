

let express=require("express");

const { file } = require("react-dom");
let app=express();

app.use(express.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,POST,OPTIONS,PUT,PATCH,DELETE,HEAD"
    );
    res.header(
        "Access-Control-Allow-Header",
        "Origin,X-Requested-with,Content-Type,Accept,Authorization"
    );
    next();
});


const port=2410;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`))


app.get("/api/greet",function(req,res){
    let name=req.query.name;
    if(name){
        return res.json({
            message:`Hello, ${name}! Welcome to Younglabs.`
        })
    }
    else if(!name || name==="")
        return res.json({
            message:"Name is required."
        })
    
    
})

const cors=require("cors");
app.use(cors());