let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let computerSelection;
	let dice;
	dice = Math.floor(Math.random(1) * 3 + 1);

	if (dice == 1) {
		computerSelection = 'Rock';
	} else if (dice == 2) {
		computerSelection = 'Paper';
	} else if (dice == 3) {
		computerSelection = 'Scissors';
	}

	console.log(computerSelection);
	return computerSelection;
}

function getPlayerChoice() {
	let playerSelection = prompt('Rock, Paper or Scissors');
	return playerSelection;
}

function playRound(player, computer) {
	switch (computer) {
		case 'Rock':
			if (player == 'Rock') {
				console.log('Draw');
			} else if (player == 'Paper') {
				console.log('Players Wins');
				playerScore++;
			} else if (player == 'Scissors') {
				console.log('Computer Wins');
				computerScore++;
			}
			break;

		case 'Paper':
			if (player == 'Rock') {
				console.log('Computer Wins');
				computerScore++;
			} else if (player == 'Paper') {
				console.log('Draw');
			} else if (player == 'Scissors') {
				console.log('Players Wins');
				playerScore++;
			}
			break;

		case 'Scissors':
			if (player == 'Rock') {
				console.log('Players Wins');
				playerScore++;
			} else if (player == 'Paper') {
				console.log('Computer Wins');
				computerScore++;
			} else if (player == 'Scissors') {
				console.log('Draw');
			}
			break;
	}
}

function game() {
	while (playerScore < 5 && computerScore < 5) {
		playRound(getPlayerChoice(), getComputerChoice());
		console.log('Player: ' + playerScore, 'Computer: ' + computerScore);
	}
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('scissors');

//game();
