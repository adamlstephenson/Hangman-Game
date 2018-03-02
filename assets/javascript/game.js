
// Words to guess

var words = ['frodo', 'gandalf', 'samwise', 'gollum', 'sauron', 'aragorn', 'legolas', 'mordor', 'shadowfax',];

// Random word selection

let chooseWord = words[Math.floor(Math.random() * words.length)];

console.log(chooseWord)

// Answer array and loop

let answers = [];

for (let i = 0; i < chooseWord.length; i++) {
    answers[i] = "_";
}

let remainingLetters = chooseWord.length;

console.log(answers);
console.log(remainingLetters);

// Convert all letters to lower case

document.onkeyup = function() {
    let userGuess = String.fromCharCode(event.keyCode).toLowerCase()

}

// Long form of user guesses



// Inserted HTML paragraphs


// Pseudo code

// 1. Pick a random word.

                            // Pick a random word

                            // While the word has not been guessed {
                            //  Show the player their current progress
                            //  Get a guess from the player

                            //  If the player wants to quit the game {
                            //  Quit the game
                            //  }
                            //  Else If the guess is not a single letter {
                            //  Tell the player to pick a single letter
                            //  }
                            //  Else {
                            //  If the guess is in the word {
                            //  Update the player's progress with the guess
                            //  }
                            //  }
                            // }
                            // Congratulate the player on guessing the word

// 2. Take the player’s guess. - loop
// 3. Quit the game if the player wants to. - loop
// 4. Check that the player’s guess is a valid letter. - loop
// 5. Keep track of letters the player has guessed. - loop
// 6. Show the player their progress. - loop
// 7. Finish when the player has guessed the word.

