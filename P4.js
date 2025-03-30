//Arrays- Collection of similar type of data

//Difference between array and object
//Array is a collection of similar type of data whereas Object is a collection of different type of data

let marksArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let herosArray = ["Ironman", "Thor", "Hulk", "Captain America", "Black Widow"];
console.log(marksArray);
console.log(typeof marksArray); //type of first element of array
console.log(marksArray.length); //length of array
console.log(typeof marksArray); //type of array

//Array Inidices
console.log(marksArray[0]); //0th index of array

//Arrays are immutable
marksArray[0] = 100; //updating the value of array
console.log(marksArray);

//Loop over Arrays
for (let i = 0; i < marksArray.length; i++) {
  console.log(marksArray[i]);
}

for(let i=0;i<herosArray.length;i++){
    console.log(herosArray[i]);
}

for(let i of herosArray){
    console.log(i);
}

for(let el of herosArray){
    console.log(el.toUpperCase());
}

//Q. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
let average = sum / marks.length;
console.log("Average marks of the class: " + average);

//Q. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let prices = [250, 645, 300, 900, 50];
let finaPrice=[];// Blank Array

for(let i=0;i<prices.length;i++){
  console.log(`Value of Item-${i+1} before Offer= ${prices[i]}`);
  finaPrice[i]=prices[i]-prices[i]*0.1;
  console.log(`Value of Item-${i+1} after Offer= ${finaPrice[i]}\n`);
}

// Arrays Methods
let numArray = [1, 2, 3, 4, 5];
console.log("Array",numArray);

numArray.push(10);//push at end
console.log("Using push() To add at last index",numArray);

numArray.unshift(0.1);
console.log("Using unshift() To add at 1st index",numArray);

numArray.pop();// delete last element
console.log("Using pop() to delete from last index",numArray);

numArray.shift();// delete first element
console.log("Using shift() to delete from first position",numArray);

console.log("Array to String using toString()-",numArray.toString());//convert array to string

console.log("Concatenate two Strings");
let str1 = "Hello";
console.log(str1.slice(1,3));//not include last index
let str2 = "World";
console.log(str1.concat(str2));

console.log("Concatenate two arrays");
let marvelHeros = ["Ironman", "Thor", "Hulk", "Captain America", "Black Widow"];
let dcHeros = [1,"Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];
console.log(marvelHeros.concat(dcHeros));

let ar5= [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(ar5.slice(2,5));//not include last index

console.log("Spilce method");
let ar6= [1, 2, 3, 4, 5, 6, 7];
ar6.splice(0,0,0.1,0.2);
console.log(ar6);

//Q. Create an array to store companies ->"Bloomberg", "Microsoft","Uber","Google", "IBM","Netflix"
let companies=["Bloomberg", "Microsoft","Uber","Google", "IBM","Netflix"];
console.log(companies);
console.log("Remove first company from the array");
companies.shift();
console.log(companies);

console.log("Remove Uber and add OLA in its space");
companies.splice(1,1,"OLA");
console.log(companies);

console.log("Add Amazon at the end of the array");
companies.push("Amazon");
console.log(companies);



