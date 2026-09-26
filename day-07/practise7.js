//Stack(Primitive) , Heap(Non-Primitive) Memory
let myName ="JinDoe.hc"; // Primitive data type stored in stack memory
let name = myName; // Copying the value of myName to name variable
myName="Jane Doe"; // Changing the value of myName variable
console.log(name);
console.log(myName);
let user_1 = {
    name: "John Doe",
    age: 30
}; // Non-Primitive data type stored in heap memory
let user_2 = user_1; // Copying the reference of user_1 to user_2 variable
user_1.age = 32;

console.log(user_2.age);

// Strings are immutable in JavaScript, which means that once a string is created, it cannot be changed. When you modify a string, a new string is created in memory, and the original string remains unchanged. This is why when you change the value of myName, it does not affect the value of name, as they are two separate variables with their own values
const str1 = "Hello";
const str2 = "world";
console.log(`${str1} ${str2}`); // Output: Hello world
let isStudent = true;
let myAge = 19;
console.log(`My name is ${myName} and i am ${myAge} years old . i am ${isStudent ? 'a student' : 'not a student'}`);
console.log(myName [0]);
console.log(myName.length)
console.log(myName.toUpperCase());
console.log(myName.charAt(6));
console.log(myName.indexOf('D'));
const newStringOne ="  hit the ground running  ";
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://www.example%20.com"; //%20 is a URL encoding for space character
console.log(url.replace('%20', ' '));
console.log(url.includes('twinklem')); // false
console.log(myName.split('e')); // ["JinDoe", "hc"]

