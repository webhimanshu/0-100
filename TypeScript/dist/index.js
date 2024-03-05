"use strict";
const x = 10;
console.log(x);
//type inference
function sum(a, b) {
    return a + b;
}
let value = sum(10, 20);
console.log(value);
// return true and false based on  if user is 18+
function isLegal(number) {
    if (number > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(55));
//Create a function that takes another function as input , and runs it after one second
function takeFunction(callback) {
    setTimeout(callback, 1000);
}
takeFunction(function () {
    console.log('Himanshu');
});
// i have defined its return type void and i am still returning some value its running without giving any error
const doSomething = () => {
    return 5;
};
console.log(doSomething());
function greet(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
;
console.log({
    firstName: "Himanshu",
    lastName: "sharma",
    age: 67
});
let id = 10;
console.log(x);
const techLead = {
    name: "himanshu",
    startDate: new Date(),
    department: "Software Developer"
};
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([1, 2, 3]));
// Enums
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["Left"] = 1] = "Left";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Down"] = 3] = "Down";
})(Direction || (Direction = {}));
var Direction1;
(function (Direction1) {
    Direction1["UP"] = "UP";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
    Direction1["Down"] = "Down";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["UP"] = 10] = "UP";
    Direction2[Direction2["Left"] = 11] = "Left";
    Direction2[Direction2["Right"] = 12] = "Right";
    Direction2[Direction2["Down"] = 13] = "Down";
})(Direction2 || (Direction2 = {}));
function runSomething(keyPressed) {
    //do Something
}
runSomething(Direction.Left);
console.log(Direction.UP); // by default it will print 0
console.log(Direction.Left); // by default it will print 1
console.log(Direction1.Left); // It will print Left bcoz we have changed it default value
console.log(Direction2.UP); // It will print 10
function identity(arg) {
    return arg;
}
const value1 = identity("Sonu");
console.log(value1.toUpperCase());
function identity1(arg) {
    return arg[1];
}
const value2 = identity1(["Sonu", "sharma"]);
function getFirstElement(arr) {
    return arr[0];
}
const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase());
