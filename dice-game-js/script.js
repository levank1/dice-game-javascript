'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let scores, currentScore,activePlayer,playing

const init = function()
{
score0El.textContent = 0;
score1El.textContent = 0;
current0.textContent = 0;
current1.textContent = 0;
player0.classList.remove('player--winner');
player1.classList.remove('player--winner');
player0.classList.add('player--active');
player1.classList.remove('player--active');
diceEl.classList.add('hidden');
scores = [0,0]
 currentScore = 0;
 activePlayer = 0;
 playing = true
}
init();
const switchPlayer = function(){
 document.getElementById(`current--${activePlayer}`).textContent = 0
 currentScore = 0;
activePlayer=activePlayer === 0 ? 1: 0;
player0.classList.toggle('player--active')
player1.classList.toggle('player--active')
}


btnRoll.addEventListener('click', function(){
 if(playing === true){

 
 // 1. Generate Rnadom diceroll
const dice=Math.trunc(Math.random()*6) + 1;
console.log(dice);


 //2. display the dice
diceEl.classList.remove('hidden')
diceEl.src = `dice-${dice}.png`


 //3.check the rolled 1: if true switch player
 if(dice!==1){
  //add dice to the current score
currentScore+=dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore



}else{
 switchPlayer()

}
}})
btnHold.addEventListener('click',function(){
 if(playing === true){
 //1.add current score to active players score
scores[activePlayer]+=currentScore
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
 //2.check score if is >=100
 
if(scores[activePlayer] >=100){
// finish game
playing = false;
document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
diceEl.classList.add('hidden')
}else{
 switchPlayer()
}}
})


btnNew.addEventListener('click',init)