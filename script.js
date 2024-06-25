$(document).ready(function () {
    let playerTotalScore = 0;
    let computerTotalScore = 0;
    let roll = 0;

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function computerScore(dice1, dice2) {
        if (dice === 1 || dice === 1) {
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

    function updateScore() {
        $(`#player-total-score`).text(playerTotalScore);
        $(`#computer-total-score`).text(computerTotalScore);
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

    $('#roll-button')
})
