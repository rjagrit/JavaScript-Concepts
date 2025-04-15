let boxes = document.querySelectorAll(".box");
let rstButton = document.querySelector("#rst");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnOfO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turnOfO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnOfO){
            box.innerText = "O";
            turnOfO = false;
            
        }else{
            box.innerText = "X";
            turnOfO = true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";//Clear all the boxes values
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winPattern){
        //Storing position values in variables
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        //Checking if all three positions are not empty and if they are equal
        //If they are equal, then we have a winner
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner is ", pos1Val);
                disableBoxes();
                showWinner(pos1Val);
            }

        }
    }
};

rstButton.addEventListener("click", resetGame);
        /*
        //find individual index values

        For accessing Index Numbers -> pattern[0], pattern[1], pattern[2]
        For accessing Values inside Index Numbers -> boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText
        console.log(pattern[0], pattern[1], pattern[2]);// index numbers
        console.log(
            boxes[pattern[0]].innerText,//position 0
            boxes[pattern[1]].innerText,//position 1
            boxes[pattern[2]].innerText //position 2
        );// values inside index numbers

        */