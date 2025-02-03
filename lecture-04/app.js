// function in typescript
function add(a, b) {
    return a + b;
}
console.log(add(20, 50));
function greet(name) {
    console.log("Hi, ".concat(name));
}
greet('Vaibhav Chitransh');
var function2; // you can give type as function also
function2 = add; // function2 now contains the definition of add function
console.log(function2); // returns the definition of add function
console.log(function2(2, 3)); // return the value that is 5 in this case
var someFunction; // not a good practice to assign like this
someFunction = function (a, b) {
    return a * b;
};
console.log(someFunction(3, 7));
// Good practice for defining functions 
var function3; // now you are defining with clarity ki function3 will have 2 parameters with type as numbers and will return number
function3 = add;
console.log(function3(5, 9)); // gives output 14
// functions with callback
function twice(x) {
    console.log(2 * x);
}
function customFunc(a, b, cb) {
    var result = a + b;
    cb(result);
}
customFunc(5, 10, twice);
