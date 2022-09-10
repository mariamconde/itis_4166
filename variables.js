// let, const, var

// keyword let: globalmor block scope
// can be acessed anywhere in the file
let a = 10; // global scope 
// only accessible within the bracket 
if(a > 1) {
    let b = 5; // block scope
    a = a * b;
}
console.log(a);
console.log(b);


// const: constants whose values cannot be changed
const a = 10; // a is a constant
a = 5;
console.log(a)
// let will allow you to change the value 
let a = 10; // a is a constant
a = 'hello';
console.log(a)


// var: global scope or function scope
// variable without any brackets is a global scope
var a = 10; // global scope
function double() {
    var b = a * 2; // function scope
    console.log(b)
}
console.log(a);
double();
console.log(b)

// difference between let and var
var a = 10; // global scope
if (a > 5) {
    var b = a * 2; // function scope
    console.log(b)
}
console.log(a)
console.log(b); // b has a global scope so can be accesed outside of block

// if we used let b would have block scope and outside of this block we cannot use a variable
var a = 10; // global scope
if (a > 5) {
    let b = a * 2; // function scope
    console.log(b)
}
console.log(a)
console.log(b); // b has a global scope so can be accesed outside of block


