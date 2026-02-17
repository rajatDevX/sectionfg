const fs=require("fs");
fs.appendFile("file3.txt","\n this is a new line",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file appended successfully");
})