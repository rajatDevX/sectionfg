const http=require("http");
function handler(req,res){
    if(req.url==="/"){
        res.end(`This is a home page`);
    }
    else if(req.url==="/about"){
        res.end(`This is an about page`);
    }
    else if(req.url==="/contact"){
        res.end(`This is a contact page`);
    }
    else if(req.url==="/detail"){
        res.end("This is a detail page");
    }
    else{
        res.end("404 error page not found");
    }
}
const server=http.createServer(handler);

server.listen(8000,()=>{
    console.log("server is running at address http://localhost:8000");
});
