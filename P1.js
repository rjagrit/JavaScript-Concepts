// How to Print in JavaScript
console.log('My First JavaScript Program says Hello PL');

//About Variables
name='Tony Stark';

// Rules of Variable
// 1. Cannot start with number
// 2. Can start with letter, numbers, _ or $
// 3. Are case sensitive
// 4. Cannot use reserved keywords
// 5. Should be meaningful
// 6. Cannot contain space or hyphen(-)
// 7. Use camelCase convention

let fullName='Rohit Sharma';
fullname='Tony Stark';
fullName='Iron Man';

console.log(fullname);
console.log(fullName);

// var- Variable can be re-declared & updated. A global scope variable
// let-  Variables cannot be re-declared but can be updated. A block scope variable
// const-  Variables cannot be re-declared or updated. A block scope variable

// Data Types in JavaScript
// 1. Primitive Data Types
// Number
let age=18;

// String
let firstName='Rohit';

// Boolean
let isApproved=true;

// Undefined
let lastName;

// Null
let selectedColor=null;

//BigInt
let num=BigInt(123);

// Symbol
let sym=Symbol('foo');

//2. Non-Primitive Data Types
// Object (can use const/let both)

let person={
    name:'Rohit',
    age:18
};

//Print the value 
console.log(person);

//2 ways
//1. Dot Notation
console.log(person.name);
console.log(person.age);

//2. Bracket Notation
console.log(person['name']);

//Updating the value
person.age=19;
console.log(person.age);

//Q. Create a const object called "product" to store information shown in picture
const product={
    name:'Alees Ball Pen',
    rating:4,
    isDealoftheDay:true,
    price:250,
    discount:50
 };

 //Q.Create a const object called "profile" to store information shown in picture
 const profile={
    userName:'@rohitsharma',
    isFollow:true,
    followers:1000000000,
    following:100,
    posts:1000,
    description:'Java Developer | Developing Skills'
 };

 //checking data type inside object
 console.log(typeof profile['userName']);