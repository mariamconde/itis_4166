//to go one level above or another folder use two dots (../)
//if in the same folder use one dot (./)
const calculation = require('../calculation');
//if we move calculations to a different folder: 
const calculation = require('./temp/calculation');
const calculation = require('./calculation');
console.log(calculation); //{}


console.log(calculation.add(3, 5));
console.log(calculation.sub(10, 3));
