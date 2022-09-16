//local scope cannot be used in main.js without being exported
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
//arrow function
exports.add = (x, y) => x + y;
exports.sub = (x, y) => x - y;
exports.add = add;
exports.sub = subtract;

module.exports = {} //used to reference what is being exported 
module.exports.xyz = add;

exports = module.exports; //variables to reference the same thing
//function wrapper returns module.exports
//use exports as a shortcut for module.exports
exports.xyz = add;

module.exports = add;

console.log(module.exports);//add
console.log(exports);//{}