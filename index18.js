const express=require("express");
const path=require("path");

const app=express();

app.use(express.urlencoded({extended:true}));

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"index18.html"));
// })

app.post("/submit",(req,res)=>{
    console.log(req.body);
    res.send(`user has name ${req.body.name};
    user has email ${req.body.email}`);

});

app.listen(3000,()=>{
    console.log(`server is running at address http://localhost:3000`);
});