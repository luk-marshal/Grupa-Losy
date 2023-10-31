var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Basic Types
var id = 5;
console.log("ID: ", id);
var company = "Traversy Media";
var isPublished = true;
var x = "Hello";
//Arrays
var ids = [1, 2, 3, 4];
//ids.push("Hello"); //Argument of type 'string' is not assignable to parameter of type 'number'.
var arr = [1, true, "Hello"];
//Tuple
var person = [1, "Brad", true];
// Tuple Array
var employe;
employe = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
//Union
var productID;
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
var user = {
    id: 1,
    name: "John",
};
console.log(user);
var userInt = {
    id: 1,
    name: "John",
};
console.log(user);
var point = 5;
// interface PointInt = number | string  //to nie działa
// const pointint:PointInt = 5
// userInt.id = 5; //Cannot assign to 'id' because it is a read-only property.
//Type Assertion
var cid = 1;
// let customerId = <number>cid;
var customerId = cid; //Another option
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
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
//Class
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
        console.log(this.id, this.name);
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now geristered");
    };
    return Person;
}());
var brad = new Person(1, "Brad Traversy");
var mike = new Person(2, "Mike Jordan");
// brad.id; //Property 'id' is private and only accessible within class 'Person'.
console.log(brad.register());
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employe;
}(Person));
var emp = new Employe(3, "Shawn", "Developer");
console.log(emp.name);
console.log(emp.register());
