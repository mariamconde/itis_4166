//statements are executed one by one
//it is not efficient and can cause blocking when there are operations that take a long time to complete
const fs = require('fs');

//reading the file processer waits until data is read out 
const data = fs.readFileSync('./file.txt', 'utf-8');

//prints out data
console.log(data);
//asynchronous progamming would allow the output Hello world to be printed while the fs is processing
console.log('Hello, world!');

//output
//This is a test!
//Hello world!