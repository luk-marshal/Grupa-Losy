"use strict";
//Basic Types
let id = 5;
console.log("ID: ", id);
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
//Arrays
let ids = [1, 2, 3, 4];
//ids.push("Hello"); //Argument of type 'string' is not assignable to parameter of type 'number'.
let arr = [1, true, "Hello"];
//Tuple
let person = [1, "Brad", true];
// Tuple Array
let employe;
employe = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
//Union
let productID;
productID = 22;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.Up);
console.log(Direction3.Down);
console.log(Direction3.Left);
console.log(Direction3.Right);
const user = {
    id: 1,
    name: "John",
};
console.log(user);
const userInt = {
    id: 1,
    name: "John",
};
console.log(user);
const point = 5;
// interface PointInt = number | string  //to nie działa
// const pointint:PointInt = 5
// userInt.id = 5; //Cannot assign to 'id' because it is a read-only property.
//Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid; //Another option
// customerId = true; //Type 'boolean' is not assignable to type 'number'
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
log(1);
log("2");
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Class
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(this.id, this.name);
    }
    register() {
        return `${this.name} is now geristered`;
    }
}
const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");
// brad.id; //Property 'id' is private and only accessible within class 'Person'.
console.log(brad.register());
class Employe extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employe(3, "Shawn", "Developer");
console.log(emp.name);
console.log(emp.register());
