// Define choices
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
        return choices[0];
    } else if (computerSelection === 1) {
        console.log('Computer played Paper');
        return choices[1];
    } else {
        console.log('Computer played Scissors');
        return choices[2];
    }};

// Define superiority


// Start round - check winner, display winner, prompt players to pick a move, display moves. If no winner, repeat round
function round(playerChoice, computerChoice) {
    // check for winner
    if (playerChoice == choices[0] && computerChoice == choices[2]) {
        console.log('You wins');
    } else if (playerChoice == choices[2] && computerChoice == choices[1]) {
        console.log('You wins');
    } else if (playerChoice == choices[1] && computerChoice == choices[0]) {
        console.log('You wins');
    if (computerChoice == choices[0] && playerChoice == choices[2]) {
        console.log('Computer wins');
    } else if (computerChoice == choices[2] && playerChoice == choices[1]) {
        console.log('Computer wins');
    } else if (computerChoice == choices[1] && playerChoice == choices[0]) {
        console.log('Computer wins');
    }else {
        console.log('It\'s a tie!');
    }}};

function game() {
    for (let i = 0; i < 5; i++) {
        console.log('Round ' + (i+1));
        playerChoice();
        computerChoice();
        round();
    }
    // End game - display winning message
    console.log('Good game!');
};

game()