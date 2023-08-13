const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDisplay = document.createElement('p')
const divContainer = document.querySelector('.container') 
const divResult = document.createElement('div');
let playerWins = 0;
let computerWins= 0;
let fiveResult = '';
let gamesPlayed = 0;

const playerSelection = () => {
    return this;
}
const getComputerChoice = () => {
    const computerChoices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomNumber];
}
const playRound = (playerSelection, computerSelection) => {
    gamesPlayed++
    playerSelection = playerSelection.target.id
    document.body.after(divContainer,divResult)
    computerSelection = getComputerChoice();
    divResult.appendChild(resultDisplay);
    
    if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
            ) {
                playerWins++
                resultDisplay.textContent =`You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                computerWins++
                resultDisplay.textContent =`You lose! ${computerSelection} beats ${playerSelection}`;
            }
            if (gamesPlayed === 5){
                gamesPlayed=0;
                playerWins > computerWins ? resultDisplay.textContent = `You won but... I'LL BE BACK!` :
                resultDisplay.textContent = `You lost Skynet is being deployed...`
                setTimeout(()=>{
                    divResult.removeChild(resultDisplay);
                },3000)
            }
    }
    
const allBtns = document.querySelectorAll('button');
allBtns.forEach(btn => btn.addEventListener('click', playRound))
