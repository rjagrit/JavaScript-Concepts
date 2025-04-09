// Q. Create a h2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using Js.
let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText= h2.innerText+" from Apna College students";
console.dir(h2.innerText);

//Q. Create 3 divs with common class name - "box". Access them and add some unique text to each of them.

let divs=document.querySelectorAll(".box");
console.dir(divs);

//Print all values of div using loop
for(let div of divs){
    console.log(div.innerText);
}

//change in all divs using loop
let idx=1;
for(let div of divs){
    div.innerText="Unique Value "+idx;
    idx++;
}
//Print all values of div using loop
for(let div of divs){
    console.log(div.innerText);
}
// Changing individual divs using index

// divs[0].innerText="Unique Value 1";
// divs[1].innerText="Unique Value 2";
// divs[2].innerText="Unique Value 3";
