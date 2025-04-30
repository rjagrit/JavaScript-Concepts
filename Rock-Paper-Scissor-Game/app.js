let userScore = 0;
let computerScore = 0;

//Accessing elements

const choices = document.querySelectorAll(".logo");
const mssg = document.querySelector("#resultMsg");
const userScorePara = document.querySelector("#usScore");
const ComputerScorePara = document.querySelector("#cpScore");

const computerChoice = () => {
    const options = ["rock", "paper", "scissors"];//Array Options 
    //Any Math.random() number multiplied by Number N we get range 0 to (N-1)
    //Math.random() give us random number
    //Math.floor() help us to remove all numbers after decimal
    const randIdx = Math.floor(Math.random() * 3); //That number acts as index number
    return options[randIdx];
}

const drawGame = () => {
    mssg.innerText = "Match Draw";
}

const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = `User Score : ${userScore}`
        mssg.innerText = "You win!";
    }else{
        computerScore++;
        ComputerScorePara.innerText = `Computer Score : ${computerScore}`
        mssg.innerText = "You lose!";
    }

}

const playGame = (userChoice) => {
    document.querySelector("#userChoice").innerText=`User got : ${userChoice}`;

    const compChoice = computerChoice();//Computer choice
    document.querySelector("#compChoice").innerText=`Computer got : ${compChoice}`;
    
    document.querySelector(".container-2").style.display="flex";

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    // we will get individual div
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked",choiceId)
        playGame(userChoice);
    })
})