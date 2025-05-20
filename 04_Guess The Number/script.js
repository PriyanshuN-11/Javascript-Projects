const randomNumber = parseInt(Math.random()*100 +1)
const submit = document.querySelector("#subt")

const userInput = document.querySelector("#guessField")

const startOver = document.querySelector(".resultParas")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener("click", function(e) {
        e.preventDefault();

        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    });
}

function validateGuess (guess){
    if(isNaN(guess)){
        alert("enter a vaild number")
    }
    else if(guess <1){
        alert("enter number more than 1")
    }
    else if(guess >100){
        alert("enter number less than 100")
    }
    else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over you lose the random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
    //check if the userinput value is in between 1 and 100  no negative no alphabate
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("you guessed it right")
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage("number is too low")
    }
    else if(guess > randomNumber){
        displayMessage("number is too high")
    }

    //check the value if the vakue is equal to the random no or it also tell hi or low for the number
}

