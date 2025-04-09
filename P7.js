//Access the div
let divElement = document.querySelector("div");
console.log(divElement);
console.dir(divElement);

//Access the attributes of the div element
let idValue = divElement.getAttribute("id");
console.log(idValue);
console.dir(idValue);

let nameValue = divElement.getAttribute("name");
console.log(nameValue);

//Access the class of the p element
let paraValue = document.querySelector("p")

console.log(paraValue.getAttribute("class"));
// console.log(paraValue.getAttribute("class"));

//set the attribute value
//set the class name of p element from class to newPara

console.log(paraValue.setAttribute("class", "newPara"));

//Can change styling in JavaScript
let divElementStyle = document.querySelector("#box1");
console.log(divElementStyle);
divElementStyle.style.backgroundColor = "green";

//Creating elements
let btn = document.createElement("button");
btn.innerText = "Click Me Fast";

//Add the button after the Unordered list

//1st Access the div
let divElement2 = document.querySelector("#box1");
//2nd append it 
divElement2.append(btn);//append adds the element at the end (inside)

let heading1 = document.createElement("h1");
heading1.innerText = "Using Prepend to add the element at the beginning of the div";
heading1.style.fontSize = "20px";
divElement2.prepend(heading1);//prepend adds the element at the beginning (inside)

let paraTag = document.createElement("p");
paraTag.innerText = "This is a paragraph tag created in JS";
divElement2.before(paraTag);//before adds the element before the div (outside)

let imgTag = document.createElement("img");
divElement2.after(imgTag);//after adds the element after the div (outside)

let bodyElement = document.querySelector("body");
let heading3=document.createElement("h1");
heading3.innerHTML="<i>Heading created in JS</i>";
bodyElement.prepend(heading3);

//Q. Create a new button element. Give it a text "click me", background color of red and text color of white.
let btn2 = document.createElement("button");
btn2.innerText = "Click Me";
btn2.style.backgroundColor = "red";
btn2.style.color = "white";
btn2.style.fontSize = "20px";

let bodyElement2 = document.querySelector("body");
bodyElement2.prepend(btn2);

 //Q. Create a <p> tag in html, give it a class and some styling.
 //Now create a new class in CSS and try to append this class to the <p> element.
let paraTag1 = document.querySelector(".paraStyling");

