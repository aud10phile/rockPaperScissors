// Define choices
const choices = ['rock', 'paper', 'scissors'];

// Create players
let player = prompt('What is your name', '');
alert(`Welcome ${player} Let's play Rock, Paper, Scissors. You go first.`)

function playerChoice() {
    let playerChoice = prompt('Choose Rock, Paper or Scissors', '')
    playerChoice = playerChoice.toLowerCase('');

    if (playerChoice === choices[0]) {
        console.log('You played Rock');
        console.log(playerChoice);
        return playerChoice;
    } else if (playerChoice === choices[1]) {
        console.log('You played Paper');
        console.log(playerChoice);
        return playerChoice;
    } else if (playerChoice === choices[2]) {
        console.log('You played Scissors');
        console.log(playerChoice);
        return playerChoice;
    } else {
        playerChoice()
    }
};

function computerChoice() {
    let computerChoice = Math.floor(Math.random() * choices.length)
    if (computerChoice === 0) {
        console.log('Computer played Rock');
        console.log(computerChoice);
        return computerChoice;
    } else if (computerChoice === 1) {
        console.log('Computer played Paper');
        console.log(computerChoice);
        return computerChoice;
    } else {
        console.log('Computer played Scissors');
        console.log(computerChoice);
        return computerChoice;
    }
};

// Start round - check winner, display winner, prompt players to pick a move, display moves. If no winner, repeat round
function round(playerChoice, computerChoice) {
    // check for winner
    /* let playerWin = 0;
    let computerWin = 0; */
    switch (true) {
        case (playerChoice === computerChoice):
            console.log('It\'s a tie!')
            break
        case (playerChoice === choices[0] && computerChoice === choices[2]):
            console.log('Rock beats scissors, you win!')
            break
        case (playerChoice === choices[1] && computerChoice === choices[0]):
            console.log('Paper beats rock, you win!')
            break
        case (playerChoice === choices[2] && computerChoice === choices[1]):
            console.log('Scissors beat paper, you win!')
            break
        case (computerChoice === choices[0] && paperChoice === choices[2]):
            console.log('Rock beats scissors, the computer wins!')
            break
        case (computerChoice === choices[1] && paperChoice === choices[0]):
            console.log('Paper beats rock, the computer wins!')
            break
        case (computerChoice === choices[2] && paperChoice === choices[1]):
            console.log('Scissors beat paper, the computer wins!')
            break
    }};

let winner = player;

function game() {
    for (let i = 0; i < 5; i++) {
        console.log('Round ' + (i + 1));
        playerChoice();
        computerChoice();
        round();
    }
    // End game - display winning message
    console.log(`Good game! ${winner} won!`);
};

game()