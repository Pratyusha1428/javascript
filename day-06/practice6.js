// Data Types  - summary
// Primitive
// 7 types : String , Number ,Boolean ,Null ,undefined , Symbol , BigInt

const score=100; // Number
const scoreValue=100.3; // Number
const isLoggedIn=false; // Boolean
const outsideTemp=null; // Null
let userEmail; // undefined
const id=Symbol('123'); // Symbol
const bigNumber=BigInt(123); // BigInt


//Reference Types (Non-Primitive)
// Array , Object , Function

const heroes =["Shaktiman","Naagraj","Doga"]; // Array

let myObj ={
    name : "Tony",
    age : 30,
}
const myFunction =function(){
    console.log("Hello World");
}
console.log(typeof myObj);