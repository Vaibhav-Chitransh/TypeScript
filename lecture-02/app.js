// Objects in javascript
var person1 = {
    name: 'Vaibhav Chitransh',
    age: 21,
    skills: ['c++', 'javascript', 'react']
};
console.log(person1.skills); // It gives error on accessing some property which is not defined in object like If I write person1.lastname (gives error in ts) but it doesn't give error while using js
// Objects in typescript
var person2 = {
    name: 'Tyler Durden',
    age: 28,
    skills: ['fighting', 'boxing'],
    contact: {
        address: 'New York',
        phone: 5845654554
    },
    product: [1000, 'Macbook'],
};
console.log(person2);
var favProgrammingLang; // can define typesafety in any variable also
favProgrammingLang = ['cpp', 'typescript'];
console.log(favProgrammingLang);
// If you want to make an array having different datatypes
var something; // loosing the power of typescript that is typesafety (bhai any hi likhna thaa to js hi likh le fir)   ->   so avoid using any when using typescript
something = ['vaibhav', true, 21];
console.log(something);
// Enum in Typescript
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["editor"] = 1] = "editor";
    Role[Role["viewer"] = 2] = "viewer";
})(Role || (Role = {}));
;
console.log(Role.editor); // outputs the index of that entity in enum
