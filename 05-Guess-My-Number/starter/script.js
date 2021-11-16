'use strict';

const secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function() {
  
   const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No number';
        // When player wins
    } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;

    }    
            // When guess is too high
   } else if (guess > secretNumber) {
    if (score > 1) {
        compareNumber(guess, secretNumber);
    } else {
        score--;
        gameOver(score);
    }
        // When guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            compareNumber(guess, secretNumber);
        } else {
            score--;
            gameOver(score);
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';

});


function gameOver(score) {
    if (score == 0) {
        document.querySelector('.message').textContent = '💥 Game Lost 😩';
        document.querySelector('.score').textContent = '0';
    } 
}

function compareNumber(guessNum, number) {
        if (guessNum > number) {
            document.querySelector('.message').textContent = '📈 Too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else if (guessNum < number) {
            document.querySelector('.message').textContent = '📉 Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
}