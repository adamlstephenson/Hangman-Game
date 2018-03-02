
let wins = 0;

document.getElementById("wincount").innerHTML=wins;

// Words to guess array

let words = ['frodo', 'gandalf', 'samwise', 'gollum', 'sauron', 'aragorn', 'legolas', 'mordor', 'shadowfax',];

// Random word selection

let chooseWord = words[Math.floor(Math.random() * words.length)];

console.log(chooseWord)

// Answer array and loop

let answers = [];

for (let i = 0; i < chooseWord.length; i++) {
    answers[i] = "_";
}

let remainingLetters = chooseWord.length;

document.getElementById("blankword").innerHTML=answers;

console.log(answers);
console.log(remainingLetters);

// User Guesses

let guessesRemaining = 12; // How many guesses are remaining

document.getElementById("guessesremaining").innerHTML=guessesRemaining;

let guessedLetters = []; // Display letters that have been guessed but are not correct

document.onkeyup = function(event) {

    let playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(playerGuess);
}

document.getElementById("guessedletters").innerHTML=guessedLetters;


// Pseudo code

// 2. Take the player’s guess. - loop
// 3. Quit the game if the player wants to. - loop
// 4. Check that the player’s guess is a valid letter. - loop
// 5. Keep track of letters the player has guessed. - loop
// 6. Show the player their progress. - loop
// 7. Finish when the player has guessed the word.

// Convert all letters to lower case

document.onkeyup = function() {
    let userGuess = String.fromCharCode(event.keyCode).toLowerCase()

}