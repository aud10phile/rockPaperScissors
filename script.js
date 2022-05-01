// Defince choices
let choices = ['rock','paper','scissors'];

// Create players
function playerChoice() {
    let playerSelection =  prompt('Choose Rock, Paper or Scissors', '')
    playerSelection = playerSelection.toLowerCase('');

    if (playerSelection === 'rock') {
        console.log('You played Rock');
        return 'rock'
    } else if (playerSelection === 'paper') {
        console.log('You played Paper'); 
        return 'paper'
    } else {
        console.log('You played Scissors');
        return 'scissors'
    }};

function computerChoice() {
    let computerSelection = Math.floor(Math.random()*choices.length)
    if (computerSelection === 0) {
        console.log('Computer played Rock');
        return 'rock'
    } else if (computerSelection === 1) {
        console.log('Computer played Paper');
        return 'paper'
    } else {
        console.log('Computer played Scissors');
        return 'scissors'
    };
}

// Define superiority
function superiority() {
    'rock' > 'scissors'
    'scissors' > 'paper'
    'paper' > 'rock'
}

// Start round - check winner, display winner, prompt players to pick a move, display moves. If no winner, repeat round
function round(playerChoice, computerChoice) {
    // check for winner
    if (computerChoice > playerChoice) {
        console.log('Computer wins')
        return 'Computer wins';
    } else if (playerChoice > computerChoice) {
        console.log('Player wins')
        return 'Player wins';
    } else {
        console.log('It\'s a tie!')
        return 'It\'s a tie!';
    }};

function game() {
    for (let i = 0; i < 5; i++) {
        round();
        playerChoice();
        computerChoice();
}};

game();

// End game - display winning message