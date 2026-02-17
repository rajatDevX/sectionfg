const express=require("express");
const app=express();
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/post" method="POST">
        <input type="text" name="title" placeholder="Title">
        <textarea name="content" placeholder="Content"></textarea>
        <button type="submit">Submit</button>
    </form>
</body>
</html>`);
})

app.post("/post",(req,res)=>{
    console.log(req.body);
    res.send(`this is my post request`);
})
app.listen(3000);