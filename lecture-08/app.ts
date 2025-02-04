const fruits : Array<string> = [];   // this is generics (one type is connected to another type like in this array is connected to string type that means fruits is an array that contains strings)

// but bro it can be done by just simply writing const fruits : string[] = [];  (so what's the problem ?)

fruits.push('Mango');
fruits.push('Apple');
fruits.push('Litchi');

console.log(fruits);

type Person = {
    name : string;
    age : number;
}

const boy1 : Person = {
    name : 'Rahul',
    age : 17
}

const boy2 : Person = {
    name : 'Vinod',
    age : 15
}

const user : Array<Person> = [];   // array of objects can be created like this
user.push(boy1);
user.push(boy2);

console.log(user);

function merge<T, U, S>(objA : T, objB : U, objC : S) {
    return {...objA, ... objB, ...objC};
}

const res = merge({name: 'Vaibhav'}, {age : 21}, {role: 'student'});
console.log(res);

// Generic Constraints

function createObject<T, U extends number, S extends boolean>(key : T, value : U, isActive : S) {
    return {key, value, isActive};
}

const obj = createObject({name : 'vaibhav'}, 21, true);  // T me koi constraint nhi hai ko kuch bhi daal sakta hu
console.log(obj);

// Generic with interface

interface Box<T> {   // yaha pr T kuch bhi ho sakta hai string, boolean, number, object or anything
    value: T
}

const numberBox : Box<number> = {value: 23};
console.log(numberBox);

const stringBox : Box<string> = {value: 'dummy'};
console.log(stringBox);

interface User<T = string> {   // this means by default the T is string if no value is provided
    data : T,
    status : number
}

const response : User = {data: 'Success', status: 200};   // by default data is string
console.log(response);

const jsonResponse : User<object> = {data : {name: 'vaibhav', age: 21}, status: 201};  // default value gets overwrite by object
console.log(jsonResponse);


// Generics with class

class Container<T> {
    private content : T;
    constructor(content : T) {
        this.content = content;
    }

    getContent() : T {
        return this.content;
    }
}

const stringContainer = new Container<string>('Hello');
console.log(stringContainer.getContent());

const numberContainer = new Container<number>(23);
console.log(numberContainer.getContent());


// Generics with Array

function getFirst<T>(x : T[]) : T {
    return x[0];
}

const firstNumber = getFirst([1, 2, 3, 4, 5]);
const firstString = getFirst(['a', 'b', 'c']);

console.log(firstNumber);
console.log(firstString);

// Generic with keyof

function getProperty<T extends object, K extends keyof T>(obj : T, key : K) : T[K] {   // typesafe code (works with empty object as well)
    return obj[key];
}

const p1 = {
    name : 'Tyler',
    age : 45
}

const result1 = getProperty(p1, 'name');
const result2 = getProperty(p1, 'age');

console.log(result1);
console.log(result2);