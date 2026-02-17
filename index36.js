const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise done 1")
    },1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise done 2");
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise done 3");
  }, 2000);
});

Promise.all([p1,p2,p3]).then(results=>console.log(results)).catch(error=>console.log(error));