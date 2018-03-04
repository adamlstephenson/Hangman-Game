
let wins = 0;

document.getElementById("wincount").innerHTML=wins;

// Words to guess array

let words = ['frodo', 'gandalf', 'samwise', 'gollum', 'sauron', 'aragorn', 'legolas', 'mordor', 'shadowfax',];
let indiLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
// let splitWords = words.split(" ")
// console.log(splitWords)

// Random word selection

let chooseWord = words[Math.floor(Math.random() * words.length)];

console.log(chooseWord)

// Answer array and loop

let answers = [];

for (let i = 0; i < chooseWord.length; i++) {
    answers[i] = "  _  ";
}

let remainingLetters = chooseWord.length;

document.getElementById("blankword").innerHTML=answers.join("");

console.log(answers);
console.log(remainingLetters);



// User Guesses

let guessesRemaining = 12; // How many guesses are remaining

document.getElementById("guessesremaining").innerHTML=guessesRemaining;

// let guessedLetters = []; // Display letters that have been guessed but are not correct

document.onkeypress = function(event) {
    let playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    for (var j = 0; j < chooseWord.length; j++) {
        if (chooseWord[j] === playerGuess) {
        answers[j] = playerGuess;
        document.getElementById("blankword").innerHTML=playerGuess.replace(" ");
        guessesRemaining--;
        remainingLetters--; 
        } else if (chooseWord[j] != playerGuess) {
            document.getElementById("guessesremaining").innerHTML=guessesRemaining;
        }
        
        console.log(guessesRemaining)
        }
    }

// Win condition

if (remainingLetters === 0) {
    wins++;
    document.getElementById("wincount").innerHTML=wins;
}

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