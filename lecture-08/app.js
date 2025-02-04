var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var fruits = []; // this is generics (one type is connected to another type like in this array is connected to string type that means fruits is an array that contains strings)
// but bro it can be done by just simply writing const fruits : string[] = [];  (so what's the problem ?)
fruits.push('Mango');
fruits.push('Apple');
fruits.push('Litchi');
console.log(fruits);
var boy1 = {
    name: 'Rahul',
    age: 17
};
var boy2 = {
    name: 'Vinod',
    age: 15
};
var user = []; // array of objects can be created like this
user.push(boy1);
user.push(boy2);
console.log(user);
function merge(objA, objB, objC) {
    return __assign(__assign(__assign({}, objA), objB), objC);
}
var res = merge({ name: 'Vaibhav' }, { age: 21 }, { role: 'student' });
console.log(res);
// Generic Constraints
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = createObject({ name: 'vaibhav' }, 21, true); // T me koi constraint nhi hai ko kuch bhi daal sakta hu
console.log(obj);
var numberBox = { value: 23 };
console.log(numberBox);
var stringBox = { value: 'dummy' };
console.log(stringBox);
var response = { data: 'Success', status: 200 }; // by default data is string
console.log(response);
var jsonResponse = { data: { name: 'vaibhav', age: 21 }, status: 201 }; // default value gets overwrite by object
console.log(jsonResponse);
// Generics with class
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var stringContainer = new Container('Hello');
console.log(stringContainer.getContent());
var numberContainer = new Container(23);
console.log(numberContainer.getContent());
// Generics with Array
function getFirst(x) {
    return x[0];
}
var firstNumber = getFirst([1, 2, 3, 4, 5]);
var firstString = getFirst(['a', 'b', 'c']);
console.log(firstNumber);
console.log(firstString);
// Generic with keyof
function getProperty(obj, key) {
    return obj[key];
}
var p1 = {
    name: 'Tyler',
    age: 45
};
var result1 = getProperty(p1, 'name');
var result2 = getProperty(p1, 'age');
console.log(result1);
console.log(result2);
