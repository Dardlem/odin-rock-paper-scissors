const computerPlayDisplay = document.getElementById("cPlayText");
const playerPlayDisplay = document.getElementById("pPlayText");
const playerRollHistoryDisplay = document.getElementById("playerRollHistory");
const computerRollHistoryDisplay = document.getElementById("computerRollHistory");

let playerRollHistoryData = [];
let computerRollHistoryData = [];

let playerPoints = 0;
let computerPoints = 0;

function playHand(a){
    if(a == 0){
        return "🪨";
    }
    else if(a == 1){
        return "📄";
    }
    else if(a == 2){
        return "✂️";
    }
}

function playRound(playerChoice){
    handleHistory(playerRollHistoryData, playerRollHistoryDisplay, playerPlayDisplay);
    playerPlayDisplay.innerHTML = playHand(playerChoice);
    handleComputerRound();
}

function updateRollHistory(array, string){
    return array.push(string);
}

function displayRollHistory(array, htmlId){
    htmlId.innerHTML = null;
    array.forEach(element => {
        htmlId.innerHTML += element + "<br>";
    });
}

function handleHistory(array, history, source){
    updateRollHistory(array, String(source.innerHTML));
    displayRollHistory(array, history);
}

function getRandomInt(max){
    let mRand = Math.floor(Math.random() * max);
    console.log(mRand);
    return mRand;
}

function handleComputerRound(){
    handleHistory(computerRollHistoryData, computerRollHistoryDisplay, computerPlayDisplay);
    computerPlayDisplay.innerHTML = playHand(getRandomInt(3));
}

function playerBtnRock(){
    playRound(0);
}

function playerBtnPaper(){
    playRound(1);
}

function playerBtnScissors(){
    playRound(2);
}