const fs=require("fs");
fs.writeFile("file3.txt","I am leaning advance modules of nodejs.",(err)=>{
    if(err){
        console.log("this is the error comming in writing this file ==>>>",err.message);
        return;
    }
    console.log("file written successfully");
});
    