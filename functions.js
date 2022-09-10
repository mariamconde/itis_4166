//A higher order function is a function that return a function or takes a function as an argument
//return a function
function greaterThan(a) {
    return function(b) {
        return b > a;
    }

    // or arrow function
    // return greaterThan(a) => {
    // return b => b > a;
    // }
}
const greaterThan10 = greaterThan(10);
const greaterThan20 = greaterThan(20);
// greaterThan10 = function(b {return b > 10}
//console.log(greaterThan10);
console.log(greaterThan10(5)); // false
console.log(greaterThan20(15));
console.log(greaterThan20(30));

//Takes a function as an argument
const nums = [3, 10, 7, 25, -5, 8];
nums.sort(comp);
// or (keyword function)
nums.sort(function(a,b){ return b - a; });
// or (arrow function)
nums.sort((a,b) => b - a);
function comp(a,b){
    return b - a;
}
console.log(nums)
