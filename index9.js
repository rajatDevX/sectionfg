// const path=require('path');
// console.log(__filename);
// console.log(__dirname);
// const filePath=path.join(__dirname,'test','hello','world.txt');
// console.log(filePath);
// const path1=path.resolve('test','hello','world.txt');
// console.log(path1);
// const path2=path.join("a","b","c");
// const path3=path.resolve("a","b","c");
// const path4=path.resolve("a","/b","c");
// console.log(path2);
// console.log(path3);
// console.log(path4);
// const path5=path.parse("/users/rajat/docs/file.txt");
// console.log(path5);
// path.format({
//   dir: "/users/rajat/docs",
//   base: "file.txt"
// });

const fs=require("fs");
console.log("Start");

const data = fs.readFileSync("file2.txt", "utf-8");

for (let i = 0; i < 1e9; i++) {}

console.log("End");
