let playerScore = 0;
let compScore = 0;

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
};

//learn new things, can select value using addEventListener. wait for click then assign value, then pass the value to another function
document.addEventListener('click', playerSelect)
function playerSelect(event) {
    console.log(event.target);
    element = event.target;
    const rock = 'Rock';
    const paper = 'Paper';
    const scissor = 'Scissor';
    if (element.classList.contains("div-selection") && element.id == ('rockdiv')){
        playRound(rock);
        console.log('rock submit');
    } else if (element.classList.contains("selection-text") && element.id == ('rocktext')){
        playRound(rock);
        console.log('rock submit');
    } else if (element.classList.contains("selection") && element.id == ('rockimg')){
        playRound(rock);
        console.log('rock submit')
    } else if (element.classList.contains("div-selection") && element.id == ('paperdiv')){
        playRound(paper);
        console.log('paper submit');
    } else if (element.classList.contains("selection-text") && element.id == ('papertext')){
        playRound(paper);
        console.log('paper submit'); 
    } else if (element.classList.contains("selection") && element.id == ('paperimg')){
        playRound(paper);
        console.log('paper submit')
    } else if (element.classList.contains("div-selection") && element.id == ('scissordiv')){
        playRound(scissor);
        console.log('scissor submit');
    } else if (element.classList.contains("selection-text") && element.id == ('scissortext')){
        playRound(scissor);
        console.log('scissor submit'); 
    } else if (element.classList.contains("selection") && element.id == ('scissorimg')){
        playRound(scissor);
        console.log('scissor submit')
    }
}

function playRound(playerSelection){
    compSelection = getComputerChoice();
    let sentenceResult = document.querySelector('.sentence-result');
    let scoreResult = document.querySelector('.score-result');
    let robotChoice = document.querySelector('.robot-choice');
    let playerChoice = document.querySelector('.player-choice');
    playerChoice.textContent = playerSelection;
    robotChoice.textContent = compSelection;
    console.log(playerSelection);
    console.log(compSelection);
    if (playerSelection == compSelection) {
        sentenceResult.textContent = 'Round Result: It\'s a tie!'
        scoreResult.textContent = `Player score: ${playerScore} | Computer score:${compScore}`
    } else if (playerSelection == 'Rock' && compSelection == 'Scissor' ||
              playerSelection == 'Scissor' && compSelection == 'Paper' ||
              playerSelection == 'Paper' && compSelection == 'Rock') {
        sentenceResult.textContent = `Round Result: Player win, ${playerSelection} beats ${compSelection}`
        playerScore++;
        scoreResult.textContent = `Player score: ${playerScore} | Computer score:${compScore}`
    } else if (compSelection == 'Rock' && playerSelection == 'Scissor' ||
              compSelection == 'Scissor' && playerSelection == 'Paper' ||
              compSelection == 'Paper' && playerSelection == 'Rock') {
        sentenceResult.textContent = `Round Result: Player lose, ${compSelection} beats ${playerSelection}`
        compScore++;
        scoreResult.textContent = `Player score: ${playerScore} | Computer score:${compScore}`
    }
    checkWinner();
};

function resetScore(){
    const endResult = document.querySelector('.end-result');
    const sentenceResult = document.querySelector('.sentence-result');
    const scoreResult = document.querySelector('.score-result');
    playerScore = 0;
    compScore = 0;
    scoreResult.textContent = '';
    endResult.textContent = '';
    sentenceResult.textContent = '';
 };

function checkWinner(){
    const containerRobot = document.querySelector('.container-robot');
    const containerPlayer = document.querySelector('.container-player');
    const playAgainButton = document.querySelector('.play-again');
    if(playerScore == 5 || compScore == 5){
        showWinner();
        playAgainButton.classList.remove('hide-button');
        containerPlayer.classList.add('invisible');
        containerRobot.classList.add('invisible');
    }
}

function showWinner(){
    const endResult = document.querySelector('.end-result');
    const playerButtons = document.querySelectorAll('.button');
    if(compScore > playerScore){
        endResult.textContent = 'Computa Win!';
    } else {
        endResult.textContent = 'Player Win!';
    } 
    
};

const playAgainButton = document.querySelector('.play-again');
playAgainButton.addEventListener('click',playAgain)
function playAgain(){
    const playAgainButton = document.querySelector('.play-again');
    const playerChoice = document.querySelector('.player-choice');
    const robotChoice = document.querySelector('.robot-choice')
    const containerRobot = document.querySelector('.container-robot');
    const containerPlayer = document.querySelector('.container-player');
    const sentenceResult = document.querySelector('.sentence-result');
        playAgainButton.classList.add('hide-button');
        resetScore(); //STACK EVENT IN ONE EVENTLISTENER
        playerChoice.textContent = '';
        robotChoice.textContent = '';
        containerRobot.classList.remove('invisible');
        containerPlayer.classList.remove('invisible');
        sentenceResult.textContent = 'Welcome to the game!'
    }
    
//CAN STACK EVENT IN ONE EVENTLISTENER    
//     playAgainButton.addEventListener('click', () => {
//         playAgainButton.classList.add('hide-button')});
        
//     playAgainButton.addEventListener('click', resetScore);    
// }





