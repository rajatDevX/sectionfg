function orderFood(){
    return new Promise((resolve,reject)=>{
        let resturantOpen=true;
        if(resturantOpen){
            setTimeout(()=>{
                resolve("your food will be ready soon 🍕");
            },3000);
        }
        else{
            reject("sorry ! can not serve your food today 😞");
        }
    })
}
orderFood().then(message=>console.log(message)).catch(error=>console.log(error));