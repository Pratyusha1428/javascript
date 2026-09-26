//Numbers are also immutable in JavaScript, which means that once a number is created, it cannot be changed. When you perform an operation on a number, a new number is created in memory, and the original number remains unchanged. This is why when you change the value of myAge, it does not affect the value of myAge, as they are two separate variables with their own values
const score = 100;
console.log(score);
const name = "John Doe";
const balance = new Number(1000);
console.log(balance.toFixed(5)); // Output: 1000.00000
console.log(balance.toPrecision(7)); // Output: 1000.000
console.log(balance.toExponential(2)); // Output: 1.00e+3

//***************************************MATHS********************************************/
console.log(Math.PI);
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.abs(-10)); // changes the negative number to positive
console.log(Math.round(5.7)); // rounds the number to the nearest integer
console.log(Math.ceil(5.1));// rounds the number up to the nearest integer
console.log(Math.floor(5.9));// rounds the number down to the nearest integer
console.log(Math.random()); // generates a random number between 0 and 1
console.log(Math.random() * 10); // generates a random number between 0 and 10
console.log(Math.floor(Math.random() * 10)); // generates a random integer between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1); // generates a random integer between 1 and 10

const min =10
const max =20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // generates a random integer between 10 and 20