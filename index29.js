const myPromise=new Promise((resolve,reject)=>{
    let success=true;
    setTimeout(()=>{
        if(success){  resolve("✅ kaam ho gya");

        }
        else{
            reject("❌ kaam nhi hua");
        }
      

    },3000)
});

myPromise.then(message=>{
    console.log(message);
}).catch(error=>{
    console.log(error);
});