function computerPlay(){
    let choice = ["Rock","Paper","Scissors"];
   return choice[Math.floor(Math.random()*3)];
}

function playRound(playerSelection,computerSelection){
    computerSelection = computerPlay();
    if(playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors"){
        return "You win! Rock beats Scissors";
    } else if(playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock"){
        return "You win! Paper beats Rock";
    } else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper"){
        return "You win! Scissors beats Paper";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock"){
        return "You lose! Rock beats Scissors";
    } else if(playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors"){
        return "You lose! Scissors beats Paper";
    } else if(playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper"){
        return "You lose! Paper beats Rock";
    } else if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        return "It's a tie!";
    }
    
}

function rockRound(){
   console.log(playRound("rock"));
}
function paperRound(){
    console.log(playRound("paper"));
}
function scissorsRound(){
    console.log(playRound("scissors"));
}

const btn1 = document.querySelector(".R");
btn1.addEventListener("click",rockRound);

const btn2 = document.querySelector(".P");
btn2.addEventListener("click",paperRound);

const btn3 = document.querySelector(".S");
btn3.addEventListener("click",scissorsRound);