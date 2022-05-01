// Defince choices
let choices = ['rock','paper','scissors'];

// Create players
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
        return choices[0]
    } else if (computerSelection === 1) {
        console.log('Computer played Paper');
        return choices[1]
    } else {
        console.log('Computer played Scissors');
        return choices[2]
    };
}

// Define superiority
function superiority() {
    // rock beats scissors
    choices[0] > choices[2];
    // scissors beats paper
    choices[2] > choices[1];
    // paper beats rock
    choices[1] > choices[0];
}

// Start round - check winner, display winner, prompt players to pick a move, display moves. If no winner, repeat round
function round(playerChoice, computerChoice) {
    // check for winner
    if (computerChoice > playerChoice) {
        console.log('Computer wins');
    } else if (playerChoice > computerChoice) {
        console.log('Player wins');
    } else {
        console.log('It\'s a tie!');
    }};

function game() {
    for (let i = 0; i < 5; i++) {
        console.log('Round ' + (i+1))
        round();
        playerChoice();
        computerChoice();
}};

game();

// End game - display winning message