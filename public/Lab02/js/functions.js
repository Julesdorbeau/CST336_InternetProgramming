//Javascript
var randomNumber = Math.floor(Math.random()*99) +1;
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHi = document.querySelector('#lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton = document.querySelector('#reset');
$(guessField).focus();
resetButton.style.display = 'none';

var wonField = document.querySelector('#wonField');
var wonCount = 0;
var looseField = document.querySelector('#looseField');
var looseCount = 0;
looseField.innerHTML = 'Loose counter : ';
wonField.innerHTML = 'Won counter : ';
wonField.style.backgroundColor = 'green';
looseField.style.backgroundColor = 'blue';

function checkGuess() {
    var userGuess = Number(guessField.value);
    if(userGuess > 99 || isNaN(userGuess) || userGuess === 0) {
        lastResult.innerHTML = 'Wrong entry !';
        lastResult.style.backgroundColor = 'red';
        guessField.value = '';
        $(guessField).focus();
    }
    else {
        if (guessCount === 1) {
            guesses.innerHTML = 'Previous guesses : ';
        }
        guesses.innerHTML += userGuess + ' ';
        if (userGuess === randomNumber) {
            lastResult.innerHTML = 'Congratulations ! You got it right !';
            lastResult.style.backgroundColor = 'green';
            lowOrHi.innerHTML = '';
            wonCount++;
            wonField.innerHTML = 'Won counter : ' + wonCount;
            setGameOver();
        } else if (guessCount >= 7) {
            lastResult.innerHTML = 'Sorry, you lost !';
            looseCount++;
            looseField.innerHTML = 'Loose counter : ' + looseCount;
            setGameOver();
        } else {
            lastResult.innerHTML = 'Wrong !';
            lastResult.style.backgroundColor = 'red';
            if (userGuess < randomNumber) {
                lowOrHi.innerHTML = 'Last guess was too low !';
            } else if (userGuess > randomNumber) {
                lowOrHi.innerHTML = 'Last guess was too high !';
            }
        }
        guessCount++;
        guessField.value = '';
        $(guessField).focus();
    }
}

//JQuery example code
/*guessSubmit.addEventListener('click', checkGuess);
$(document).ready(function(){
    $(".guessSubmit").click(function(){
        $(checkGuess());
    });
});*/

$(".guessSubmit").click(checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    $(resetButton).click(resetGame);
}

function resetGame() {
    guessCount = 1;

    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i<resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.style.display = 'none';

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    $(guessField).focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random()*99)+1;
    wonField.innerHTML = 'Won counter : ' + wonCount;
    looseField.innerHTML = 'Loose counter : ' + looseCount;
}