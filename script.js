/*
    The Logic for a simple Rock Paper Scissors game created
    for an assignment as part of The Odin Project
*/

const playerButtons = document.querySelectorAll('.button-player');

playerButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        game(e.target.innerText);
    });
});

const playButton = document.querySelector('#button-start');
playButton.addEventListener('click', (e) => {
    startGame();
});

// Randomly return one of three selections
function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    return (rand < 1) ? "Rock" : (rand < 2) ? "Paper" : "Scissors";
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

function changeMessage(textToChange) {
    document.querySelector('.message-box').textContent = textToChange;
}

function setResult(side) {
    let message;
    if (side === 'player') {
        message = 'You Win!';
    }
    else {
        message = 'You Lose!';
    }
    document.querySelector('#result').textContent = message;
}

function allowButton() {
    playerButtons.forEach((button) => {
        if (button.disabled === true) {
            button.disabled = false;
        }
        else {
            button.disabled = true;
        }
    });
}

// Resets the game, enables play
function startGame() {
    allowButton();
    document.querySelectorAll('.score-tab').forEach((tab) => {        
        if (tab.classList.contains('computer-point')) {
            tab.classList.toggle('computer-point');
        }
        if (tab.classList.contains('player-point')) {
            tab.classList.toggle('player-point');
        }
    });
    document.querySelector('#button-start').remove();
    changeMessage('Make a Choice!');
}

// Announces win status, disables play
function endGame() {
    allowButton();
    changeMessage('');
    const startButton = document.createElement('button');
    startButton.textContent = 'Play Again?'
    startButton.addEventListener('click', (e) => {
        startGame();
    });
    startButton.setAttribute('id', 'button-start');
    document.querySelector('.message-box').appendChild(startButton);
}

// Determines results of a round
function game(playerChoice) {    
    let computerChoice = getComputerChoice()
    switch (playRound(playerChoice, computerChoice)) {
        case "W":
            changeMessage(`Computer picks ${computerChoice} ... You Win! Go Again!`);
            scoreUp('player');
            break;
        case "L":
            changeMessage(`Computer picks ${computerChoice} ... You Lose! GO Again!`);
            scoreUp('computer');
            break;
        case "T":
            changeMessage("It's a tie! Go Again!");
            break;
    }
}

// Utilizes the player/computer's point class to determine if a win state has been reached
function scoreUp(side) {
    const tabs = document.querySelectorAll(`#${side}>.score-tab`);
    for (let i = 0; i < tabs.length; i++) {
        if (!tabs[i].classList.contains(`${side}-point`)) {
            tabs[i].classList.toggle(`${side}-point`);
            if (i === tabs.length - 1) {
                setResult(side);
                endGame();
            }
            return;
        }
    }
}

