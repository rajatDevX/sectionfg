const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
  const log=`${Date.now()}:new request received\n`;
  fs.appendFile("log.txt",log,(err)=>{
    if(err){
      console.log(err);
    }
  });
  res.end("Hello from server");
})
server.listen(8000,()=>{
    console.log(`sever is running on port 8000`);
})