const express=require("express");
const app=express();

app.use((req,res,next)=>{
    console.log(`requested url: ${req.url}`);
    next();
})
app.get("/",()=>{
    res.send(`Hello world this will run after the middleware`);
});

app.listen(3000);