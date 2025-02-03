// UNION   |  -> when you have to use multiple options
function combine1(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        console.log(a + b);
    else
        console.log(a.toString() + b.toString());
}
combine1(20, 30);
combine1('Vaibhav', 'Chitransh');
function combine2(a, b, conversionType) {
    if ((typeof a === 'number' && typeof b === 'number') || (conversionType === 'as-number')) {
        console.log(+a + +b);
    }
    else {
        console.log(a.toString() + b.toString());
    }
}
combine2('10', '20', 'as-number');
var person = {
    name: 'Vaibhav',
    age: 21,
    skills: ['cpp', 'react', 'node']
};
console.log(person);
function greet(user) {
    console.log("Hi, ".concat(user.name));
}
greet(person);
