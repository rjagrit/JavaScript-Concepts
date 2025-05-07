/*What is synchronous and asynchronous?

Synchronous means the code runs in a particular sequence, i.e. every statement of the code gets executed one by one. 
So, basically a statement has to complete running and return a value before moving on to the next statement.

Asynchronous means that the execution of one particular statement of the code is not dependent on another statement. 
A statement can begin executing the instant it is received and can even be executed before the previous statement has been completed 
even if it comes later in the program. This non-blocking architecture is known as asynchronous execution.

Asynchronous operations allow the program to be executed immediately, without waiting for the previous operation to complete. 
This is achieved by using callbacks, promises, and async/await.
*/

// Synchronous code example
console.log("Start");
console.log("Middle");
console.log("End");

// Asynchronous code example using setTimeout
console.log("Start");
setTimeout(() => { //setTimeout() function decide how much time a particular function or instruction took to execute 
  console.log("This is a async function");
}, 1000); // The function inside setTimeout will be executed after a delay of 5000 milliseconds (5 seconds)

console.log("End");

//What are callbacks in JS?
//A callback is a function passed as an argument to another function. This technique allows a function to call another function.

//Example of a callback function that proves callback work in both synchronous and asynchronous
function sum(a, b) {
  console.log(a + b);
}

const hello = () =>{
    console.log("Hello");
}
setTimeout(hello, 2000);

/*What is Callback hell in JS?
Ans. Nested callbacks stacked below one another forming a pyramid structure, these nesting create a problem named Callback hell.

------Scenario------

let suppose we have created a website in which there are million of users and each user data was stored inside a database. 
Now, each time user enter their login credentials JS code check it in the database and matches the record and if record matches,
user will get the data from the database. 

*/

//Database like function 

function getData(dataId){
  console.log("This data is of User-Id ",dataId);
}

//let say this database takes 2 seconds to get the user data (using setTimeout() function to do this scenario)

function getData1(dataId){
  setTimeout(()=>{
    console.log(`This data is of User-id ${dataId}`)
  },2000)
}

//Now I want Data-1 then Data-2 then Data-3 one by one not paralley, what we do is:
getData1(1);//start timer and move forward
getData1(2);//start timer and move forward
getData1(3);//start timer and move forward

/*thats why teeno 2 second ke baad ek saath print ho gye
but the result is after 2 seconds we get all data ek saath lekin I want to get each data after a delay of 2 seconds

Why we are discussing above scenario ?
Ans. Because sometimes we get the condition like data-1 milega tabhi data-2 search hoga etc.

Ex: User enter email id then it will proceed, toh email id daalne ke baad database me check hoga ki yeh email exist karti h,
agar karti h toh data-2 yaani password maange user se agar nhi karti h toh vhi stop kar de.

*/

//Solution for above

function getData3(dataId, getNextData){
  //setTimeout() used to set the delay interval
  setTimeout(()=>{
    console.log("data-",dataId);
    //if getData ke andar getNextData() function aya h tab yeh condition run hogi
    if(getNextData){
      getNextData();
    }
  },2000)
};

//getData3() ke andar getData3() ko as callback use karna h toh arrow function ka use karna hoga 
//---------------------------------------Call Back Hell------------------------------
getData3(1,()=>{
  //after 2 seconds we get data-1
  getData3(2,()=>{
    //after 2 seconds we get data-2
    getData3(3)
    //after 2 second we get data-3
  });
})


//Above syntax or way of performing work is considered to be as callback hell, that makes the code so complex to read and understand

/*To solve Problem of callback hell we have a concept called to be Promises.
 Promises in JavaScript
Promise is for eventual completion of task, task or work will be performed either it should be completed or it should not be. 
*/

// Promise syntax
let promise = new Promise((resolve,reject)=>{
  console.log("I am a Promise");
  // resolve(12);//if to fulfill the promise we use resolve() functon created by the JS
  reject("Issue arrises");
});

/*In General programming we do not create Promises on our own, as if we want to get data from the API by requesting, 
API will send us the promise 
then we take out the data from it. 
*/

/*

function getData3(dataId, getNextData)
{
  //API will not return the data in this way
  setTimeout(()=>
    {
    console.log("data-",dataId);
    if(getNextData){
      getNextData();
    }
  },2000)
};

*/

//API return the data in terms of promise

function getData4(dataId, getNextData){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(dataId){
        console.log("Data-",dataId);
        resolve("success");//if get the data then resolve() it 
        if(getNextData){
          getNextData();
        }
      }
    },5000);
  });
}

//This will get the output with a pending Promise
//If we get the data then we should add resolve to it

/* How to use Promises in JS?
There are two methods to use promise means

1) then() = if your promise got fullfilled then use then() method that tell you what to do if promise got fullfilled
2) catch() = if your promise not fulfilled then use catch() methods that tell what to do if promise got rejected.
*/

//Example of then()

const getPromise = () =>{
  return new Promise((resolve,reject)=>{
    console.log("I am a promise file of then()");
    // resolve("Success");
    //reject ya resolve ek time me dono me se ek hi ho sakta h 
    reject("Error..........")
  })
};

let pr = getPromise();

//it is used when promise got fullfilled, also res parameter value == catch() method passing argument
pr.then((res)=>{
  console.log("promise fulfilled:",res)
})

//it is used when promise got rejected, also err parameter value == reject() method passing argument
pr.catch((err)=>{
  console.log("Error",err);
})

// Promise chaining in JavaScript?
// Promise chaining is a technique where multiple asynchronous operations are performed in sequence, 
// where each operation depends on the result of the previous one.

//Example of Promise chaining

function asynFun1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("I am a async function have Data-1");
      resolve("Success of data-1");
    },2000)
  })
}

console.log("Fetching data-1")
let p1 = asynFun1();
p1.then((res)=>{
  console.log(res)
});

function asynFun2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("I am a async function have Data-2");
      resolve("Success of data-2");
    },2000)
  })
}

console.log("Fetching data-2")
let p2 = asynFun2();
p2.then((res)=>{
  console.log(res)
});

//above will shown us the output ek saath kyunki dono function ek saath run ho rahe h,

//Solution for this is to use promise chaining

console.log("Fetching data-1")
let p3 = asynFun1();
p3.then((res)=>{
  console.log(res);
  console.log("Fetching data-2")
  let p4 = asynFun2();
  p4.then((res)=>{
    console.log(res)
  });
});

//Mini-version of above code
/*console.log("Fetching data-1")
asynFun1().then((res)=>{
    console.log("Fetching data-2")
    asynFun2().then((res)=>{});
}); */

//-----------------Promise Chaining------------------------------
getData(1).then((res=>{
  return getData(2);
}).then((res)=>{
  return getData(3);
}).then((res=>{
  console.log("All data fetched successfully",res);
})
));

// Now as we see that Promise chaining is a bit complex to read and understand,
// so to solve this problem we have a concept called async/await in JS.




/* Async/Await in JavaScript
async-await are the keywords used in JavaScript to work with promises in a more readable and synchronous manner.
async function is a function that returns a promise.
await is used to wait for the promise to be resolved or rejected.
*/

//How to make a function async?
async function hi(){
  console.log("Hello World");
}

//Example: I want a function named api() that will return a new promise and also that api() function will provide data 
//with a delay of 2 seconds. 

function api(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Weather Data fetched successfully");
      resolve(200); //200 is the status code of the API that tells the data is fetched successfully
    },2000)
  })
}

//as we know that api() function is an aynchronous function that will return data after 2 seconds 
//so we should use await keyword

//await api(); // await bolega ki pehele api() function ka data aane do phir aage ke kaam hona chahiye 
//but we cannot use await outside the async function, so we need to wrap it in an async function

async function getWeatherData(){
  await api();
}

getWeatherData(); //this will return the data after 2 seconds

//------Implementation of async/await for below code-------------------
function getData5(dataId){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(dataId){
        console.log("Data-",dataId);
        resolve("success");//if get the data then resolve() it 
      }
    },2000);
  });
}

//-------------------Async/Await------------------------------
async function getAllData(){
  await getData5(1);
  await getData5(2);
  await getData5(3);
  setTimeout(()=>{
    console.log("All data fetched successfully")
  },1000);
}

//-------------------Final Code-----------------------------------------
//------------------------------------------------------------------------

/*
asycn-await ka use karne ke liye humme ek function banana padta h tabhi hum await add kar sakte h
-So, we can use IIFE (Immediately Invoked Function Expression) to call the async function immediately.
-IIFE is a function having no name and it is invoked immediately after it is defined.
*/

//Above code can be re-written using IIFE
(async function (){
  await getData5(1);
  await getData5(2);
  await getData5(3);
  setTimeout(()=>{
    console.log("All data fetched successfully")
  },1000);
})();


