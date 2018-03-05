// Variables
//=============================================================================================================

let words = ['frodo', 'gandalf', 'samwise', 'gollum', 'sauron', 'aragorn', 'legolas', 'mordor', 'shadowfax',];
let answer = "";
let lettersInWord = [];
let remainingLetters = 0;
let underscoreAnswers = [];
let wrongGuesses = [];
let wins = 0;
let remainingGuesses = 12;

// Functions
//==============================================================================================================

function startGame () {
    chooseWord = words[Math.floor(Math.random() * words.length)];
    lettersInWord = chooseWord.split("");
    remainingLetters = lettersInWord.length;

    remainingGuesses = 12;
    wrongGuesses = [];
    underscoreAnswers = [];

    for (let i = 0; i < remainingLetters; i++) {
        underscoreAnswers.push(" _ ");
    }

    document.getElementById("blankword").innerHTML=underscoreAnswers.join(" ");
    document.getElementById("guessesremaining").innerHTML=remainingGuesses;
    document.getElementById("wincount").innerHTML=wins;


    console.log(chooseWord);
    console.log(lettersInWord);
    console.log(remainingLetters);
    console.log(underscoreAnswers);
}

function checkLetters(letter) {

    // Is letter in word?

    let isLetterInWord = false;

    for (let j = 0; j < remainingLetters; j++) {
        if(chooseWord[j] === letter) {
            isLetterInWord = true;
        }
    }

    // Where is letter? Fill in the blank.

    if(isLetterInWord) {
        for (let k = 0; k < remainingLetters; k++) {
            if(chooseWord[k] === letter) {
                underscoreAnswers[k] = letter;
            }
        }
    }
    else {
        wrongGuesses.push(letter);
        remainingGuesses--
    }
    console.log(underscoreAnswers);
    console.log(remainingGuesses);
}

function gameOver() {
    console.log("Win count: " + wins + "| Guesses left: " + remainingGuesses);

    // Won

    if(lettersInWord.toString() === underscoreAnswers.toString()) {
        wins++;
        alert("Congratulations");

        document.getElementById("wincount").innerHTML = wins;
        startGame();
    }
    else if (remainingGuesses === 0) {
        alert("Looooooooser");
        startGame();
    }
}

// Game Process
//==============================================================================================================

startGame();

document.onkeypress = function(event) {
    let playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(playerGuess);
    gameOver(); 

}