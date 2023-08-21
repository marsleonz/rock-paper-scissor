console.log("this works");

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
    for(let i = 0 ; i <= 4 ; i++){
        const playerSelection = prompt("Enter your choice");
        const computerSelection = getComputerChoice();
        console.log("You chose: ",playerSelection.toUpperCase());
        console.log("Computer chose: ",computerSelection);
        let result = playRound(playerSelection.toUpperCase(),computerSelection);
        if (result=='You win'){
            yourScore++;
        }else if (result == 'You lose'){
            computerScore++;
        }
        console.log(result);
        console.log("Your Score:",yourScore);
        console.log("Computer Score:",computerScore);
    }
    if (yourScore > computerScore){
        console.log("You win this game")
    }else if(yourScore < computerScore){
        console.log("Computer wins this game")
    }else{
        console.log("Game is tied")
    }
}
game();

