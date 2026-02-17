const express=require("express");
const app=express();

app.set("view engine","ejs");
// middleware
// app.use((req,res,next)=>{
app.get("/",(req,res)=>{
  res.render("index",{name:"Rajat"});
});

app.listen(3000);