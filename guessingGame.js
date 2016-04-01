(function(){
// DON'T FORGET YOUR IIFE!

/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var winningNumber = generateWinningNumber();
var hints = 0;
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
	checkGuess(playersGuess);
}
// Check if the Player's Guess is the winning number 

function checkGuess(playersGuess){
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
			lowerOrHigher(playersGuess);
		} else if((playersGuess !== winningNumber) && (guesses === 0)){
			$('.guessesleft').text("Thought you could outsmart me? You lose!");
			$('.highlow').text("Why don't you play again?");
			$('.message').text("");
			winnerOrLoser();
		} else {
			$('.guessesleft').text("You have " + guesses + " guesses left!");
			lowerOrHigher(playersGuess);
		}
	}
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(playersGuess){
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

function randomNum(array){
	array.push(Math.floor(Math.random()*100)+1);
}


function provideHint(){
	if((hints === 0) && (guesses !== 5)){
		var hintArr = [];
		hintArr.push(winningNumber)
		randomNum(hintArr);
		randomNum(hintArr);
		randomNum(hintArr);
		randomNum(hintArr);
		randomNum(hintArr);
		var shuffled = shuffleArray(hintArr);
		$('.message').text("The winning number is one of these: " + hintArr + ". Choose wisely!");
		hints++
	} else if((hints === 0) && (guesses === 5)){
		$('.highlow').text("Don't be lazy! Guess before you use a hint.");
	} else {
		$('.message').text("Sorry, you already used your hint.");
	}
}

function winnerOrLoser(){
	if(winner === true){
		$('h1').text("You win a puppy!!!");
		$('#body').toggle();
		$('.winner').toggle();
	} else {
		$('h1').text("You stink! Try again.");
		$('#emoji').toggle();
		$('#loser').toggle();
	}
}


/* **** Event Listeners/Handlers ****  */
$(document).ready(function(){
$('#guessbutton').on('click', playersGuessSubmission);
$('#hint').on('click', provideHint);
$('#numberInput').keydown(function(e){
    if (e.keyCode === 13) {
        playersGuessSubmission();
    }
});
$('#replay').click(function() {
    location.reload();
});
$('#winreplay').click(function() {
    location.reload();
});

});

})();


