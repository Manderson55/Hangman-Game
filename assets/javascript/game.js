
	var wins = 0;
	var losses = 0;

    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/music/Peter_Paul_and_Mary_-_Hangman_(mp3.pm).mp3");

function playMusic(){
	audioElement.play();
}
function pauseMusic(){
	audioElement.pause();
}


function clearGame() {
	var guessesLeft = 12;
	var guessesThisGame = [];
	var guessesLeft = 12;
	var output = ""; /* create new output  field */
	var newOutput = "";
	var letterInWord; true;
	var lettersMissed = 0;
}

function startGame() { /* this is what happens when user clicks start game button */
	var flowers =["rose", "gardenia", "hydrangea", "tulip", "verbena", "lily", "peony", "azalea", "hyacinth", "dahlia", "camellia"];
	var images = ["hm0.png","hm1.png","hm2.png","hm3.png","hm4.png","hm5.png","hm6.png","hm7.png","hm8.png","hm9.png","hm10.png","hm11.png"];
	flowerGuess = flowers[Math.floor(Math.random() * flowers.length)]; /* pick a randon flower */
	console.log (flowerGuess);
    dashes = flowerGuess.replace(/[a-z]/g, " ___ "); /* replace the letters with dashes */
	flowerSplit = flowerGuess.split(""); /*split the flower word selected into an array of letters we can compare */
	console.log(flowerSplit);	
	printDashWord = document.getElementById("dashWord"); /* print the word in dashes in the window */
	printDashWord.innerHTML = dashes;
	var printAnswer =document.getElementById("answer");
	printAnswer.innerHTML = ""; 
	var printGuessesLeft = document.getElementById("guessesLeft");             /*  print userGuess on page  */	
	printGuessesLeft.innerHTML = "Guesses Left: 12";	
	var guessedLetters = document.getElementById("guesses");             /*  print userGuess on page  */	
	guessedLetters.innerHTML = "Guesses this game: " ;	
	document.getElementById("hmStickFigure").src = "assets/images/hm0.png";
	
}

	var output = ""; /* create new output  field */
	var newOutput = "";
	var letterInWord; true;
	var lettersMissed = 0;
	var guessesThisGame = [];
	var guessesLeft = 12;
	var guessesThisGame = [];

document.onkeyup = function(event) { /*when user clicks the start button */

	var userGuess = event.key;  /* set userGuess to the key the user pressed */
	guessesLeft--;      /* subtract 1 from guessesLeft */
	var printGuessesLeft = document.getElementById("guessesLeft");             /*  print userGuess on page  */	
	printGuessesLeft.innerHTML = "Guesses Left: " + guessesLeft;		
	
	guessesThisGame.push(userGuess); /* push the letter to the array */
	console.log("Guesses this game "  + guessesThisGame);
	var guessedLetters = document.getElementById("guesses");             /*  print userGuess on page  */	
	guessedLetters.innerHTML = "Guesses this game: " + guessesThisGame;

	if (guessesLeft > 0) {
		letterInWord = false; /* set boolean to false = letter is not in the word */
		for (i = 0; i < flowerSplit.length; i++) { 
			if (userGuess == flowerSplit[i]) {
				output += " " + userGuess + " ";
				letterInWord = true; /* reset boolean to TRUE = letter is in the word 	*/
			} 
			else {

				
			}
		} /* end of for loop */
	} 

	if (guessesLeft == 0) {
		document.getElementById("hmStickFigure").src = "assets/images/hm12Loss.png";
	    var printGuessesLeft = document.getElementById("guessesLeft");             /*  print userGuess on page  */				printGuessesLeft.innerHTML = "NO MORE GUESSES LEFT!!! YOU LOST!!!";	
		losses++;
		var printLosses =document.getElementById("losses");
		printLosses.innerHTML = "Losses:" + losses; 
		var printAnswer =document.getElementById("answer");
		printAnswer.innerHTML = "The Flower picked was: " + flowerGuess; 			
		clearGame();

	}/* end of guessesLeft == 0 */

	
	newOutput = output;
	printNewOutput = document.getElementById("dashWord");
	printNewOutput.innerHTML = newOutput;
	console.log(letterInWord);
	if (!letterInWord) {
		console.log("Letter is not in word!!!");
		lettersMissed++;
		console.log("letters missed = " + lettersMissed);
		changeImage();
	}

	


} /* end of onkey up function */

function changeImage() {
	if (lettersMissed == 1) {
		document.getElementById("hmStickFigure").src = "assets/images/hm1.png";
	}
	else if (lettersMissed == 2) {
		document.getElementById("hmStickFigure").src = "assets/images/hm2.png";
	}
	else if (lettersMissed == 3) {
		document.getElementById("hmStickFigure").src = "assets/images/hm3.png";
	}
	else if (lettersMissed == 4) {
		document.getElementById("hmStickFigure").src = "assets/images/hm4.png";
	}
	else if (lettersMissed == 5) {
		document.getElementById("hmStickFigure").src = "assets/images/hm5.png";
	}
	else if (lettersMissed == 6) {
		document.getElementById("hmStickFigure").src = "assets/images/hm6.png";
	}	
	else if (lettersMissed == 7) {
		document.getElementById("hmStickFigure").src = "assets/images/hm7.png";
	}
	else if (lettersMissed == 8) {
		document.getElementById("hmStickFigure").src = "assets/images/hm8.png";
	}
	else if (lettersMissed == 9) {
		document.getElementById("hmStickFigure").src = "assets/images/hm9.png";
	}	
	else if (lettersMissed == 10) {
		document.getElementById("hmStickFigure").src = "assets/images/hm10.png";
	}
	else if (lettersMissed == 11) {
		document.getElementById("hmStickFigure").src = "assets/images/hm11.png";
	}
	else {
		document.getElementById("hmStickFigure").src = "assets/images/hm12Loss.png";
	}
		
}

