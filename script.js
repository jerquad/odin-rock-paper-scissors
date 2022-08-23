function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    console.log(rand);
    switch (true) {
        case rand < 1:
            return "rock";
        case rand < 2:
            return "paper";
        default:
            return "scissors";
    }
}