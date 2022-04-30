/* Create players
Define superiority
Start round 1 - check winner, display winner, prompt players to pick a move, display moves
If no winner, repeat round
Start round 2 - check winner, display winner, prompt players to pick a move, display moves
If no winner, repeat round
Start round 3 - check winner (if one player has two wins, end game), display winner, prompt players to pick a move, display moves
If no winner, repeat round
End game - display winning message */

let choices = ['rock','paper','scissors'];

function playerChoice() {
    let playerChoice =  prompt('Choose Rock, Paper or Scissors', '')
    playerChoice = playerChoice.toLowerCase('');

    if (playerChoice === 'rock') {
        console.log('You played Rock');
        return 'rock'
    } else if (playerChoice === 'paper') {
        console.log('You played Paper'); 
        return 'paper'
    } else {
        console.log('You played Scissors');
        return 'scissors'
    };}

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

function round(playerChoice, computerChoice) {
    // check for winner
    if (computerChoice > playerChoice) {
        return 'Computer wins';
    } else if (playerChoice > computerChoice) {
        return 'Player wins';
    } else {
        return 'It\'s a tie!';
    }};

function game() {
    for (let i = 0; i < 5; i++) {

}}