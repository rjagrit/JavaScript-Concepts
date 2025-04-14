//How to Handle Event in JavaScript

//1) Access the Element
let butn = document.querySelector("#btn");
console.log(butn);
console.dir(butn);

//2)Write the handler along with object
//There is an event object that consists of all the information about the event that has occurred
//The event object is passed as an argument to the event handler function

butn.onclick =(e)=>{
    console.log(e); 
    console.log("Button Clicked")
}

//There are various ways of Handling event
//1) Inline event handler (Drawback - Can make code bulky and difficult to maintain)
//2) Using JavaScript (node.event=()={}) handling event using function (Drawback - Can only assign one event handler to an event)
//3) Using addEventListener() method - (Recommended) (Advantage - Can assign multiple event handlers to an event)

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", ()=>{
    console.log("Button was Clicked - Handler 1");
});

btn1.addEventListener("click", ()=>{
    console.log("Button was Clicked - Handler 2");
});

// Store the handler in a variable help to remove it later
//This is useful when you want to remove the event handler later
let handler3 = ()=>{
    console.log("Button was Clicked - Handler 3");
};

btn1.addEventListener("click", handler3);

btn1.removeEventListener("click", handler3); //Remove the event handler

//Q. Create a toggle button that changes the screen to dark mode when clicked & light mode when clicked again
let modeBtn = document.querySelector("#changeBgm");
let currMode = "light";

modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        document.body.style.backgroundColor = "black";
        // document.body.style.color = "white";
        modeBtn.innerText = "Light Mode";
        currMode = "dark";
    }else{
        document.body.style.backgroundColor = "white";
        // document.body.style.color = "black";
        modeBtn.innerText = "Dark Mode";
        currMode = "light";
    }
});

//Q. Create a toggle button that changes the screen to dark mode when clicked & light mode when clicked again using ClassList
let modebtn1 = document.querySelector("#modes");
let bodyElement = document.querySelector("body");
let currMode1 = "light";

modebtn1.addEventListener("click",()=>{
    if(currMode1 === "light"){
        currMode1 = "dark";
        bodyElement.classList.add("dark");
        modebtn1.innerText = "Light Mode";
        bodyElement.classList.remove("light");
    }else{
        currMode1 = "light";
        bodyElement.classList.add("light");
        modebtn1.innerText = "Dark Mode";
        bodyElement.classList.remove("dark");
    }
});


//Change the Page using mouseover event
// My Traffuc Light
let colorDiv = document.querySelector("#c1");
colorDiv.addEventListener("mouseover",()=>{
    colorDiv.style.backgroundColor = "red";
});

let colorDiv1= document.querySelector("#c2");
colorDiv1.addEventListener("mouseover",()=>{
    colorDiv1.style.backgroundColor = "blue";
});
let colorDiv2= document.querySelector("#c3");
colorDiv2.addEventListener("mouseover",()=>{
    colorDiv2.style.backgroundColor = "green";
});
let colorDiv3= document.querySelector("#c4");
colorDiv3.addEventListener("mouseover",()=>{
    colorDiv3.style.backgroundColor = "purple";
});

addEventListener("mouseout",()=>{
    colorDiv.style.backgroundColor = "white";
    colorDiv1.style.backgroundColor = "white";
    colorDiv2.style.backgroundColor = "white";
    colorDiv3.style.backgroundColor = "white";
})