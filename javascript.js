
let topPara = document.querySelector(".message");
let bottomPara = document.querySelector(".score");

let rock = document.querySelector(".rock");
rock.addEventListener("click",()=>{
   topPara.textContent= playRound("ROCK",getComputerChoice())[0];
   bottomPara.textContent = playRound("ROCK",getComputerChoice())[1];
});


let paper = document.querySelector(".paper");
paper.addEventListener("click",()=>{
    topPara.textContent=  playRound("PAPER",getComputerChoice())[0];
    bottomPara.textContent = playRound("PAPER",getComputerChoice())[1];
});


let scissors = document.querySelector(".scissors");
scissors.addEventListener("click",()=>{
    topPara.textContent=  playRound("SCISSORS",getComputerChoice())[0];
    bottomPara.textContent = playRound("SCISSORS",getComputerChoice())[1];
});


function getComputerChoice(){
    let randomGuess = 10*Math.random()
    switch(true){
        case randomGuess<=3:
                return "SCISSORS";
        case randomGuess>3 &&randomGuess<=6:
                return "PAPER";
        case randomGuess>6:
                return "ROCK";
    }
}
let compScore=0;
let userScore=0;
function playRound(playerSelection,computerSelection){
    let winText =`Yay,you won this round`;
    let loseText = `Sorry! You lost this round`;
    if ( playerSelection=="ROCK"&&computerSelection=="PAPER"|| playerSelection=="SCISSORS"&&computerSelection=="ROCK"|| playerSelection=="PAPER"&&computerSelection=="SCISSORS"){
        return [loseText,`Score = Computer : ${compScore=compScore+1}  Player : ${userScore}`];
    }else if(playerSelection=="PAPER"&&computerSelection=="ROCK"||playerSelection=="ROCK"&&computerSelection=="SCISSORS"||playerSelection=="SCISSORS"&&computerSelection=="PAPER"){
        return [winText,`Score = Computer : ${compScore}  Player : ${userScore=userScore+1}`];
    }else if(playerSelection==computerSelection) {
        return [`It's a tie !`,`Score = Computer : ${compScore}  Player : ${userScore}`];
    }
}
