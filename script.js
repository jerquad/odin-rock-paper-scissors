/*
    The Logic for a simple Rock Paper Scissors game created
    for an assignment as part of The Odin Project
*/

// Randomly return one of three selections
function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    return (rand < 1) ? "Rock" : (rand < 2) ? "Paper" : "Scissors";
    }

/* 
    Prompt the player for choice, case insensitive, requires 
    correct choice, allows for singular scissor
*/
function getPlayerChoice() {
    let playerChoice;
    while (true) {
        playerChoice = prompt("Your Up! Rock, Paper, or Scissors?!");
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
        if (playerChoice == "Scissor") {
            playerChoice += "s";
        }
        if (playerChoice == "Rock" || playerChoice == "Paper" || playerChoice == "Scissors") {
            break;
        }
    }
    return playerChoice;
}

// Returns a victory condition based on passed strings
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

// Compares two player selections determines win/loss/tie
function playRound(playerChoice, computerChoice) {
    if (isWin(playerChoice, computerChoice)) {
        return "W";
    }
    else if (isWin(computerChoice, playerChoice)) {
        return "L";
    }
    else {
        return "T";
    }
}

// loops rounds of play until at least 3 points scored by either player
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerChoice, 
        computerChoice;
    for (let i = 0; i < 5; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        switch (playRound(playerChoice, computerChoice)) {
            case "W":
                console.log(`You Win! ${playerChoice} beats ${computerChoice}!`);
                playerScore++;
                break;
            case "L":
                console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
                computerScore++
                break;
            case "T":
                console.log("It's a tie! Go Again!");
                i--;
                break;
        }
        console.log(`Player: ${playerScore}  Computer: ${computerScore}`);
        if (playerScore == 3 || computerScore == 3) {
            break;
        }
    }
    const result = (playerScore > computerScore) 
        ? "You Win! Great Job!" 
        : "You Lose! Better Luck Next Tme!"
    console.log(`FINAL: ${result}`);
}