#!/usr/bin/env node
const userName=process.argv[2];
if(!userName){
    console.log("please provide a name");
    process.exit(1);
}

console.log(`hello ${userName} ✋`);


