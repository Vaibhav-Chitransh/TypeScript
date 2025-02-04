interface Person {
    name : string;
    age : number;
    greet(text : string) : void
}

// so what is the difference between the interface and class -> 
// interface just defines the type of entity or object and also in interface there is no initialization just like class so the variables and functions are not initialized (it just tells how the object will look like)

let user : Person;

user = {   // I can't assign any other property in user because interface is Person 
    name : 'Vaibhav Chitransh',
    age : 21,
    greet(text : string) : void {
        console.log(`Hello, ${text}`);
    }
}

console.log(user);
user.greet('Bruce');

// ab tu bolega ki type and interface me fir difference kya hua right ->
// so interface is just the same as type

// How to initialize type in this case 

// type Person = {    // bas isme = ka sign lagana padega
//     name: string;
//     age: number;
//     greet(text : string) : void;
// }

// to kab type use kare or kab interface ->  so jab ham object ka structure define karte hai to ham interface prefer karte hai aur agar union jaise pehle dekha tha vo kaam karna ho then we will use type

// interface ko class ke saath kaise use kare ->

interface Greetable {
    name: string;
    greet(text : string) : void;
}

class Greetings implements Greetable {   // can use more interfaces also (comma separated)
    name: string;
    constructor(n : string) {
        this.name = n;
    }
    greet(text : string) : void {
        console.log(`${text} ${this.name}`);
    }
}

let user1 = new Greetings('Vaibhav');
user1.greet('Hello, ');

// you can use readonly in interface and type

// extending interface -> it can also be done just by using extends just like we do in class

// functions using type and interface

// type addFun1 = (a : number, b : number) => number;

interface addFun2 {
    (a : number, b : number) : number;
}

let add : addFun2;
add = (n1 : number, n2 : number) => {
    return n1 + n2;
}

console.log(add(3, 6));

interface Name {
    name : string;
    petName ?: string;    // you can keep this field or property optional by writing this ? symbol
}

let newUser : Name;
newUser = {
    name: 'Tyler Durden',
}

console.log(newUser);