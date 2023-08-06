const playRound = (playerSelection, computerSelection) => {
    
    let roundResult;
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        roundResult = `Tie! Go again ?`
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        roundResult = `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        roundResult=`You won! ${playerSelection} beats ${computerSelection}`

    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        roundResult = `You won! ${playerSelection} beats ${computerSelection}`

    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`

    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        roundResult = `You won! ${playerSelection} beats ${computerSelection}`

    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`
    }

    // console.log(`Player : ${playerSelection}, Computer : ${computerSelection}`);
    console.log(roundResult);
  }

//   console.log(playRound(playerSelection, computerSelection));   
  
const game = () => {
    for (let i=1; i<=5; i++){
        const getComputerChoice = () => {
            const arrayOfChoices = ['rock', 'paper', 'scissors']
            let random = Math.floor(Math.random()*arrayOfChoices.length);
            return arrayOfChoices[random];
        }    
        const playerSelection = prompt("Rock , Paper , Scissors", "");
        const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    }
}
game();