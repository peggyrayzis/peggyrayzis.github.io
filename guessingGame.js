
// DON'T FORGET YOUR IIFE!

/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var winningNumber = generateWinningNumber();
var hints = 0;
var playersGuess;
var winner = false;
var guesses = 5;


/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(Math.random()*100)+1;
}

// Fetch the Players Guess

function playersGuessSubmission(){
	var playersGuess = +$('#numberInput').val();
	$('#numberInput').append('playersGuess');
	$('#numberInput').val("");
	$('playersGuess').remove();
	checkGuess();
}
// Check if the Player's Guess is the winning number 

function checkGuess(){
	if(guesses > 0){
		guesses--
		if(playersGuess === winningNumber){
			winner = true;
			$('.guessesleft').text("Congratulations! You won!");
			$('.highlow').text("Why don't you play again?");
			$('.message').text("");
			winnerOrLoser();
		} else if((playersGuess !== winningNumber) && (guesses === 1)){
			$('.guessesleft').text("You have " + guesses + " guess left!");
			lowerOrHigher();
		} else if((playersGuess !== winningNumber) && (guesses === 0)){
			$('.guessesleft').text("Thought you could outsmart me? You lose!");
			$('.highlow').text("Why don't you play again?");
			$('.message').text("");
			winnerOrLoser();
		} else {
			$('.guessesleft').text("You have " + guesses + " guesses left!");
			lowerOrHigher();
		}
	}
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	var absVal = Math.abs(winningNumber - playersGuess);
	if(absVal > 25){
		if(playersGuess > winningNumber){
			$('.highlow').text("Your guess is cold & too high!");
		} else {
			$('.highlow').text("Your guess is cold & too low!");
		}
	} else if((absVal < 25) && (absVal > 10)){
		if(playersGuess > winningNumber){
			$('.highlow').text("Your guess is warm & too high!");
		} else {
			$('.highlow').text("Your guess is warm & too low!");
		}
	} else {
		if(playersGuess > winningNumber){
			$('.highlow').text("Your guess is hot & too high!");
		} else {
			$('.highlow').text("Your guess is hot & too low!");
		}
	}
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	if(hints === 0){
		var hintArr = [];
		hintArr.push(winningNumber)
		hintArr.push(Math.floor(Math.random()*100)+1);
		hintArr.push(Math.floor(Math.random()*100)+1);
		hintArr.push(Math.floor(Math.random()*100)+1);
		hintArr.push(Math.floor(Math.random()*100)+1);
		var shuffled = shuffleArray(hintArr);
		$('.message').text("The winning number is one of these: " + hintArr + ". Choose wisely!");
		hints++
	} else {
		$('.message').text("Sorry, you already used your hint.");
	}
}

// function winnerOrLoser(){
// 	if(winner === true){
// 		change sunglasses emoji to something fun
// 		guess my number headline changes to congratulations
// 	} else {
// 		change sunglasses emoji to something sad
// 		guess my number headline changes to you lose
// 	}
// }


// Allow the "Player" to Play Again

function playAgain(){
	var winningNumber = generateWinningNumber();
	var hints = 0;
	var winner = false;
	var guesses = 5;
	$('.guessesleft').text("You have " + guesses + " guesses left!");
	$('.message').text("");
	$('.highlow').text("");
}


/* **** Event Listeners/Handlers ****  */
$(document).ready(function(){
$('#guessbutton').on('click', playersGuessSubmission);
$('#hint').on('click', provideHint);
$('#replay').on('click', playAgain);

// put one in here so they can use return

});




