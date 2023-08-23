
let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3) ;
    if (randomNumber==0) 
        return 'ROCK';
    else if (randomNumber==1) 
        return 'PAPER';
    else
        return 'SCISSOR';
};

function playRound(playerSelection,computerSelection){
    if (playerSelection == 'ROCK' && computerSelection == 'ROCK'){
        return 'Tie';
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'PAPER'){
        return 'You lose';
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSOR'){
        return 'You win';
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        return 'You win';
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'SCISSOR'){
        return 'You lose';
    }else if (playerSelection == 'PAPER' && computerSelection == 'PAPER'){
        return 'Tie';
    }
    else if (playerSelection == 'SCISSOR' && computerSelection == 'ROCK'){
        return 'You lose';
    }else if (playerSelection == 'SCISSOR' && computerSelection == 'PAPER'){
        return 'You win';
    }
    else if (playerSelection == 'SCISSOR' && computerSelection == 'SCISSOR'){
        return 'Tie';
    }else{
        return 'Invalid choice';
    }
}



function game(){
    let yourScore = 0;
    let computerScore = 0;
    
    let buttons = document.querySelectorAll('button');
    let container = document.querySelector('.container');
    let displayPlayerSelection = document.createElement('h1');
    let displayComputerSelection = document.createElement('h1');
    let displayResult = document.createElement('h1');
    let displayPlayerScore = document.createElement('h1');
    let displayComputerScore = document.createElement('h1');
    let displayFinalResult = document.createElement('h1');
    let displayGameOver= document.createElement('h1');
    buttons.forEach((button) =>{
        button.addEventListener('click',(event)=>{
            if (yourScore >= 5 || computerScore >= 5) {
                displayGameOver.textContent = 'The game is over'
                container.appendChild(displayGameOver);
                return; // Break the loop if the game is already over
            }
            const playerSelection = event.target.innerText;
            const computerSelection = getComputerChoice();
            displayPlayerSelection.textContent = `You chose:${playerSelection.toUpperCase()}`;
            container.appendChild(displayPlayerSelection);
            displayComputerSelection.textContent = `Computer chose:${computerSelection}`;
            container.appendChild(displayComputerSelection);
            let result = playRound(playerSelection.toUpperCase(),computerSelection);
            if (result=='You win'){
                yourScore++;
            }else if (result == 'You lose'){
                computerScore++;
            }
            displayResult.textContent = `${result}`;
            displayPlayerScore.textContent = `Your Score: ${yourScore}`;
            displayComputerScore.textContent = `Computer Score: ${computerScore}`
            container.appendChild(displayResult);
            container.appendChild(displayPlayerScore);
            container.appendChild(displayComputerScore);

            if (yourScore >= 5){
                displayFinalResult.textContent = 'You won the game';
                container.appendChild(displayFinalResult);
            }else if (computerScore >=5){
                displayFinalResult.textContent = 'Computer won the game';
                container.appendChild(displayFinalResult);
            }
        });
    });
}
game();

