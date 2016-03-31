jQuery(document).ready(function(){


/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

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
	var guesses = 5;
	$('#numberInput').append('playersGuess');
	$('playersGuess').remove();
	guesses --
	$('h4:first-child').text("You have " + guesses + " left!");
	checkGuess();
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	if(winningNumber === playersGuess){
		$('h4:first-child').text("You won! Play again?");
		playAgain();
	} else {
		lowerOrHigher();
	}
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	var guessArray = [];
	if(winningNumber > playersGuess){
		guessArray.push(playersGuess);
		$('h4:odd').text("Try a higher number!");
	} else {
		guessArray.push(playersGuess);
		$('h4:odd').text("Try a lower number!");
	}
}


// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){

}

// Allow the "Player" to Play Again

function playAgain(){
	winningNumber = generateWinningNumber();
	var guesses = 5;
	$('h4:first-child').text("You have " + guesses + " left!");
	$('h4:odd').text("");

}


/* **** Event Listeners/Handlers ****  */
$('#guessbutton').on('click', playersGuessSubmission);
$('#hint').on('click', provideHint);
$('#replay').on('click', playAgain);







});