// get Computer choice
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

function playGame() {      

    let humanScore = 0;
    let computerScore = 0; 

    // Play one round
    function playRound(humanChoice, computerChoice) {
        if(humanChoice === computerChoice){
            return console.log("Tie!");
        } else if((humanChoice === "Rock" && computerChoice === "paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || humanChoice === "Scissors" && computerChoice === "Rock"){
            computerScore++;
            return console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            humanScore++;
            return console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        }
    }

    // Get User choice
    function getHumanChoice() {
        let sign = prompt("rock, paper or scissors?");
        if (sign === "rock") {
            return "Rock";
        }
        else if (sign === "paper"){
            return "Paper";
        }
        else {
            return "Scissors";
        }
    }
    
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Your Score: ${humanScore}`);
                
                
    }

    // const result = playRound(humanChoice, computerChoice);
    // console.log(result);

    if(humanScore > computerScore){
        console.log("Congratulations! you win the game");
    } else if(computerScore > humanScore){
        console.log("You lose the game");        
    } else {
        console.log("You Tie!");        
    }
}

playGame();