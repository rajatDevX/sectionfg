// console.log("start");
// const time1=Date.now();
// while(Date.now()-time1<3000){

// // } sync javascript
// // setTimeout(()=>{console.log("Hello world")},3000);//async javaScript
// }
// console.log("end");
function greet(name){
    console.log(`Hello world ${name} here`);
}
// setInterval(greet,3000,"raj")

const eventEmitter=require('events');
const emitter=new eventEmitter();
emitter.on('greet',greet);
emitter.emit('greet','raj');