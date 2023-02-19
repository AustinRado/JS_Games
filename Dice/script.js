'use strict';
//Selecting elements
const score0El= document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//selceting buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//selecting player element
const current0El= document.getElementById('current--0');
const current1El= document.getElementById('current--1');

//function to initialize the game(reseting)
//read in scoping topic

let scores,currentScore, activePlayer, playing;

const initialize = function(){

//starting conditons

score0El.textContent = 0;
score1El.textContent = 0;
diceElement.classList.add('hidden');

//Variable for holding current score
//create a variable to hold active player
//store the score of both players in an array

scores = [0,0];
currentScore = 0;
activePlayer = 0; 
playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    diceElement.classList.add('hidden');

}

initialize();

//refactor switch player code into a function to avoid repetition

const switchPlayer = function(){
//change the score value once the player is switched.
document.getElementById(`current--${activePlayer}`).textContent = 0;
activePlayer = activePlayer === 0 ? 1 : 0;
currentScore = 0;

//allows you to switch in between two classes at one time each
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
};

//implementing gaming functionality
// When the user roles a dice. 

//rolling dice functionality
btnRoll.addEventListener('click', function(){
    //playing is a boolean so conditions are not necessary
    if(playing){
    //1. generate and display a random dice roll number(1 - 6)

    const dice = Math.trunc(Math.random() *6) + 1;

    
    //2. Display dice
    // first thing is to remove the hidden dice
    
    diceElement.classList.remove('hidden');
   
    // display an image that matches the random number generated   
    diceElement.src = `dice-${dice}.png`;
    
    //3. check whether the dice roll is a 1:true > (switch to next player) or not: false > (add dice roll to current score)
if(dice !== 1){
    //add dice to current score
    // in order to hold the current score of a dice we need to find a way to store it (NOT JUST IN THE DOM)
currentScore += dice;

 // we need to keep track of which player is the current player(active player when the dice button is clicked)
 //build the id name dynamically
 document.getElementById(`current--${activePlayer}`).textContent = currentScore;

 //create a variable to hold active player

}else{
 //switch to next player
  //call the switchPlayer function
switchPlayer();
}
}
});
btnHold.addEventListener('click', function(){
    if(playing){
    //add a console.log to debug --> see if the event is functional
    //console.log('YES! It Works ');
    //1. Add current score to activate player's score
   scores[activePlayer] += currentScore;
   document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
   //2. Check if player's score is >= 100?
    // If true: finish the game
if (scores[activePlayer] >= 100){
    //Finish the game
    playing = false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    diceElement.classList.add('hidden');
}else{
//If false: Switch to the next player ----> call the switchPlayer function
switchPlayer();
}
}  
});
btnNew.addEventListener('click',initialize);

const first = () => {
    let a = 1;
    const b = second(7,9);
    a = a + b;
    return a;

}
function second(x,y){
var c = 2;
return c;
}

const x = first();
console.log(x);
