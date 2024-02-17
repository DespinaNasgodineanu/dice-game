'use strict';
const player0=document.querySelector('.player--0 ');
const player1=document.querySelector('.player--1 ');
const btnNew=document.querySelector('.btn--new');
const btnHold=document.querySelector('.btn--hold');
const btnRoll=document.querySelector('.btn--roll');
const diceRoll = document.querySelector('.dice');
const current0score = document.querySelector('#current--0');
const current1score = document.querySelector('#current--1');
const score0player= document.querySelector('#score--0');
const score1player= document.querySelector('#score--1');

//TEST

let scores = [0,0];
let score = 0;
let currentScore = 0;
let activePlayer = 0;
let playing = true;
diceRoll.classList.add('hidden');

score0player.textContent = score;
score1player.textContent = score;

  // Switch player
const switchPlayer = function () {
     document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0; 
        activePlayer = activePlayer === 0 ? 1 : 0 ; 
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function() {
    if ( playing) {
        let dice = Math.trunc(Math.random()*6)+1;
        console.log(dice);
        diceRoll.classList.remove('hidden');
        diceRoll.src = `dice-${dice}.png`;

        if(dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
    
})

btnHold.addEventListener('click', function() {
    if(playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 10 ){
            playing = false;
            document
                    .querySelector(`.player--${activePlayer}`)
                    .classList.add('player--winner');
            document
                    .querySelector(`.player--${activePlayer}`)
                    .classList.remove('player--active');
            diceRoll.classList.add('hidden');

        } else {
            switchPlayer();
        }
    }
    
})
