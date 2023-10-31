//Basic Types
let id: number = 5;
console.log("ID: ", id);
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";

//Arrays
let ids: number[] = [1, 2, 3, 4];
//ids.push("Hello"); //Argument of type 'string' is not assignable to parameter of type 'number'.
let arr: any[] = [1, true, "Hello"];

//Tuple
let person: [number, string, boolean] = [1, "Brad", true];
// Tuple Array
let employe: [number, string][];
employe = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

//Union
let productID: string | number;
productID = 22;

//Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);

enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);

enum Direction3 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
console.log(Direction3.Up);
console.log(Direction3.Down);
console.log(Direction3.Left);
console.log(Direction3.Right);

//Object
type User = {
  id: number;
  name: string;
  age?: number;
};

const user: User = {
  id: 1,
  name: "John",
};
console.log(user);

//Interface
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const userInt: UserInterface = {
  id: 1,
  name: "John",
};
console.log(user);

type Point = number | string;
const point: Point = 5;

// interface PointInt = number | string  //to nie działa
// const pointint:PointInt = 5

// userInt.id = 5; //Cannot assign to 'id' because it is a read-only property.

//Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number; //Another option
// customerId = true; //Type 'boolean' is not assignable to type 'number'

function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 2));

function log(message: string | number): void {
  console.log(message);
}
log(1);
log("2");
// log(true) //Error

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

//Class
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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

//Subcalsses
class Employe extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employe(3, "Shawn", "Developer");
console.log(emp.name);
console.log(emp.register());

//Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "John", "Jill"]);
// numArray.push("hello"); //Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// strArray.push(1)  //Argument of type 'number' is not assignable to parameter of type 'string'.

const arrayOfObjects = [{ id: 1 }, { id: 2 }, { id: 3 }];
