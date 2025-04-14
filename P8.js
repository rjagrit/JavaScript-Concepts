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