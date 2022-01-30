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
    playerPlayDisplay.innerHTML = playHand(playerChoice);
    handleHistory(playerRollHistoryData, playerRollHistoryDisplay, playerPlayDisplay);
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
    computerPlayDisplay.innerHTML = playHand(getRandomInt(3));
    handleHistory(computerRollHistoryData, computerRollHistoryDisplay, computerPlayDisplay);
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