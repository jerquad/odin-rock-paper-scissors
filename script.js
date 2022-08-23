function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    return (rand < 1) ? "rock" : (rand < 2) ? "paper" : "scissors";
    }
