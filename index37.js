const fast=new Promise(resolve=>
    setTimeout(()=>{
        resolve("fast Promise🚀");
    },2000)
);

const slow=new Promise(resolve=>
    setTimeout(()=>{
        resolve("slow Promise🐢");
    },3000)
);

Promise.race([fast,slow]).then(result=>console.log(result));