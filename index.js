let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let winnerOfTheRound = '';

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
	return computerSelection;
}

function getPlayerChoice() {
	return playerSelection;
}

function setPlayerChoice(selection) {
	playerSelection = selection;
}

function playRound(player, computer) {
	switch (computer) {
		case 'Rock':
			if (player == 'Rock') {
				console.log('Draw');
			} else if (player == 'Paper') {
				console.log('Players Wins');
				winner = 'Player';
				playerScore++;
			} else if (player == 'Scissors') {
				console.log('Computer Wins');
				winner = 'Computer';
				computerScore++;
			}
			break;

		case 'Paper':
			if (player == 'Rock') {
				console.log('Computer Wins');
				winner = 'Computer';
				computerScore++;
			} else if (player == 'Paper') {
				console.log('Draw');
			} else if (player == 'Scissors') {
				console.log('Players Wins');
				winner = 'Player';
				playerScore++;
			}
			break;

		case 'Scissors':
			if (player == 'Rock') {
				console.log('Players Wins');
				winner = 'Player';
				playerScore++;
			} else if (player == 'Paper') {
				console.log('Computer Wins');
				winner = 'Computer';
				computerScore++;
			} else if (player == 'Scissors') {
				console.log('Draw');
			}
			break;
		default:
			break;
	}
}

function game() {
	if (playerScore < 5 && computerScore < 5) {
		playRound(getPlayerChoice(), getComputerChoice());
		if (winner === '') {
			winner = 'Draw';
			roundWinnerText.textContent = "It's a " + winner;
		} else {
			gameInfoText.textContent =
				'Player: ' + playerScore + ' Computer: ' + computerScore;
			roundWinnerText.textContent = winner + ' Won the round';
		}

		console.log('Player: ' + playerScore + ' Computer: ' + computerScore);
		winner = '';
	}
	if (computerScore == 5 || playerScore == 5) {
		if (computerScore > playerScore) {
			roundWinnerText.textContent = 'COMPUTER HAS WON THE GAME!';
		} else {
			roundWinnerText.textContent = 'PLAYER HAS WON THE GAME!';
		}
	}
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const gameInfoText = document.querySelector('#gameInfoText');
const roundWinnerText = document.querySelector('#winner');

rock.addEventListener('click', function () {
	setPlayerChoice('Rock');
	game();
});
paper.addEventListener('click', function () {
	setPlayerChoice('Paper');
	game();
});
scissors.addEventListener('click', function () {
	setPlayerChoice('Scissors');
	game();
});
