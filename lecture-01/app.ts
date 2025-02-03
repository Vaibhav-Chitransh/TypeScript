function add(a, b) {
    if(typeof a === 'number' && typeof b === 'number') return a + b;  // dynamically check the type of a and b
    return Number(a) + Number(b);   // Or you can also write like this :-   return +a + +b;
    // It is not a good code because you have to write so many conditions to check the type of a and b
}

console.log(add("3", 4));   // string concatenation  (output: 34)
// JS is dynamically typed language (no typesafety)


// Using Typescript
// core types in Typescript :-  number, string, boolean

function addUsingTypeScript(a : number, b : number, printResult : boolean, text : string) {
    if(printResult) console.log(`${text}${a + b}`);
    else return a + b;
}

const printResult = true;
const text = 'The result is = ';

addUsingTypeScript(3, 100, printResult, text) // now it gives an error if you pass a other datatype instead of the specified because type is defined in function