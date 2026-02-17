const fail1=new Promise((_,reject)=>{
   setTimeout(()=>{
     reject("fail 1")
   },1000);
});

const success1 = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("ye success he");
  }, 1000);
});

const fail2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("fail 2");
  }, 1000);
});

Promise.any([fail1,success1,fail2]).then(result=>console.log(result)).catch(error=>console.log(error));

