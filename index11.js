const path=require('path');
console.log(__filename);
console.log(__dirname);
const path1=path.join(__dirname,"test","rajat","file.txt");
console.log(path1);
const path2=path.join("a","b","c");
console.log(path2);
const path3=path.resolve("a","b","c");
console.log(path3);
const path4=path.resolve("a","/b","c");
console.log(path4);
const path5=path.parse("/users/rajat/docs/file.txt");
console.log(path5);
const path6=path.format({
  dir:"/users/rajat/docs",
  base:"file.txt"
});
console.log(path6);