// Objects in javascript

const person1 = {
    name: 'Vaibhav Chitransh',
    age: 21,
    skills: ['c++', 'javascript', 'react']
}

console.log(person1.skills);  // It gives error on accessing some property which is not defined in object like If I write person1.lastname (gives error in ts) but it doesn't give error while using js


// Objects in typescript

const person2 : {
    name: string;
    age: number;
    skills: string[];    // defining array type like this
    contact: {     // can use nested objects like this  (with typesafety)
        address: string;
        phone: number;
    };
    product: [number, string]  // can define tuple(fixed size array) like this  (1st place number and second place string)
} = {
    name: 'Tyler Durden',
    age: 28,
    skills: ['fighting', 'boxing'],
    contact : {
        address: 'New York',
        phone: 5845654554
    },
    product: [1000, 'Macbook'],
}

console.log(person2);

let favProgrammingLang : string[];    // can define typesafety in any variable also
favProgrammingLang = ['cpp', 'typescript'];

console.log(favProgrammingLang);

// If you want to make an array having different datatypes

let something : any[];   // loosing the power of typescript that is typesafety (bhai any hi likhna thaa to js hi likh le fir)   ->   so avoid using any when using typescript
something = ['vaibhav', true, 21];

console.log(something);


// Enum in Typescript

enum Role {admin, editor, viewer};
console.log(Role.editor);   // outputs the index of that entity in enum