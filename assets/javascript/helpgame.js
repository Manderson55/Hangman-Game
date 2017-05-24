
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


function pickElement(){
	flowerGuess = flowers[Math.floor(Math.random() * flowers.length)]; /* pick a randon flower */
	console.log (flowerGuess);
	flowerSplit = flowerGuess.split(""); /*split the flower word selected into an array of letters we can compare */
	console.log(flowerSplit);	
	flowerDashes = flowerGuess.replace(/[a-z]/g, " ___ "); /* replace the letters with dashes */	
	printDashWord = document.getElementById("dashWord"); /* print the word in dashes in the window */
	printDashWord.innerHTML = flowerDashes;
}


function startGame() { /* this is what happens when user clicks start game button */
	pickElement();
}

document.onkeyup = function(event) { /*when user clicks the start button */

	var userGuess = event.key;  /* set userGuess to the key the user pressed */
	guessesLeft--;      /* subtract 1 from guessesLeft */
	document.getElementById("guessesLeft").innerHTML  =  "Guesses Left: " + guessesLeft; /*  print userGuess on page  */ 
	
	guessesThisGame.push(userGuess); /* push the letter to the array */
	console.log("Guesses this game "  + guessesThisGame);
	var guessedLetters = document.getElementById("guesses");             /*  print userGuess on page  */	
	guessedLetters.innerHTML = "Guesses this game: " + guessesThisGame;	 

	if (guessesLeft > 0) {
		letterInWord = false; /* set boolean to false = letter is not in the word */
		if (flowerSplit.includes(userGuess)){
			letterInWord = true; /* reset boolean to TRUE = letter is in the word 	*/
			console.log(letterInWord);
			for (var i = 0; i < flowerSplit.length; i++) { 
				if (flowerSplit[i] == userGuess) {
					output += " " + userGuess + " ";
					console.log(output);
					lettersGuessed ++;
					console.log(lettersGuessed);
				} 
				else {
					output += " ___ ";
					console.log(output);
				}
			}
		}
		else {
			wrongLetters++;
		}
	};

	}
		
	for (var i = 0; i < flowerSplit.length; i++) { 
			if (flowerSplit[i] == userGuess) {
				output += " " + userGuess + " ";
			} 
			else {
				output += "___";				
			}
	} /* end of for loop */






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

