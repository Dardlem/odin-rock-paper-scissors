const computerPlayDisplay = document.getElementById("cPlayText");
const playerPlayDisplay = document.getElementById("pPlayText");
const playerRollHistoryDisplay = document.getElementById("playerRollHistory");
const computerRollHistoryDisplay = document.getElementById("computerRollHistory");
const playerPointsDisplay = document.getElementById("points player");
const computerPointsDisplay = document.getElementById("points computer");

let playerRollHistoryData = [];
let computerRollHistoryData = [];

let playerPoints = 0;
let computerPoints = 0;

const ruleList = new Map([
    ["🪨", "✂️"],
    ["✂️", "📄"],
    ["📄", "🪨"],
]);

function calcPoins(valueOne, valueTwo){
    switch (true){
        case valueTwo === ruleList.get(valueOne):
            playerPoints++;
            break;
        case valueOne === ruleList.get(valueTwo):
            computerPoints++;
            break;
        default: console.log("calcPoints defaulted"); break;
    }
}

function displayPoints(){
    playerPointsDisplay.innerHTML = playerPoints;
    computerPointsDisplay.innerHTML = computerPoints;
}

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
    let playerDecision = playHand(playerChoice);
    let computerDecision = handleComputerRound();
    playerPlayDisplay.innerHTML = playerDecision;
    handleHistory(playerRollHistoryData, playerRollHistoryDisplay, playerPlayDisplay);
    calcPoins(playerDecision, computerDecision);
    displayPoints();
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
    let computerDecision = playHand(getRandomInt(3));
    computerPlayDisplay.innerHTML = computerDecision;
    handleHistory(computerRollHistoryData, computerRollHistoryDisplay, computerPlayDisplay);
    return computerDecision;
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