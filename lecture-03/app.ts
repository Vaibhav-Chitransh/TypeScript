// UNION   |  -> when you have to use multiple options

function combine1(a : number | string, b : number | string) {
    if(typeof a === 'number' && typeof b === 'number') console.log(a + b);
    else console.log(a.toString() + b.toString());
}

combine1(20, 30);
combine1('Vaibhav', 'Chitransh');

// Literal types   ->   khud ka type define

type KuchBhi = number | string;     // type alias / custom type
type Conversion = 'as-number' | 'as-string';   // literal types (as-number and as-string or you can use anything)

function combine2(a : KuchBhi, b : KuchBhi, conversionType : Conversion) {
    if((typeof a === 'number' && typeof b === 'number') || (conversionType === 'as-number')) {
        console.log(+a + +b);
    } else {
        console.log(a.toString() + b.toString());
    }
}

combine2('10', '20', 'as-number');


// Using type alias with objects

type User = {
    name: string;
    age: number;
    skills: string[];
}

const person : User = {
    name: 'Vaibhav',
    age: 21,
    skills: ['cpp', 'react', 'node']
}

console.log(person);

function greet(user : User) {   // using type alias with functions
    console.log(`Hi, ${user.name}`);
}

greet(person);