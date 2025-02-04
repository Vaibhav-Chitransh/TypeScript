// I want the thing like nodemon (like there should not be any need for refreshing again and again) -> for this there is watch mode which can be achieved by writing the command below (compiled itself) :- 

// tsc classes.ts --watch     or      tsc classes.ts -w

// in the above case we were compiling only the single file that is classes.ts 
// now what if there are 100 such files with different names so it would be very hectic to write one by one the above command for all the files so we create a bundle to make the work easy :- 

// 1. tsc --init    ->   tsconfig.json file ban jayegi
// 2. tsc --watch     ->   compile all the files in the folder (in this case lecture-06 folder)

// now if you don't want every file in the folder to compile then you can add "exclude": ["fileName"], key value pair in the tsconfig.json file after the compilerOptions so that file will be excluded and will not compile   ->   iska opposite "include" ho jayega jisme tum bata sakte ho ki kon kon si files include karni hai (manually)

// now suppose there are so many files you want to exclude so manual writing each file will be so hectic so you can write like this   ->   "exclude": ["*.dev.ts"],   ->  isse jis file ke end me bhi .dev.ts likha hoga vo saari files exlude ho jayengi   ("**/*.dev.ts"   ->  isse kisi bhi folder ke andar koi .dev.ts file jo bhi hogi vo exlude ho jayegi)



// classes in javascript

class Person {
    name = 'Vaibhav Chitransh';
    displayName() {
        console.log(`My name is ${this.name}`);
    }
}

const person1 = new Person();
person1.displayName();

// classes in typescript

class User {
    name : string;
    age : number;
    constructor(n : string, x : number) {
        this.name = n;
        this.age = x;
    }

    describe() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}

const user1 = new User('Vaibhav Chitransh', 21);
user1.describe();

// copy the object
const user2 = {
    name: 'Aryan',
    describe: user1.describe
}

console.log(user2);
user2.describe();   // o/p -> My name is Aryan and I am undefined years old  (because main wala this ko point kar raha hai aur jab maine copy kiya to us object me age jaise property hai hi nhi isliye uski jagah undefined aaya)

// isko resolve karne ke liye ham ye kar sakte hai ->  describe(this : User) {}  -> isse kya hoga ki jab bhi ham copy banayenge to make sure karenge ki jo copy ho vo User ki tarah hi ho (that means usme bhi vo saari properties present ho tabhi banega warna error show karega)


// access modifiers ->  public, private, readonly, protected

class Employee {
    name : string[];   // by default the properties are public
    private password : number[];    // make this protected so that it can be accessed in the children class as well
    private readonly id : string;   // readonly can be initialized only once
    constructor() {
        this.name = [];
        this.password = [];
        this.id = 'E1'
    }

    addEmployee(n : string) {
        this.name.push(n);
        this.password.push(Math.floor(Math.random() * 10000));
    }

    getInfo() {
        console.log(`Number of employees: ${this.name.length}`);
        console.log(this.name);
    }
}

const employee = new Employee();
employee.addEmployee('Vaibhav Chitransh');
employee.addEmployee('Bruce Wayne');
employee.getInfo();

// console.log(employee.password);   // can't access password outside the class because it is marked as private

// Inheritance

class Manager extends Employee {    // Manager class inherits the properties of Employee class
    department : string;
    private hobby : string;
    constructor(dept : string) {
        super();    // to call the constructor of parent class
        this.department = dept;
        this.hobby = '';
    }

    getDetails() {
        console.log(`Manager: ${this.name.length}`);
        console.log(this.name);
        console.log(`Department: ${this.department}`);
    }

    set setHobby(hobby : string) {   // setter 
        if(hobby === '') throw new Error('Please providea valid hobby');
        this.hobby = hobby;
    }

    get getHobby() {   // getter
        if(this.hobby === '') throw new Error('Please provide a hobby first');
        return this.hobby;
    }

    static getSalary() {
        return {salary: 30000000};
    }
}

const manager = new Manager('Sales');
manager.addEmployee('Tyler Durden');
manager.getDetails();

manager.setHobby = 'Cricket';
console.log(manager.getHobby);

const salary = Manager.getSalary();   // in static type there is no need to create an object to access this 
console.log(salary);

// Abstract classes

abstract class Boy {
    name : string[];
    age : number[];
    constructor() {
        this.name = [];
        this.age = [];
    }

    setDetails(n : string, x : number) {
        this.name.push(n);
        this.age.push(x);
    }

    abstract getDetails() : void;
}

class Subclass extends Boy {
    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const boy = new Subclass();
boy.setDetails('Vaibhav Chitransh', 21);
boy.getDetails();