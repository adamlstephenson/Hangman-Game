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

    console.log(chooseWord);
    console.log(lettersInWord);
}



// Game Process
//==============================================================================================================

startGame();

// Answer array and loop

// let answers = [];

// for (let i = 0; i < chooseWord.length; i++) {
//     answers[i] = "  _  ";
// }

// let remainingLetters = chooseWord.length;

//     document.getElementById("blankword").innerHTML=answers.join("");

//         console.log(answers);
      



// // User Guesses

// let guessesRemaining = 12; // How many guesses are remaining

//     document.getElementById("guessesremaining").innerHTML=guessesRemaining;

// let guessedLetters = []; // Display letters that have been guessed but are not correct

// document.onkeypress = function(event) {
//     let playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
//     guessesRemaining--;
//     document.getElementById("guessesremaining").innerHTML=guessesRemaining;
    
//     for (var j = 0; j < chooseWord.length; j++) {

//         if (chooseWord[j] === playerGuess) {
//         answers[j] = playerGuess;
//         document.getElementById("blankword").innerHTML=answers.join("");
//         remainingLetters--; 
//         }

//         if (remainingLetters === 0) {
//             wins++;
//             document.getElementById("wincount").innerHTML=wins;
//         }
//     }
// }
        
    //     } else (chooseWord[j] != playerGuess); {
    //         document.getElementById("guessedletters").innerHTML = playerGuess; 

    //     }
        
    //     console.log(guessesRemaining)
    //     }
    // }

//     console.log(letter);
//     // inside here lives some
//     // code that will run every time
//     // a keyup event happens.
//   }



// // document.getElementById("guessedletters").innerHTML=guessedLetters;

// // if (playerGuess === remainingLetters){
// // for (var j = 0; j < chooseWord.length; j++) {
// //     if (chooseWord[j] === playerGuess) {
// //         answers[j] = playerGuess;
// //         remainingLetters--;
// //     }
// // }
// // }
// // Pseudo code

// // 2. Take the player’s guess. - loop
// // 3. Quit the game if the player wants to. - loop
// // 4. Check that the player’s guess is a valid letter. - loop
// // 5. Keep track of letters the player has guessed. - loop
// // 6. Show the player their progress. - loop
// // 7. Finish when the player has guessed the word.

// // Convert all letters to lower case

// document.onkeyup = function() {
//     let userGuess = String.fromCharCode(event.keyCode).toLowerCase()

// }