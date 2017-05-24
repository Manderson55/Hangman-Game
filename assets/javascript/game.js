
	var wins = 0;
	var losses = 0;
	var guessesLeft = 12;
	var guessesThisGame = [];
	var output = [];
	var lettersGuessed= 0;
	var wrongLetters = 0;
	var flowerSplit = [];
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/music/Peter_Paul_and_Mary_-_Hangman_(mp3.pm).mp3");

	var flowers =
	 [ "rose",
	 "gardenia", 
	 "hydrangea",
	  "tulip",
	   "verbena",
	    "lily",
	     "peony",
	      "azalea",
	       "hyacinth",
	        "dahlia",
	         "camellia"];


function playMusic(){
	audioElement.play();
}
function pauseMusic(){
	audioElement.pause();
}

function startGame() { /* this is what happens when user clicks start game button */
	guessesLeft = 12;
	var numberGuessesLeft = document.getElementById("guessesLeft");             /*  print userGuess on page  */	
	numberGuessesLeft.innerHTML = "Guesses Left: " + guessesLeft;	
	guessesThisGame = [];
	var guessedLetters = document.getElementById("guesses");             /*  print userGuess on page  */	
	guessedLetters.innerHTML = "Guesses this game: " + guessesThisGame;	 
    lettersGuessed= 0;
	wrongLetters = 0;
	flowerSplit = [];
	document.getElementById("hmStickFigure").src = "assets/images/hm0.png";
	pickElement();
}

function pickElement(){
	flowerGuess = flowers[Math.floor(Math.random() * flowers.length)]; /* pick a randon flower */
	console.log (flowerGuess);
	flowerSplit = flowerGuess.split(""); /*split the flower word selected into an array of letters we can compare */
	console.log(flowerSplit);	
	flowerDashes = flowerGuess.replace(/[a-z]/g, " ___ "); /* replace the letters with dashes */	
	printDashWord = document.getElementById("dashWord"); /* print the word in dashes in the window */
	printDashWord.innerHTML = flowerDashes;
	console.log(flowerDashes);
}

document.onkeyup = function(event) { /*when user clicks a letter */


	userGuess = event.key;
	guessesThisGame.push(userGuess); /* push the letter to the array */
	console.log("Guesses this game "  + guessesThisGame);
	var guessedLetters = document.getElementById("guesses");             /*  print userGuess on page  */	
	guessedLetters.innerHTML = "Guesses this game: " + guessesThisGame;	 

	guessesLeft--;

	if (flowerSplit.includes(userGuess)){
		console.log("letter is in word!");
		lettersGuessed ++;
		for (var i=0; i < flowerSplit.length; i++) {
			
			if (flowerSplit[i] == userGuess) {
					output[i] = userGuess;
				/*	output += " " + userGuess + " "; */
					console.log(output);

				}			 
		}
		if (lettersGuessed == flowerSplit.length){
			console.log(lettersGuessed, flowerSplit.length);
			wins++;
			document.getElementById("hmStickFigure").src = "assets/images/hm12Win.png";
			alert("You guessed the Flower!");
		}


	} 
	else {
			console.log("letter is not in word");
			lettersGuessed++;
			wrongLetters++;
			console.log (lettersGuessed);
			console.log(wrongLetters);
			changeImage();
	}


	
	
	if (guessesLeft == 0){
		losses++;
		document.getElementById("hmStickFigure").src = "assets/images/hm12Loss.png";
		alert("You are a looser!");
	} 

	var numberGuessesLeft = document.getElementById("guessesLeft");             /*  print userGuess on page  */	
	numberGuessesLeft.innerHTML = "Guesses Left: " + guessesLeft;	

	
	printDashWord = document.getElementById("dashWord"); /* print the word in dashes in the window */
	printDashWord.innerHTML = flowerDashes;
	console.log(flowerDashes);


}	/* end of onkeyup event */



function changeImage() {
	if (wrongLetters == 1) {
		document.getElementById("hmStickFigure").src = "assets/images/hm1.png";
	}
	else if (wrongLetters == 2) {
		document.getElementById("hmStickFigure").src = "assets/images/hm2.png";
	}
	else if (wrongLetters == 3) {
		document.getElementById("hmStickFigure").src = "assets/images/hm3.png";
	}
	else if (wrongLetters == 4) {
		document.getElementById("hmStickFigure").src = "assets/images/hm4.png";
	}
	else if (wrongLetters == 5) {
		document.getElementById("hmStickFigure").src = "assets/images/hm5.png";
	}
	else if (wrongLetters == 6) {
		document.getElementById("hmStickFigure").src = "assets/images/hm6.png";
	}	
	else if (wrongLetters == 7) {
		document.getElementById("hmStickFigure").src = "assets/images/hm7.png";
	}
	else if (wrongLetters == 8) {
		document.getElementById("hmStickFigure").src = "assets/images/hm8.png";
	}
	else if (wrongLetters == 9) {
		document.getElementById("hmStickFigure").src = "assets/images/hm9.png";
	}	
	else if (wrongLetters == 10) {
		document.getElementById("hmStickFigure").src = "assets/images/hm10.png";
	}
	else if (wrongLetters == 11) {
		document.getElementById("hmStickFigure").src = "assets/images/hm11.png";
	}
	else {
		document.getElementById("hmStickFigure").src = "assets/images/hm12Loss.png";
	}
		
}

