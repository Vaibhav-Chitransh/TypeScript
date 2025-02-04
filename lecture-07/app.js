function add(a, b) {
    // return a + b;   // this is not possible because a and b can be strings also so we need to use type guards
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(40, 20));
console.log(add('40', 20));
console.log(add(20, '40'));
console.log(add('Vaibhav', ' Chitransh'));
var emp1 = {
    name: 'Vaibhav',
    privileges: ['create', 'read', 'update', 'delete'],
    startDate: new Date()
};
function printEmployeeInfo(emp) {
    console.log("Name: ".concat(emp.name));
    // console.log(`privileges: ${emp.privileges}`);   // the privliges and start date can't be printed because the Unknown can either be Employee or Admin so it inherits either Employee or Admin
    // console.log(`startDate: ${emp.startDate}`);
    // using type guards
    // now I can't check like this -> (type of emp === 'Admin') because Admin is not a datatype vo to maine khud banaya hai custom so I can't write or check like this
    // use in keyword (builtin js)
    if ('privileges' in emp)
        console.log("privileges: ".concat(emp.privileges));
    if ('startDate' in emp)
        console.log("startDate: ".concat(emp.startDate));
}
printEmployeeInfo(emp1);
printEmployeeInfo({ name: 'Bruce Wayne', startDate: new Date() });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving a Car...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a Truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading Cargo: ".concat(amount));
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // now using type guard to check whether the vehicle is truck or not so that we print load cargo
    if ('loadCargo' in vehicle)
        vehicle.loadCargo(1000);
    if (vehicle instanceof Truck)
        vehicle.loadCargo(500); // second way by using instanceof
}
useVehicle(v1);
useVehicle(v2);
// type casting / type assertion
// const userInput = document.getElementById('user-input')!;  
// // use ! symbol at the end when you are sure that userInput can't be null it must be HTML Element you can see this by hovering over userInput
// typecasting way 1
// const userInput = <HTMLInputElement>document.getElementById('user-input')!;
// userInput.value = 'Hello';
// typecasting way 2
var userInput = document.getElementById('user-input');
userInput.value = 'Hello';
