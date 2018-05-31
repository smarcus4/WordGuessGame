//establish variables for game wins, losses, picked word, guesses left, game running, picked word placeholder, guessed letter bank, incorrect letter bank
var newGameButton = document.getElementById("gameButton");
var placeHolders = document.getElementById("placeHolders");
var guessedLetters = document.getElementById("guessed-letters");
var guessesLeft = document.getElementById("guesses-Left");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");


var wordList = ["Orion","Cassiopia","Big Dipper","Scorpio","Virgo","Hercules", "Aquarius","Cygnus"];
var wins = 0;
var losses=0;
var guessesLeft = 10;
var gameRunning = false;
var pickedWord = "";
var pickedWordPlaceHolderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];


function newGame(){

    gameRunning= true;
    var guessesLeft = 10;
    var pickedWordPlaceHolderArr = [];
    var guessedLetterBank = [];
    var incorrectLetterBank = [];

    pickedWord = wordList[Math.floor(Math.random() * wordList.length)];

    for(var i =0; i<pickedWord.length; i++){
        if(pickedWord[i]=== " "){
            pickedWordPlaceHolderArr.push(" ");
        }else{
            pickedWordPlaceHolderArr.push(" _")
        }
    }


    guessesLeft.textContent = guessesLeft;
    placeHolders.textContent = pickedWordPlaceHolderArr.join(" ");
    guessedLetters.textContent = incorrectLetterBank;

}

function letterGuess(letter){

    console.log(letter);


    if(gameRunning=== true && guessedLetterBank.indexOf(letter) === -1){

        guessedLetterBank.push(letter);

        for(var i=0; i<pickedWord.length; i++){
            if(pickedWord[i].toLowerCase() === letter.toLowerCase){
                pickedWordPlaceHolderArr[i] === pickedWord[i];
            }
        }

        placeHolders.textContent = pickedWordPlaceHolderArr.join("");
        checkIncorrect(letter);
    }else if(gameRunning === false){
        alert("The Game is not running at the moment, please select new game button to start a new round!");
    }else{
        alert("You have already guessed this letter, please try again");
    }
}


function checkIncorrect(letter){
    if(
        pickedWordPlaceHolderArr.indexOf(letter.toLowerCase()) === -1 
        && pickedWordPlaceHolderArr.indexOf(letter.toUpperCase()) === -1
    )
    {
         
        guessesLeft--;
        incorrectLetterBank.push(letter);
        guessedLetters.textContent = incorrectLetterBank.join(" ");
        guessesLeft.textContent = guesses-Left;
    }
}


newGameButton.addEventListener("click", newGame);

document.onkeyup = function(event){
    console.dir(event);
    if(event.keyCode >= 65 && event.keyCode <= 90){
        letterGuess(event.key);
    }
}