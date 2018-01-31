//global

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = "";
var guessedLetters = [];
var newLetter = "";
var randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = Math.floor(Math.random() * randomLetter.length);
var answer = randomLetter[computerGuess];
console.log(answer);


var updateComputersGuess = function () {
    newLetter = Math.floor(Math.random() * randomLetter.length);
};


//on key press
document.onkeypress = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


    if (answer === userGuess) {
        wins++;
        alert("You won! Play again?");
        guessesLeft = 9;
        guessedLetters = [];
        computerGuess = Math.floor(Math.random() * randomLetter.length);
        answer = randomLetter[computerGuess];
        console.log(answer);
        document.getElementById("body").style.backgroundImage = "url( 'Assets/Images/mystletter.jpg')";
    }

    else if (guessesLeft === 0) {

        
        losses++;
        alert('Wrong! Try again?');
        guessesLeft = 9;
        guessedLetters.length = 0;
        computerGuess = Math.floor(Math.random() * randomLetter.length);
        answer = randomLetter[computerGuess];
        console.log(answer);
        document.getElementById("body").style.backgroundImage = "url( 'Assets/Images/brokenmystletter.jpg')";
    }

    else (guessedLetters.indexOf(userGuess) < 0 && randomLetter.indexOf(userGuess) >= 0); {
        guessedLetters[guessedLetters.length] = userGuess;
        guessesLeft--;

    }

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("user-guess").innerHTML = "Your guesses so far: " + guessedLetters;




}
