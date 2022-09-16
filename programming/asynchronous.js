//avoid blocking in the synchronous example by using asynchronous programming
//add a function as an argument to slow operation
//call back fuunction: is called when the slow operation finishes
//other way is promises

(err, result) => {
    if (err) {
        //err handling code
    } else {
        //success handling code
    }
}

const fs = require('fs');
fs.readFileSync('./file.txt', 'utf-8', (err, data) => { //asynchronous operation
    if (err) {
        console.log(err);
    } else {
        console.log(data);//part of the callback function
    }
});
console.log('Hello, world!');//can happen before the file is finish being read

//output
//Hello world!
//This is a test!