const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const roundResult = document.createElement('p')
const divContainer = document.querySelector('.container') 
const divResult = document.createElement('div');

const playerSelection = () => {
    return this;
}
const getComputerChoice = () => {
    const computerChoices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomNumber];
}
    let playerWins = 0;
    let computerWins= 0;
    let fiveResult = '';
const playRound = (playerSelection, computerSelection) => {
    
    playerSelection = playerSelection.target.id
    document.body.after(divContainer,divResult)
    divResult.appendChild(roundResult);
    computerSelection = getComputerChoice();
    if(!playerSelection){
         console.log(playerSelection);
        return;
     }
    if (playerWins > computerWins){fiveResult=`You WON!Well don!`}else if (playerWins<computerWins){
        fiveResult = `You are a lame computer won...`
    } else fiveResult = `It's a tie try again!?`
    if (playerSelection === computerSelection) {
        return roundResult.textContent = `It's a tie!`;
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            playerWins++
            return roundResult.textContent =`You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            computerWins++
            return roundResult.textContent =`You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    
const allBtns = document.querySelector('.container');
allBtns.addEventListener('click', playRound)
