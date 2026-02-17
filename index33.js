function payment(){
    return new Promise((resolve,reject)=>{
        let balance=100;
        setTimeout(()=>{
            if(balance>=200){
                resolve("💰 payment succesful");
            }
            else{
                reject("❌ insufficient balance");
            }
        },1000);
    });
}

async function makePayment(){
    try{
        const result=await payment();
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
makePayment();