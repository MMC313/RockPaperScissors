let cScore = 0;
let pScore = 0;

function disable(){
    rock.disabled = true
    paper.disabled = true
    scissors.disabled = true
}

function enable(){
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    pScore=0;
    ps.textContent=`You score is: ${pScore}`;
    cScore=0;
    cs.textContent=`Computer score is: ${cScore}`;
    message.textContent="";
}


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
const result = document.querySelector("#result");
const cs = document.querySelector(".cscore");
const ps = document.querySelector(".pscore");
const message = document.querySelector(".message")
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const reset = document.querySelector(".reset")


ps.textContent=`You score is: ${pScore}`;
cs.textContent=`Computer score is: ${cScore}`;


buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        result.textContent = playRound(button.id);
        if(result.textContent.includes("win")){
            pScore++;
            ps.textContent=`Your score is: ${pScore}`;
        }else if(result.textContent.includes("lose")){
            cScore++;
            cs.textContent=`Computer score is: ${cScore}`;
        }
        if(pScore === 5){
            message.textContent="You win! You got 5 points first!";
            disable();
            
        }else if(cScore === 5){
            message.textContent="You lose! The computer got 5 points first!"
            disable();

        }
    });
});

reset.addEventListener("click",()=>{
    enable();
})








