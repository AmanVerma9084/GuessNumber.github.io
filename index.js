let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio("audio/audio.mp3");

const init = () => {
    computerGuess= Math.floor(Math.random()*100);
    // console.log(computerGuess);
    document.getElementById("newGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none";
};
const startGame = ()=>{
    document.getElementById("WelcomeScreen").style.display="none";
    document.getElementById("gameArea").style.display="block";
}
                  // Reload the page
const newGameBegin = () =>{
    audio.play;
    window.location.reload();
} ;
                    // start New Game
                    
const startNewGame= () => {
    document.getElementById("newGameButton").style.display="inline";
    userNumberUpdate.setAttribute("disabled", true);
}
                  // Main logic of our game 
const compareGuess = () => {
    audio.play;
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber] ;
    document.getElementById("guesses").innerHTML=userGuess;
    // check the value low and high 
    if(userGuess.length < maxGuess)
    {
    if(userNumber > computerGuess){
        userGuessUpdate.innerHTML="Your guess is high";
        userNumberUpdate.value ="";
    }
    else if(userNumber < computerGuess){
        userGuessUpdate.innerHTML="Your guess is low";
        userNumberUpdate.value ="";
    }
    else{
        userGuessUpdate.innerHTML="It's Correct";
        userNumberUpdate.value ="";
        startNewGame();
    }
    }
    else{
    if(userNumber > computerGuess){
        userGuessUpdate.innerHTML=`You loose!! correct number was ${computerGuess}`;
        userNumberUpdate.value ="";
        startNewGame();
    }
    else if(userNumber < computerGuess){
        userGuessUpdate.innerHTML=`You loose!! correct number was ${computerGuess}`;
        userNumberUpdate.value ="";
        startNewGame();
    }
    else{
        userGuessUpdate.innerHTML="It's Correct";
        userNumberUpdate.value ="";
        startNewGame();
    }
    }   
    document.getElementById("attempts").innerHTML = userGuess.length;

};
const easyMode = () =>{
    audio.play;
    maxGuess = 10;
    startGame();
};
const hardMode = () =>{
    audio.play;
    maxGuess = 5;
    startGame();
};

init();