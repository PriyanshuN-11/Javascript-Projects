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

