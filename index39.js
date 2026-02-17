console.log(process.argv);
const userName=process.argv[2];

if(!userName){
    console.log("Please provide a name as an argument");
    process.exit(1);
}
else{
    console.log(`Hello ${userName}, welcome to Node.js!`);
}


// node index39.js deva