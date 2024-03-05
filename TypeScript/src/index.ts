

const x: number = 10;
console.log(x)

//type inference
function sum(a: number, b: number): number {
  return a + b;
}

let value = sum(10, 20);
console.log(value);

// return true and false based on  if user is 18+
function isLegal(number: number): boolean {
  if (number > 18) {
    return true
  } else {
    return false;
  }
}

console.log(isLegal(55));

//Create a function that takes another function as input , and runs it after one second
function takeFunction(callback: () => void) {
  setTimeout(callback, 1000)
}

takeFunction(function () {
  console.log('Himanshu')
})

// i have defined its return type void and i am still returning some value its running without giving any error
const doSomething: () => void = () => {
  return 5;
}
console.log(doSomething())

// Interfaces
interface User {
  firstName: string,
  lastName: string,
  age: number,
  email?: string //email? means its optional
}


function greet(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
};

console.log({
  firstName: "Himanshu",
  lastName: "sharma",
  age: 67
}
);

// Types in ts
// 1--> Uninons
type id = number | string;
let id: id = 10;
console.log(x)

// 2--> Intersection
type Employee = {
  name: string,
  startDate: Date,
}

interface Manager {
  name: string,
  department: string
}

type TechLead = Employee | Manager;

const techLead: TechLead = {
  name: "himanshu",
  startDate: new Date(),
  department: "Software Developer"
}

// Array in ts

type numberArray = number[];
function maxValue(arr: numberArray) {
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

enum Direction {
  UP,
  Left,
  Right,
  Down
}

enum Direction1 { // we can default value of constants 
  UP = "UP",
  Left = "Left",
  Right = "Right",
  Down = "Down"
}

enum Direction2 { // we can default value of constants and know it start from 10, 11 , 12 , 13 
  UP = 10,
  Left,
  Right,
  Down
}

function runSomething(keyPressed: Direction) {
  //do Something
}
runSomething(Direction.Left);
console.log(Direction.UP)// by default it will print 0
console.log(Direction.Left)// by default it will print 1
console.log(Direction1.Left)// It will print Left bcoz we have changed it default value
console.log(Direction2.UP)// It will print 10

//Generics
 type Input = number | string;
 
function identity<T>(arg : T){
  return arg;
}
const value1 = identity<string>("Sonu");
console.log(value1.toUpperCase());

function identity1<T extends any[]>(arg: T): T[number] {
  return arg[1];
}

const value2 = identity1(["Sonu", "sharma"]);

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase());