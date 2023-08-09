const getComputerChoice = () => {
    const computerChoices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomNumber];
}
    let playerWins = 0;
    let computerWins= 0;
    let fiveResult = '';
const playRound = (playerSelection, computerSelection) => {
     
    playerSelection = playerSelection.toLowerCase();
    if (playerWins > computerWins){fiveResult=`You WON!Well don!`}else if (playerWins<computerWins){
        fiveResult = `You are a lame computer won...`
    } else fiveResult = `It's a tie try again!?`
    if (playerSelection === computerSelection) {
        return `It's a tie!`;
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerWins++
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerWins++
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const game = () => {
    const playerSelection = prompt('Enter your choice: rock, paper, or scissors');
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}
for (let i = 0; i < 5; i++) {
    game();
    if(i === 4) {
        console.log(fiveResult);
    } 
}