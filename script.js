let playerScore = 0;
let compScore = 0;

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
};


function playRound(playerSelection){
    compSelection = getComputerChoice();
    let sentenceResult = document.querySelector('.sentence-result');
    let scoreResult = document.querySelector('.score-result');
    let choiceResult = document.querySelector('.choice-result')
    if (playerSelection == compSelection) {
        choiceResult.textContent = `Player choose: ${playerSelection} | Computer choose: ${compSelection}`
        sentenceResult.textContent = 'Round Result: It\'s a tie!'
        scoreResult.textContent = `Player score: ${playerScore} | Computer score:${compScore}`
    } else if (playerSelection == 'Rock' && compSelection == 'Scissor' ||
              playerSelection == 'Scissor' && compSelection == 'Paper' ||
              playerSelection == 'Paper' && compSelection == 'Rock') {
        choiceResult.textContent = `Player choose: ${playerSelection} | Computer choose: ${compSelection}`
        sentenceResult.textContent = `Round Result: Player win, ${playerSelection} beats ${compSelection}`
        playerScore++;
        scoreResult.textContent = `Player score: ${playerScore} | Computer score:${compScore}`
    } else if (compSelection == 'Rock' && playerSelection == 'Scissor' ||
              compSelection == 'Scissor' && playerSelection == 'Paper' ||
              compSelection == 'Paper' && playerSelection == 'Rock') {
        choiceResult.textContent = `Player choose: ${playerSelection} | Computer choose: ${compSelection}`
        sentenceResult.textContent = `Round Result: Player lose, ${compSelection} beats ${playerSelection}`
        compScore++;
        scoreResult.textContent = `Player score: ${playerScore} | Computer score:${compScore}`
    }
};

function playerSelect(){
    const playerButtons = document.querySelectorAll('.button');
    const endResult = document.querySelector('.end-result');
    const playAgainButton = document.querySelector('.play-again');
    playAgainButton.classList.add('hide-button')
    playerButtons.forEach(button => {
        button.addEventListener('click', () => {
            playerSelectValue = button.value;
            playRound(playerSelectValue);    //playRound each time press button (bug over 2 hour) (dont put playRound outside this function, its async have to wait for input)
            if(compScore >= 5 || playerScore >= 5){
                showWinner();
                playerButtons.forEach(button => { //have to use forEach cause its a NodeList
                    button.classList.add('hide-button')});
                playAgainButton.classList.remove('hide-button');
                playAgain();
            }
        });
    });
}

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


function showWinner(){
    const endResult = document.querySelector('.end-result');
    const playerButtons = document.querySelectorAll('.button');
    if(compScore > playerScore){
        endResult.textContent = 'Computa Win!';
    } else {
        endResult.textContent = 'Player Win!';
    } 
    
};

function playAgain(){
    const playerButtons = document.querySelectorAll('.button');
    const playAgainButton = document.querySelector('.play-again');
    
    playAgainButton.addEventListener('click', () => {
        playerButtons.forEach(button => {
            button.classList.remove('hide-button');
        });
        playAgainButton.classList.add('hide-button');
        resetScore(); //STACK EVENT IN ONE EVENTLISTENER
    });
}
    
//CAN STACK EVENT IN ONE EVENTLISTENER    
//     playAgainButton.addEventListener('click', () => {
//         playAgainButton.classList.add('hide-button')});
        
//     playAgainButton.addEventListener('click', resetScore);    
// }

function startGame(){

}





playerSelect();