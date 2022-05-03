// Define choices
let choices = ['1rock','2paper','3scissors'];

// Create players
let player = prompt('What is your name', '');
alert(`Welcome ${player} Let's play Rock, Paper, Scissors. You go first.`)

function playerChoice() {
    let playerSelection =  prompt('Choose Rock, Paper or Scissors', '')
    playerSelection = playerSelection.toLowerCase('');

    if (playerSelection === choices[0]) {
        console.log('You played Rock');
        return choices[0]
    } else if (playerSelection === choices[1]) {
        console.log('You played Paper'); 
        return choices[1]
    } else if (playerSelection === choices[2]) {
        console.log('You played Scissors');
        return choices[2]
    } else {
        playerChoice()
    }};

function computerChoice() {
    let computerSelection = Math.floor(Math.random()*choices.length)
    if (computerSelection === 0) {
        console.log('Computer played Rock');
        return choices[0];
    } else if (computerSelection === 1) {
        console.log('Computer played Paper');
        return choices[1];
    } else {
        console.log('Computer played Scissors');
        return choices[2];
    }};

// Start round - check winner, display winner, prompt players to pick a move, display moves. If no winner, repeat round
function round(playerChoice, computerChoice) {
    // check for winner
    let playerWin = 0;
    let computerWin = 0;
    
    if (playerWin < 4 && computerWin < 4) {
        playerChoice();
        computerChoice();
        if (playerChoice > computerChoice) {
            console.log('You win');
            playerWin++
        } else if (computerChoice > playerChoice) {
            console.log('Computer wins');
            computerWin++
        }else {
            console.log('It\'s a tie!');
        }
    } else {
        return;
    }};

let winner = player;

function game() {
    for (let i = 0; i < 5; i++) {
        console.log('Round ' + (i+1));
        round();
    }
    // End game - display winning message
    console.log(`Good game! ${winner} won!`);
};

game()