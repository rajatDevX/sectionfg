const express=require("express");

const app=express();

app.use("/admin",(req,res,next)=>{
    console.log(`this is admin middleware ✅`);
    next();
});

app.get("/admin",(req,res)=>{
  res.send(`this is my admin page`);
});
app.get("/admin/dashboard",(req,res)=>{
    res.send(`this is admin dashboard page`);
})

app.use("/student",(req,res,next)=>{
    console.log(`this is student middleware ✅`);
    next();
});
app.get("/student",(req,res)=>{
    res.send(`this is student page`);
})
app.get("/student/detail",(req,res)=>{
    res.send("this is student detail page");
})

app.listen(3000);