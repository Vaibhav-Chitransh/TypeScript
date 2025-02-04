"use strict";
// so what is the difference between the interface and class -> 
// interface just defines the type of entity or object and also in interface there is no initialization just like class so the variables and functions are not initialized (it just tells how the object will look like)
let user;
user = {
    name: 'Vaibhav Chitransh',
    age: 21,
    greet(text) {
        console.log(`Hello, ${text}`);
    }
};
console.log(user);
user.greet('Bruce');
class Greetings {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(`${text} ${this.name}`);
    }
}
let user1 = new Greetings('Vaibhav');
user1.greet('Hello, ');
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(3, 6));
let newUser;
newUser = {
    name: 'Tyler Durden',
};
console.log(newUser);
