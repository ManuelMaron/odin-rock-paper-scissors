function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return "Paper!";
    } else if (choice === 1){
        return "Rock!";       
    } else {
        return "Scissors!";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("What do you choose?");
    return humanChoice + "!"
}

