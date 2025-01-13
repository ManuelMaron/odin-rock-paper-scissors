function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return "Paper"
    } else if (choice === 1){
        return "Rock"       
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice){
        return console.log("Tie!");
    } else if((humanChoice === "Rock" && computerChoice === "paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || humanChoice === "Scissors" && computerChoice === "Rock"){
        computerScore++
        return console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    } else {
        humanScore++
        return console.log(`You Win! ${humanChoice} beats ${computerChoice}`);               
    }
}

playRound(humanChoice, computerChoice);
