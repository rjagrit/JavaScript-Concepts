//Comments- To Descrbe or provide information about the code
// Comments are not executed by the compiler
// Comments are used to explain the code
// Comments are used to make the code more readable
// Comments are used to prevent execution of code

console.log("Hello World"); // This is a single line comment

/*
Multi Line Comment
*/

/*
Code to Print
Hello World
*/

console.log("Hello World");

// Operators
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. String Operators
// 6. Other Operators

// 1. Arithmetic Operators
// +, -, *, /, %, ++, --

let a = 10;
let b = 20;

console.log("a = ", a, "b = ", b);
console.log("a+b = ", a + b); // 30
console.log("a-b = ", a - b);
console.log("a*b = ", a * b);
console.log("a/b = ", a / b);
console.log("a%b = ", a % b);
console.log("a++ = ", a++);
console.log("a-- = ", a--);

// 2. Assignment Operators
// =, +=, -=, *=, /=, %=, **=

let c = 10;
// = is used to assign the value to the variable
console.log("c = ", c); //10

c += 10; // c = c+10
console.log("c += ", c); //20

c -= 10; // c = c-10
console.log("c -= ", c); // 10

c *= 10; // c = c*10
console.log("c *= ", c); //100

c /= 10;
console.log("c /= ", c); //10

c %= 10;
console.log("c %= ", c); //0

c **= 10;
console.log("c **= ", c); //0

// 3. Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=

let d = 10;

// what is the difference between == and ===
// == is used to compare the value of the variable
// === is used to compare the value and the data type of the variable

//explain difference with example == and ===
let d1=10;
let d2="10";

console.log("d1 == d2", d1 == d2);
console.log("d1 === d2", d1 === d2);

//why it is false? because the data type of d1 is number and the data type of d2 is string

// != is used to check if the values are not equal
console.log("d1 != d2", d1 != d2);

// !== is used to check if the values and the data types are not equal
console.log("d1 !== d2", d1 !== d2);

// > is used to check if the value of the variable is greater than the value of the variable
console.log("d1 > d2", d1 > d2);

// why result of d1 > d2 is false? because the value of d1 and d2 is same

// < is used to check if the value of the variable is less than the value of the variable
console.log("d1 < d2", d1 < d2);

// >= is used to check if the value of the variable is greater than or equal to the value of the variable
console.log("d1 >= d2", d1 >= d2);

// <= is used to check if the value of the variable is less than or equal to the value of the variable
console.log("d1 <= d2", d1 <= d2);

// 4. Logical Operators
// &&, ||, !

let e = 10;
let f = 20;
let g = 30;

// && is used to check if both the conditions are true
console.log("e<f && f<g", e < f && f < g);//true

// || is used to check if any one of the conditions is true
console.log("e<f || f<g", e < f || f < g);//true

// ! is used to check if the condition is false
console.log("!(e<f)", !(e < f));//false

// 5. String Operators
// + is used to concatenate the strings

let h = "Hello";
let i = "World";

console.log("h + i", h + i);

//Conditional Statements
// 1. if
// 2. if-else
// 3. if-else-if
// 4. switch

// 1. if
let j = 10;
let k = 20;
let l = 30;
let m = 40;

if (j < k) {
    console.log("j < k");
}

// 2. if-else
if (k < l) {
    console.log("k < l");
} else {
    console.log("k > l");
}

// 3. if-else-if
if (l < m) {
    console.log("l < m");
} else if (m < l) {
    console.log("m < l");
} else {
    console.log("m = l");
}

// 4. switch
let n = 50;
switch (n) {
    case 10:
        console.log("n = 10");
        break;
    case 20:
        console.log("n = 20");
        break;
    case 30:
        console.log("n = 30");
        break;
    default:
        console.log("n = 40");
}

// Ternary Operators
// ? :

let o = 10;
let p = 20;
let q = 30;

let result = o < p ? "o < p" : "o > p";
console.log(result);

//Q. Get user to input a number using prompt. Check if the number is a multiple of 5 or not.

let num = prompt("Enter a number");
if (num % 5 == 0) {
    console.log("Number is multiple of 5");
} else {
    console.log("Number is not multiple of 5");
}

 
//Q. Write a code which can give grades to students according to their scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score = prompt("Enter your score");
if (score >= 90 && score <= 100) {
    console.log("Grade A");
} else if (score >= 70 && score < 90) {
    console.log("Grade B");
} else if (score >= 60 && score < 70) {
    console.log("Grade C");
} else if (score >= 50 && score < 60) {
    console.log("Grade D");
} else if (score >= 0 && score < 50) {
    console.log("Grade F");
} else {
    console.log("Invalid Score");
}





