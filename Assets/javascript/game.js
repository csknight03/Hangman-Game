var doubleWord = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

// Word List to choose from
 var wordList = [
 	"matterhorn bobsled",
 	"splash mountain",
 	"haunted mansion",
 	"hyperspace mountain",
 	"pirates of the caribbean",
 	"indiana jones adventure", 
 	"mad tea party",
 	"califonia screamin",
 	"grizzly river run",
 	"radiator springs racers",
 	"tower of terror",
 	"big thunder mountain railroad",
 	"mickey mouse ears",
 	"enchanted tiki room",
 	"mickeys soundsational parade",
 	"world of color",
 	"churro",
 	"mickey pretzel",
 	"sleeping beautys castle",
 	"main street electical parade",
 	"dreams come true fireworks",
 	"disneyland railroad",
 	"mickey mouse",
 	"corn dog",
 	"mickeys beignets",
 	"caramel apples"
 	];
 	// Container for random choosen word
 	var choosenWord = "";
 	// Container for letters in word
 	var lettersInWord = [];
 	// Container for number of blanks in the word
 	var numBlanks = 0;
 	// Container for blanks and successful guesses
 	var blanksAndSuccesses = [];
 	// Container for wrong letters
 	var wrongLetters = [];
 	// Counters
 	var winCount = 0;
 	var loseCount = 0;
 	var guessesLeft = 8;
 	var rightGuessCounter = 0;
 
 	window.onload = function () {
 	
 	function startGame() {
 		// Choose word randomly from the wordList
 		choosenWord = wordList[Math.floor(Math.random() * wordList.length)];
 		// Seperate the word into individual letters
 		lettersInWord = choosenWord.split("");
 		// Get the number of blanks
 		numBlanks = lettersInWord.length

 		// Reset fields
 		letterGuessed = 0;
 		rightGuessCounter = 0;
 		guessesLeft = 8;
 		wrongLetters = [];
 		blanksAndSuccesses = [];
 		doubleWord = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
 		
 		for (var i = 0; i < choosenWord.length; i++) {
 			blanksAndSuccesses.push("_");
 			document.getElementById("randomWordDiv")
 		}

 		// Update HTML
 		document.getElementById("randomWordDiv").innerHTML = blanksAndSuccesses.join(" ");
 		document.getElementById("numGuesses").innerHTML = guessesLeft;
 		document.getElementById("winCounter").innerHTML = winCount;
 		document.getElementById("lossCounter").innerHTML = loseCount;
 		document.getElementById("wrongGuesses").innerHTML = wrongLetters;


 		console.log(choosenWord);
 		console.log(lettersInWord);
 		console.log(numBlanks);
 		console.log(blanksAndSuccesses);
 	}
 	
function compareLetters(userKey) {
	console.log("WORKING!");

	// If used key exist in choosen word then perform this function
	if (choosenWord.indexOf(userKey) > -1) {
		// Loops depending on the amount of blanks
		for (var i = 0; i < numBlanks; i++) {
			// Fills in the right index user key
			if (lettersInWord[i] === userKey) {
				rightGuessCounter++;
				blanksAndSuccesses[i] = userKey;
				document.getElementById("randomWordDiv").innerHTML = blanksAndSuccesses.join(" ");
			}
		}


		console.log(blanksAndSuccesses);
	}
	else{
		wrongLetters.push(userKey);
		guessesLeft--;
		// Update HTML 
		document.getElementById("numGuesses").innerHTML = guessesLeft;
		document.getElementById("wrongGuesses").innerHTML = wrongLetters;


		console.log("wrongLetters = " + wrongLetters);
		console.log("Guesses left are " + guessesLeft);
	}

}
function winLose() {
	// When number blanks is filled with the right words then you win
	if (rightGuessCounter === numBlanks) {
		// Count Wins
		winCount++;
		// Update HTML
		document.getElementById("winCounter").innerHTML = winCount;
		alert("You Win!!");
		startGame();
	}
	else if (guessesLeft === 0) {
		// Count losses
		loseCount++;
		// Update HTML
		document.getElementById("lossCounter").innerHTML = loseCount;
		alert("You lose!!");
		startGame();
	}
}

startGame();

document.onkeyup = function(event) {
	test = true;
	var letterGuessed = event.key;
	for (var i = 0; i < doubleWord.length; i++) {
		if (letterGuessed === doubleWord[i] && test === true) {
			var splicedWord = doubleWord.splice(i,1);


			console.log("Double word is = " + doubleWord[i]);
			console.log("Spliced word is = " + splicedWord);

			compareLetters(letterGuessed);
			winLose();
		}
	}
}
}













