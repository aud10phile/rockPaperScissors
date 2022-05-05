// Define choices
const choices = ['rock', 'paper', 'scissors'];

// Create players
let player = prompt('What is your name', '');
alert(`Welcome ${player} Let's play Rock, Paper, Scissors.`)

function player() {
    let player = prompt('Choose Rock, Paper or Scissors', '')
    player = player.toLowerCase('');

    if (player === choices[0]) {
        console.log('You played Rock');
        console.log(player);
        return player;
    } else if (player === choices[1]) {
        console.log('You played Paper');
        console.log(player);
        return player;
    } else if (player === choices[2]) {
        console.log('You played Scissors');
        console.log(player);
        return player;
    } else {
        // player()
    }
};

function computer() {
    let computer = Math.floor(Math.random() * choices.length)
    if (computer === 0) {
        console.log('Computer played Rock');
        console.log(computer);
        return computer;
    } else if (computer === 1) {
        console.log('Computer played Paper');
        console.log(computer);
        return computer;
    } else {
        console.log('Computer played Scissors');
        console.log(computer);
        return computer;
    }
};

// Start round - check winner, display winner, prompt players to pick a move, display moves. If no winner, repeat round
function round(player, computer) {
    // check for winner
    /* let playerWin = 0;
    let computerWin = 0; */
    switch (true) {
        case (player === computer):
            console.log('It\'s a tie!')
            break
        case (player === choices[0] && computer === choices[2]):
            console.log('Rock beats scissors, you win!')
            break
        case (player === choices[1] && computer === choices[0]):
            console.log('Paper beats rock, you win!')
            break
        case (player === choices[2] && computer === choices[1]):
            console.log('Scissors beat paper, you win!')
            break
        case (computer === choices[0] && paperChoice === choices[2]):
            console.log('Rock beats scissors, the computer wins!')
            break
        case (computer === choices[1] && paperChoice === choices[0]):
            console.log('Paper beats rock, the computer wins!')
            break
        case (computer === choices[2] && paperChoice === choices[1]):
            console.log('Scissors beat paper, the computer wins!')
            break
    }
};

let winner = player;

function game() {
    for (let i = 0; i < 5; i++) {
        console.log('Round ' + (i + 1));
        player();
        computer();
        round();
    }
    // End game - display winning message
    console.log(`Good game! ${winner} won!`);
};

game()