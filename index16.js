const express=require("express");
const app=express();

// http://localhost:3000/search?name=vaibhav&branch=ECE

app.get("/user/:id",(req,res)=>{
    const userId=req.params.id;
    res.send(`user id is ${userId}`);
});

app.get("/search",(req,res)=>{ 
    console.log(req.query);
    res.send(`my name is ${req.query.name} and my branch is ${req.query.branch}`);
 });

app.listen(3000,()=>{
    console.log(`server is running at address http://localhost:3000/search?name=vaibhav&branch=ECE`);
});