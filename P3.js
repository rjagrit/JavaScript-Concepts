//What are Loops in JavaScript?
//Loops are used to execute the same block of code again and again, as long as a certain condition is met.

//for loop
//The for loop has the following syntax:
/*
for (initialization; condition; increment/decrement) {
    // code to be executed
}

*/

//Example
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//Q. Calculate the sum of 1st n numbers using for loop.
console.log("for-loop");
let num=prompt("Enter the number upto which you want sum");
let sum=0;
let i=1;
for(i;i<=num;i++){
    sum=sum+i;
}
console.log("Sum of numbers from 1 to "+num+":",sum);
console.log(i);

//Q. Calculate the sum of 1st n numbers using while loop.
console.log("while-loop");
let n=prompt("Enter the number upto which you want sum");  
let s=0;
let j=1;
while(j<=n){
    s=s+j;
    j++;
}
console.log("Sum of numbers from 1 to "+n+":",s);

//Q. Calculate the sum of 1st n numbers using do-while loop.
console.log("do-while-loop");
let n1=prompt("Enter the number upto which you want sum");
let s1=0;
let k=1;
do{
    s1=s1+k;
    k++;
}while(k<=n1);

console.log("Sum of numbers from 1 to "+n1+":",s1);

//for-of loop
//The for...of loop is used to iterate over the elements of an iterable object, such as an array or a string.
//The syntax is:
/*
for (variable of iterable) {
    // code to be executed
}
*/

//Example
let str="Hello World";
for(let char of str){
    console.log("char",char);
}

//for-in loop
//The for...in loop is used to iterate over the properties of an object.
//The syntax is:
/*
for (variable in object) {
    // code to be executed
}
*/

//Example
let student={
    name:"Rahul",
    age:20,
    cgpa:8.5,
    isPass:true
};
for(let i in student){
    console.log("key=", i, "value=", student[i]);
}

//Practice Qs
//Q. Print all even numbers from 0 to 100.
console.log("Q. Print all even numbers from 0 to 100.");
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

//Q. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNumber=29;
let userNumber=prompt("Guess the game number");
while(userNumber!=gameNumber){
    userNumber=prompt("You entered wrong number. Guess again");
}
console.log("Congratulations! You entered the correct number");

//Strings
let str1="Hello World";
console.log(str1);

//String Properties
console.log(str1.length); // Length of String

console.log(str[0]);

//Template Literals
let specialString=`This is a template literal`; //Backticks are used for template literals
console.log(specialString);

let item={
    name:'pen',
    price:10,
    color:'Red'
};

console.log("The Price of "+item.name+" is "+item.price+" and color is "+item.color);
console.log(`The Price of ${item.name} is ${item.price} and color is ${item.color}`);

// Escape Characters
let str2='Hello\nWorld';
console.log(str2);

//String Methods
let str3="  Hello World";
let str4="by Ketty Pery"
console.log(str3.toUpperCase());//converts the string to upper case
console.log(str3.toLowerCase());//converts the string to lower case
console.log(str3.trim());//removes the extra spaces from the string

let result=str4.slice(0,3); //slicing the string
console.log(result.length);

console.log(str3.concat(str4));//adding two strings

console.log(str3.replace(str3[0],str3[3]));//replacing the string

//Q. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.
let fullName=prompt("Enter your full name");
let username="@"+fullName+fullName.length;
let username1=`@${fullName}${fullName.length}`;
console.log(username);
console.log(username1);
