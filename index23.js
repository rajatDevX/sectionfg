const { name } = require("ejs");
const express=require("express");
const app=express();
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index",{name:"Rajat"});

});

app.get("/user",(req,res)=>{
  const user={
    name:"rajat",
    age:22,
    skills:["node js","html","css"]

  }
  res.render("user",{user});
});
app.listen(3000);
