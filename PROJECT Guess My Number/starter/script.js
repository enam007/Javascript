'use strict';
function generateRandomNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}
let secretNumber = generateRandomNumber();
console.log(secretNumber);
let score = 20;

// Function for updating message
function updateMessage(text) {
  document.querySelector('.message').textContent = text;
}
// Function for updating Highscore
function updateHighScore(score) {
  document.querySelector('.highscore').textContent = score;
}

// Function for updating Number box
function updateNumberBox(number) {
  document.querySelector('.number').textContent = number;
}

// Function for adjusting Box Width
function adjustBoxWidth(width) {
  document.querySelector('.number').style.width = width;
}

// Function  for updating UI for wrong Guess
function updateUiOnWrongGuess(text, score) {
  if (score > 0) {
    updateMessage(text);
    updateScore(score);
  } else {
    updateMessage('You Loose 💣💣💣');
    updateScore(0);
    updateBackgroundColor('#ff0000');
  }
}

function highlightRules(color) {
  document.querySelector('.between').style.backgroundColor = color;
}

//Function for updating background color
function updateBackgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

// Function  for updating UI for Right Guess
function updateUiOnWinning(text, score, secretNumber) {
  if (score >= Number(document.querySelector('.highscore').textContent)) {
    updateHighScore(score);
  } else {
    updateHighScore(Number(document.querySelector('.highscore').textContent));
  }
  updateMessage(text);
  //updateHighScore(score);
  updateBackgroundColor('#00FF00');
  adjustBoxWidth('30rem');
  updateNumberBox(secretNumber);
  highlightRules('#00FF00');
}

// Function for updating score
function updateScore(score) {
  document.querySelector('.score').textContent = score;
}

function gameLogic() {
  const guessedNumber = Number(document.querySelector('.guess').value);
  //console.log(guessedNumber);
  //console.log(secretNumber);
  highlightRules('#222');
  //if (!guessedNumber) {
  //document.querySelector('.message').textContent = 'Please Enter Any Number';
  //}
  if (guessedNumber > 20 || guessedNumber < 1 || guessedNumber === 0) {
    highlightRules('#ff0000');
  } else if (guessedNumber !== secretNumber) {
    guessedNumber > secretNumber
      ? updateUiOnWrongGuess('📈 Too High', --score)
      : updateUiOnWrongGuess('📉 Too Low', --score);
    //updateUiOnWrongGuess('📈 Too High', --score);
    // } else if (guessedNumber < secretNumber) {
    //   updateUiOnWrongGuess('📉 Too Low', --score);
  } else if (guessedNumber === secretNumber) {
    updateUiOnWinning(
      '🥳🥳🥳Hurray You Guessed it Correct',
      score,
      secretNumber
    );
  }
}

function onClickAgain() {
  if (score >= Number(document.querySelector('.highscore').textContent)) {
    updateHighScore(score);
  } else {
    updateHighScore(Number(document.querySelector('.highscore').textContent));
  }
  score = 20;

  secretNumber = generateRandomNumber();
  console.log(secretNumber);
  updateBackgroundColor('#222');
  highlightRules('#222');
  updateMessage('Start guessing..');
  adjustBoxWidth('15rem');
  updateNumberBox('?');
  updateScore(score);

  document.querySelector('.guess').value = '';
}

document.querySelector('.check').addEventListener('click', gameLogic);

document.querySelector('.again').addEventListener('click', onClickAgain);
