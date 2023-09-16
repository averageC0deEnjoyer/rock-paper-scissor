let playerScore = 0;
let compScore = 0;

function getComputerChoice(){
    randomNum = Math.floor(Math.random()*3) + 1;
    let compResult = ""
    if(randomNum == 1){
        compResult = "rock";
    } else if(randomNum == 2){
        compResult = "paper"
    } else {
        compResult = "scissor"
    }
    return compResult;
};


function playRound(){
    playerSelection = prompt('what your pick r/p/s');
    compSelection = getComputerChoice();
    if(playerSelection == compSelection){
    console.log('its a tie');
    console.log(`player score: ${playerScore} computer score:${compScore}`)
    } else if (playerSelection == 'rock' && compSelection == 'scissor' ||
              playerSelection == 'scissor' && compSelection == 'paper' ||
              playerSelection == 'paper' && compSelection == 'rock'){
    console.log(`player win, ${playerSelection} beats ${compSelection}`)
    playerScore++;
    console.log(`player score: ${playerScore} computer score:${compScore}`);
    } else if (compSelection == 'rock' && playerSelection == 'scissor' ||
              compSelection == 'scissor' && playerSelection == 'paper' ||
              compSelection == 'paper' && playerSelection == 'rock'){
    console.log(`player lose, ${compSelection} beats ${playerSelection}`);
    compScore++;
    console.log(`player score: ${playerScore} computer score:${compScore}`);}
};


function play5Round(){
    let keepGoing = true
    while(keepGoing){
        playRound();
        if(playerScore >= 5 || compScore >= 5){
            keepGoing = false;
        }
    }
    if(playerScore == compScore){
        console.log('tie!')
    } else if(playerScore > compScore){
        console.log('player Win!')
    } else {
        console.log('computer Win')
    }
    resetScore();
};


function resetScore(){
    playerScore = 0;
    compScore = 0;
};


// give comment for each score, ex 1 0 , yay u got 1 lead
function currentScore(){
    if
}
