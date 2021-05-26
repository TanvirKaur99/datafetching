var express =require("express");
var bodyparser=require('body-parser');




var app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static('/views'));


app.get('/',(req,res)=>{

    res.sendFile(__dirname+"/views/form.html");
})



//Body parser
app.post('/getData',(res,req)=>{

var name=req.body.username;
var email=req.body.email;
var contact=req.body.contact;
var location=req.body.location;

res.send("Name:" +name+",Email:" +email+"contact:" +contact+"location:"+location)

})
app.listen(3000,(err)=>{
    if(err){

        console.log(err)
    }
    else{
        console.log("server is running at http://localhost:3000")
    }

})
