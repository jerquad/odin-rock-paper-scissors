function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    return (rand < 1) ? "Rock" : (rand < 2) ? "Paper" : "Scissors";
    }

function getPlayerChoice() {
    return selection = prompt("Rock Paper or Scissor?").toLowerCase();
}

function isWin(us, them) {
    switch (true) {
        case us == "Rock" && them == "Scissors":
            return true;
        case us == "Scissors" && them == "Paper":
            return true;
        case us == "Paper" && them == "Rock":
            return true;
        default:
            return false;
    }
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if (isWin(playerChoice, computerChoice)) {
        console.log(`You Win! ${playerChoice} beats ${computerChoice}!`);
    }
    else if (isWin(computerChoice, playerChoice)) {
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
    }
    else {
        console.log("It's a tie!")
    }
}
