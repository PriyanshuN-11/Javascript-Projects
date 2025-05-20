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

function displayGuess(guess){
    userInput.value = " "
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
    //clean the value in and update array and guesses remaining 
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
    //pass the message in lowOrHi
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}