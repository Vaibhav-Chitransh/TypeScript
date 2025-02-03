// function in typescript

function add(a : number, b : number) : number {   // giving return type of function
    return a + b;
}

console.log(add(20, 50));

function greet(name : string) : void {   // function is not returning anything so void 
    console.log(`Hi, ${name}`);
}

greet('Vaibhav Chitransh');

let function2 : Function;   // you can give type as function also
function2 = add;    // function2 now contains the definition of add function

console.log(function2);   // returns the definition of add function
console.log(function2(2, 3));   // return the value that is 5 in this case

let someFunction : Function;   // not a good practice to assign like this
someFunction = function(a : number, b : number) : number {
    return a * b;
}

console.log(someFunction(3, 7));


// Good practice for defining functions 

let function3 : (a : number, b : number) => number;   // now you are defining with clarity ki function3 will have 2 parameters with type as numbers and will return number
function3 = add;

console.log(function3(5, 9));   // gives output 14


// function with callback

function twice(x : number) : void {
    console.log(2 * x);
}

function customFunc(a : number, b : number, cb : (a : number) => void) : void {
    let result = a + b;
    cb(result);
}

customFunc(5, 10, twice);