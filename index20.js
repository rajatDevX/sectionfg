const express=require("express");
const app=express();
// middleware
// app.use((req,res,next)=>{
   
//     console.log(`Requested URL: ${req.url}`);
//      console.log("this will run for every request");
//     next();
// });
app.use(express.urlencoded({extended:true})); // to parse form data
app.get("/",(req,res)=>{
   res.send("Hello world !!🌍");
});

// middleware
// app.use((req,res,next)=>{
//     res.status(404).send(`404 page not found error`);
// })
app.post("/submit",(req,res)=>{
    const {name,email,marks}=req.body;
    console.log(req.body);
    res.send(`user has name ${name} and email ${email} and marks ${marks}`);
});


app.listen(3000,()=>{
    console.log(`server is running at address http://localhost:3000`);
});