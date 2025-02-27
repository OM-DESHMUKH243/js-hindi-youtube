// Primitive

// 7 types :- String, Number, Boolean, null , undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

//const bigNumber = 34567893456789n



//Reference (Non Primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"om",
    age:21,
}

const myfunction = function(){
    console.log("Hello world"); 
}

console.log(typeof anotherId);

//https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html



//***************************************

// stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "omsd"

let anothername = myYoutubename
anothername = "sod"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: 'user@ybl'
}

let userTwo = userOne

userTwo.email = "om@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// stack--Copy and Heap--Reference