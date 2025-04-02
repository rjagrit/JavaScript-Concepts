//Functions in JavaScript- Block of code that performs a specific task

function myFunction(){
    console.log("Hello It's mine Created Function");
}
myFunction();

// Paramaterized Function
function sum(a,b){
    console.log(a+b);
}

let mul=(a,b)=>{
    return a*b;
}
console.log(mul(2,3)) // Arrow Function;

//Q. Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.

function countVowels(str){
    let count=0;
    for(let ch of str){
        if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
            count++;
        }
    }
    return count;
}

let result=countVowels("Jagrit Love Nishu");
console.log(result);

//Q. Create an arrow function to perform the same task

let countVowelArrowFunction=(str)=>{
    let ct=0;
    for(let char of str){
        if(char==='a' ||char==='e' || char==='i' || char==='o' || char==='u'){
            ct++;
        }
    }
    return ct;
}
console.log(countVowelArrowFunction("Jai"));


//forEach() is a higher order function that is used to iterate over an array and perform a specific action on each element of the array.

let arr=[1, 2, 3, 4, 5];

arr.forEach(function printVal(val,index,ar1){
    console.log(val, index, ar1);
});

//Q. Create an array of numbers, print the square of each number using forEach() method.
let numbers=[1, 2, 3, 4, 5];
numbers.forEach((val)=>{
    console.log("Square of ",val," is ", val*val);
});
let numbers1=[42,45,90];
let result1=(num)=>{
    console.log("Square of ",num," is ",num*num);
}

numbers1.forEach(result1);

//map() method is used to create a new array by applying a function to each element of the original array.

let num=[1, 2, 3, 4, 5];
let newArr=num.map((val)=>{
    return val;
});

console.log(newArr);

//filter() method is used to create a new array with all elements that pass the test implemented by the provided function.

let ar=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNum=ar.filter((val)=>{
    return val%2==0;
});
console.log(evenNum);

//reduce() method is used to apply a function to each element of the array to reduce the array to a single value.

let ar2=[1, 2, 3, 4, 5];
let result3=ar2.reduce((res,cur)=>{
    return res+cur;
});

console.log(result3);

//Q. We are given array of marks of students. Filter out the marks of students that scored 90+.

let marks=[110,109,104,90, 80, 70, 60, 50, 40, 30, 20, 10];
let studentsMarks = marks.filter((val)=>{
    return val>=90;
});
console.log(studentsMarks);

let stuMarks=(values)=>{
    return values>=90;
}
console.log(marks.filter(stuMarks));

//Q. Take a number n as a input from user. 
// Create an array of numbers from 1 to n. Use the reduce method to find the sum of all numbers in the array. 
// Use the reduce method to calculate product of all numbers in the array.

let n=prompt("Enter a number: ");
let userAry=[];
for(let i=1;i<=n;i++){
    userAry.push(i);
}
let sumOfAry=userAry.reduce((res,cur)=>{
    return res+cur;
});
console.log("Sum of all numbers in the array is: ",sumOfAry);

let productOfAry=userAry.reduce((res,cur)=>{
    return res*cur;
});
console.log("Product of all numbers in the array is: ",productOfAry);