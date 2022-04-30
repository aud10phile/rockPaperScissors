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

let playerChoice =  prompt('Choose Rock, Paper or Scissors', '');
playerChoice = playerChoice.toLowerCase('');

if (playerChoice === 'rock') {
    console.log('You played Rock');
} else if (playerChoice === 'paper') {
    console.log('You played Paper'); 
} else if (playerChoice === 'scissors') {
    console.log('You played Scissors');
} else {
    prompt('Please choose Rock, Paper or Scissors', '')
};

let computerChoice = Math.floor(Math.random()*choices.length);

if (computerChoice === 0) {
    console.log('Computer played Rock');
} else if (computerChoice === 1) {
    console.log('Computer played Paper'); 
} else {
    console.log('Computer played Scissors');
};