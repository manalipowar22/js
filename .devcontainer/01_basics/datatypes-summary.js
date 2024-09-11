//  Primitive 

//  7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3523425364536476478165n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Vijay", "Allu Arjun", "Naagraj"]
let myObj = {
    name: "manali",
    age: "20",
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber); // bigNumber => retuen type undefined
console.log(typeof outsideTemp); // outsideTemp => return type object
console.log(typeof scoreValue); // scoreValue => return type number
console.log(typeof anotherId); // anotherId => return type symbol
console.log(typeof myFunction); // myFunction => return type function
console.log(typeof heros); // heros => return type object
console.log(typeof myObj); // myObj => return type object
