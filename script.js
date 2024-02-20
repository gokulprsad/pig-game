'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const playerE0 = document.querySelector('.player--0');
const playerE1 = document.querySelector('.player--1');
let diceEl = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll');
let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');
let current0EL = document.getElementById('current--0');
let current1EL = document.getElementById('current--1');

score0El.textContent = 0;
score1El.textContent = 0;
let activePlayer = 0;
let currentScore = 0;
let playing = true;

let scores = [0, 0];
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerE0.classList.toggle('player--active');
  playerE1.classList.toggle('player--active');
};

diceEl.classList.add('hidden');
btnRoll.addEventListener('click', function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();

      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // playerE0.classList.toggle('player--active');
      // playerE1.classList.toggle('player--active');
    }
  }
  btnHold.addEventListener('click', function () {
    if (playing) {
      playing = false;
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

      if (scores[activePlayer] >= 100) {
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--active');
      } else {
        switchPlayer();
      }
      switchPlayer();
    }
  });
});
