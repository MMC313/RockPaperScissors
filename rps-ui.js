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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      console.log(playRound(button.id))
    });
  });