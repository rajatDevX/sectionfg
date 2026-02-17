// const fs=require("fs");
// fs.writeFile("file.txt","WRite insdie this file",(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })
const fs = require("fs");

fs.writeFile("test.txt", "Hello World", (err) => {
  if (err) {
    console.log("❌ Write failed:", err.message);
    return;
  }

  console.log("✅ File written successfully");
});
