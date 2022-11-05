function getComputerChoice(){
    let randomGuess = 10*Math.random()
    switch(true){
        case randomGuess<=3:
                return "SCISSORS";
        break;
        case randomGuess<=6:
                return "PAPER";
        break;
        default:
                return "ROCK";
    }
}
    let playerPoint;
    let computerPoint;
function playRound(playerSelection,computerSelection,round){
        playerPoint=0;
        computerPoint=0;
    switch (true){
        case playerSelection=="ROCK"&&computerSelection=="PAPER":
        alert(`Round${round+1}:Sorry! You lost this round`);
              return computerPoint=1;
        break;
        case playerSelection=="PAPER"&&computerSelection=="ROCK":
        alert(`Round${round+1}:You win this round`);
               return playerPoint=1;
        break;
        case playerSelection=="ROCK"&&computerSelection=="SCISSORS":
        alert(`Round${round+1}:You win this round`);
               return playerPoint=1;
        break;
        case playerSelection=="SCISSORS"&&computerSelection=="ROCK":
        alert(`Round${round+1}:Sorry! You lost this round`);
               return computerPoint=1;
        break;
        case playerSelection=="PAPER"&&computerSelection=="SCISSORS":
        alert(`Round${round+1}:Sorry! You lost this round`);
               return computerPoint=1;
        break;
        case playerSelection=="SCISSORS"&&computerSelection=="PAPER":
        alert(`Round${round+1}:You win this round`);
                return playerPoint=1;
        break;
        default:
                alert(`Round${round+1}:It's a tie`);
    }
}
    let playerScore=0 ;
    let computerScore=0 ;
for(let i=0;i<=4;i++){
playerSelection = prompt("Choose ROCK,PAPER or SCISSORS.").toUpperCase();
playRound(playerSelection,getComputerChoice(),i);
playerScore=playerScore+playerPoint;
computerScore=computerScore+computerPoint;
}
playerScore>computerScore?alert(`You won the score is ${playerScore} - ${computerScore}`):alert(`you lose the score is ${playerScore}-${computerScore}`);
