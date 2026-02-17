// fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.log(error));


// /id/1/name/rajat/email/rajat@.com
// "id":"1",
// "name":"rajat",
// "email":"rajat@.com"

async function getUser(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await res.json();
        console.log(data);

    }
    catch(error){
        console.log(error);

    }
}
getUser();