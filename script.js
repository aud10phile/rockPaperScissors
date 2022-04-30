/* Create players
Define superiority
Start round 1 - check winner, display winner, prompt players to pick a move, display moves
If no winner, repeat round
Start round 2 - check winner, display winner, prompt players to pick a move, display moves
If no winner, repeat round
Start round 3 - check winner (if one player has two wins, end game), display winner, prompt players to pick a move, display moves
If no winner, repeat round
End game - display winning message */

let playerChoice =  prompt('Choose Rock, Paper or Scissors', '')
playerChoice = playerChoice.toLowerCase('')

if (playerChoice === 'rock') {
    console.log('You chose Rock');
} else if (playerChoice === 'paper') {
    console.log('You chose Paper'); 
} else if (playerChoice === 'scissors') {
    console.log('You chose Scissors');
} else {
    prompt('Please choose Rock, Paper or Scissors', '')
};