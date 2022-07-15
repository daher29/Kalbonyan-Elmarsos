////////////////////
// Guess My Number!

'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 5;

document.querySelector('.guess').value = 29;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// EXTRA DRY
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}; // then we can use the function to replace it to make the code shorter

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!'; // EXTRA DRY
    displayMessage('⛔ No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!'; // EXTRA DRY
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      /*
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      */ // EXTRA DRY
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💣 You lost the game!;'; // EXTRA DRY
      displayMessage('💣 You lost the game!;');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/////////////////////////////////////////////////
// Refactoring our code: the DRY principle
/*
    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = '📈 Too High!'; // dry
      // score--;
      // document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💣 You lost the game!;';
      // document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = '📉 Too Low!'; // dry
      // score--;
      // document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💣 You lost the game!;';
      // document.querySelector('.score').textContent = 0;
    }
  }
});
*/

///////////////////////
// Coding Challenge #1
/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#252525';
  // document.querySelector('.message').textContent = 'Start guessing...'; // EXTRA DRY
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
