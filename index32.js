function fetchUser(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      resolve({id:1,name:"rajat"});
      },2000);
    });
}


async function getUser(){
    try{
        const user=await fetchUser();
        console.log(user);
    }
    catch(error){
        console.log(error);
    }
} 

getUser();