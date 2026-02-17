const express=require("express");
const app=express();

// if(req.url==="/" && req.method==="GET")

app.get("/",(req,res)=>{
    res.send("this is my home page 1");
});

app.get("/about",(req,res)=>{
    res.send("this is about page 1");
})
app.use((req,res)=>{
    res.status(404).send("page not found 1");
})

app.listen(3000,()=>{
    console.log(`server is running at address http://localhost:3000`);
});