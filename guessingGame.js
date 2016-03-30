jQuery(document).ready(function(){


/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess = playersGuessSubmission();
var winningNumber = generateWinningNumber();



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	var myNumber = Math.floor(Math.random()*100)+1;
	return myNumber;
}

// Fetch the Players Guess

function playersGuessSubmission(){
	var playersGuess = +$(this).val();
	$('#numberInput').append('playersGuess');
	$('playersGuess').remove();
	return playersGuess;
	// add code here
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	var guessArray = [];
	var guesses = 0
	if(winningNumber > playersGuess){
		guessArray.push(playersGuess);
		guesses ++;
		return "Guess higher! Try again!"
	} else {
		guessArray.push(playersGuess);
		guesses ++;
		return "Guess lower! Try again!"
	}
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	if(winningNumber === playersGuess){
		return "You Won!"
	} else {
		lowerOrHigher();
	}
	// add code here
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */
$('.input').on('keyup', '#numberInput', playersGuessSubmission)







});