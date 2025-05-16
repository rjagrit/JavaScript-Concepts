// fetch API

/*What is an API ? 
1) API stands for Application Programming Interface.
2) In le man terms, an API is a system or server created by someone that contains some information.
 Let say that system contains the information about the food recepies. Now if someone request for the recipes of a specific food,
 the API will send the information about that food to the user that is called as response. 

3) That means, API work on Reuest and Response cycle. (API is an Interface that return a data that user want.)
4) Hum API ko request dete h, ab vo data kaha se leke ayi ya data kitna accurate h isse apne ko lena dena nhi hota, we only 
   get the response of the particular reuqest 

5) Request is the information that we send to the API and Response is the information that we get from the API.

5) In this chapter we will learn how to do API calls using the ***fetch API***.

The Public API that we will use as they are free api's
https://github.com/public-apis/public-apis

6) Every API has its own documentation that contains the information about how to use the API, 
   what are the endpoints, what are the parameters, what are the methods, what is the response format, etc.

7) API return the data in object format when we request on a particular link, so API's is nothing but the URL endpoints 

Example:  Let say I want to go to Google.com, so our borwser will send a request to the google.com server 
and the server will send the response(webpage) back to the browser in the form of HTML, CSS, JS, etc.

same our system send request to the API endpoint(endpoint is the URL of the API)
and the API will send the response back to our system in the form of JSON object.

8) When we click on the free api link then it will return the data in terms of array of objects.

*/

//We are using below API endpoint to get the data
const url = "https://cataas.com/api/cats?tags=cute";

//Now we will use the fetch API to get the data from the API endpoint
/*
-----------Fetch API--------------
1) fetch api will provide an interface for fetching(sending/receiving) resources.
--to jab bhi Humare pass koi endpoint(URL) hai jisse hum koi request send karna chahte h and that request contain some extra data
  or when we get response(data) from the API then we can use fetch API to get the data.
2) It uses Request and Response Objects.
3) fetch() method is used to fetch a resource

--iske return me a promise milega jo ki resolve hoga jab response milega 

*/

//Syntax of writing fetch API

//fetch(url,[options]) = itna likhne se humara code automaically send a request to the provided endpoint or URL

let promise = fetch(url);// it will return a promise
console.log(promise);

/*
Output of above code:
Promise[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: Response

body: Readable
Streamlocked: false
[[Prototype]]: Readable
StreambodyUsed: false
headers: Headers {}
[[Prototype]]: Headers
append: ƒ append()
delete: ƒ delete()
entries: ƒ entries()
forEach: ƒ forEach()
get: ƒ ()get
SetCookie: ƒ getSetCookie()
has: ƒ has()
keys: ƒ keys()
set: ƒ ()values: ƒ values()constructor: ƒ Headers()Symbol(Symbol.iterator): ƒ entries()Symbol(Symbol.toStringTag): "Headers"[[Prototype]]: Object
ok: true
redirected: false
------status: 200-----> status 200 means success
statusText: ""type: "cors"url: "https://cataas.com/api/cats?tags=cute"[[Prototype]]: Response

*/

//As we Know that there are muliple ways to take our results from the promise like Promise chaining, async await etc. 

//We have to use Asynchronous function to get the data from the API because fetch() will return us a promise

const getData = async() =>{
   console.log("Fetching data from API");
   let response = await fetch(url);// because it is asynchronous work then we need to use await
   console.log(response);//response is in JSON format
   //final data print hone me kuch microseconds lagte h 
}

/*
-When we don't pass options in the fetch() method, then fetch() method create a particular type request called as GET request.
-GET request = The reuqest that is responsible for getting the data from the server. 
-Browser bhi by default GET request hi send karta h jab hum koi URL open karte h
-GET request is the default request type of fetch API

-But we are not able to understand the response because it is in the form of stream, so we need to understand few more things. 

--------------Some of the Terms---------------------
1) AJAX (Asynchronous JavaScript and XML)
2) JSON (JavaScript Object Notation)

-Previously when there is no modern script and other technologies, we send the request to the server and get back our response in terms 
of XML file (data format is in XML format) but now days the data format we get is in JSPN format. 

-JSON (JavaScript Object Notation) that means ab jo data jaa raha h vo object ki form me jaa raha h.
-Upar jo response aa raha h API se vo JSON format me aa raha h.
-Although we get our data in JSON format so AJAX would be called now AJAJ but it is not that much used so presently it was also called
 as 
-----<<<<<<<-----AJAX(in this X means XML but we get our data in JSON format)------------>>>>>>>>-------------

-Whenever we request an API we get a response in JSON format, we neeed to convert that JSON format into a JavaScript object
-So we need to use the .json() method to convert the response into a JSON object

-json() method is also a asynchronous method.
-json() method will return a second promise that resolves with the result of parsing the response body text as JSON.
-json() method [Input = JSON, Output = JavaScript Object], it will return the JavaScript Object that is the usable data for us. 

-Means We get 1st promise from fetch() method and then we get 2nd promise from json() method.
*/

//How to use it?
const getData1 = async() =>{
   console.log("Fetching data from API");
   let response = await fetch(url);// because it is asynchronous work then we need to use await
   console.log(response);//response is in JSON format that is not in readable format
   let data = await response.json();//we need to convert the response into JSON object
   console.log(data);

   //Firstly response will print then the Actaul data will print 
   //print some data
   console.log(data[0].id);//it will print the id of the first object
}

/*
Additional Information in API
A) HTTP Verbs
-Whenever we send request to the API or server that request contains some of HTTP verbs like GET, POST, PUT, DELETE, PATCH etc.
-HTTP verbs tell which type of request you are sending to the server.
-There are 6 types of HTTP verbs that we can use in the fetch API

a) GET = It is used to get the data from the server.
b) POST = It is used to send the data to the server.
c) PUT = It is used to update the data on the server.
d) DELETE = It is used to delete the data from the server.
e) PATCH = It is used to update the data on the server but it will only update the specific data that we want to update.
f) HEAD = It is used to get the headers of the response.


B) HTTP Status Codes
-Whenever we send a request to the server, the server will send us a response with a status code.
-Status code is a 3 digit number that tells us the status of the request.
-There are 5 types of status codes that we can use in the fetch API

1xx = Informational
2xx = Success
3xx = Redirection
4xx = Client Error
5xx = Server Error
*/

