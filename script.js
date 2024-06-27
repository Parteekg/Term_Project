$(document).ready(function () {
    let playerTotalScore = 0;
    let computerTotalScore = 0;
    let rolls = 0;

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function calculateScore(dice1, dice2) {
        if (dice1 === 1 || dice2 === 1) {
            return 0;
        }
        if (dice1 === dice2) {
            return (dice1 + dice2) * 2;
        }
        return dice1 + dice2;
    }

    function updateDiceImages(dice1, dice2, player) {
        $(`#${player}-dice1`).attr('src', `images/dice${dice1}.jpg`);
        $(`#${player}-dice2`).attr('src', `images/dice${dice2}.jpg`);
    }

    function updateScores() {
        $('#player-total-score').text(playerTotalScore);
        $('#computer-total-score').text(computerTotalScore);
    }

    function resetGame() {
        playerTotalScore = 0;
        computerTotalScore = 0;
        rolls = 0;
        $('#player-current-roll').text(0);
        $('#computer-current-roll').text(0);
        updateScores();
        $('#message').text('');
        updateDiceImages(1, 1, 'player');
        updateDiceImages(1, 1, 'computer');
    }


    $('#roll-button').click(function () {
        if (rolls < 3) {
            let playerDice1 = rollDice();
            let playerDice2 = rollDice();
            let computerDice1 = rollDice();
            let computerDice2 = rollDice();

            let playerScore = calculateScore(playerDice1, playerDice2);
            let computerScore = calculateScore(computerDice1, computerDice2);

            playerTotalScore += playerScore;
            computerTotalScore += computerScore;

            $('#player-current-roll').text(playerScore);
            $('#computer-current-roll').text(computerScore);

            updateDiceImages(playerDice1, playerDice2, 'player');
            updateDiceImages(computerDice1, computerDice2, 'computer');

            updateScores();
            rolls++;

            if (rolls === 3) {
                if (playerTotalScore > computerTotalScore) {
                    $('#message').text('Player Wins!');
                } else if (computerTotalScore > playerTotalScore) {
                    $('#message').text('Computer Wins!');
                } else {
                    $('#message').text('It\s a Tie!');
                }
            }
        }
    });

    $('#reset-button').click(function () {
        resetGame();
    });

    resetGame();
});
