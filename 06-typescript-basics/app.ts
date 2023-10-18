// let x : string = "Hello String";

// x = true;

// let y : number = 201;

// y = "";

const demo: Function = () => { }

const demoTwo: object = {
    name: "John Doe"
}

const friends: Array<string> = ["Joey", "Monica"]

let age: string | number = "Thirty Two";       // Union Type

age = 32;

let user: [string, number] = ["John", 32]      // Tuple

let dob: Date = new Date("Dec 21. 1982");

type MyType = {
    name: string,
    age: number,
    address: object
}

let userOne: MyType = {
    name: "",
    age: 32,
    address: {

    }
}

interface Person {
    id: string;
    name: string;
}

let john: Person = {
    id: "301",
    name: "Jenny"
}


// Type inference
let xyz = "Hello";
// xyz = 321;

// Explicit Type 
let pqr: string;



function demoThree(name: string) {
    return "Hello ";
}


demoThree("John")

// npm install typescript -g