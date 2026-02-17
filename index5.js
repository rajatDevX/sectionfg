const fs=require("fs");
fs.readFile("fil2.txt","utf-8",(err,data)=>{
    if(err){
        console.log("this is the error comming in reading this file ==>>>",err.message);
        return;
    }
    console.log(data);
})