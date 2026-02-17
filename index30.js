function orderFood(){
    let restaurantOpen=true
    return new Promise((resolve,reject=>{
      setTimeout(()=>{
        if(restaurantOpen){
            resolve("your food will be ready in 3 seconds");
        }
        else{
            reject("❌ restaurant closed");
        }

      },3000)

    }));
};


orderFood().then(message=>{console.log(message)}).catch(error=>console.log(error));