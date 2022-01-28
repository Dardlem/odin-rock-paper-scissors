const cPlayText = document.getElementById("cPlayText");
const pPlayText = document.getElementById("pPlayText");
const pRollHistory = document.getElementById("playerRollHistory");
const cRollHistory = document.getElementById("computerRollHistory");

let playerRollHistory = [];
let computerRollHistory = [];

function computerPlay(a){
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

function rollHistory(array, string){
    return array.push(string);
}

function updateRollHistory(array, htmlId){
    htmlId.innerHTML = null;
    array.forEach(element => {
        htmlId.innerHTML += element + "<br>";
    });
    return;
}

function handleHistory(array, history, source){
    rollHistory(array, String(source.innerHTML));
    updateRollHistory(array, history);
    return;
}

function getRandomInt(max){
    let mRand = Math.floor(Math.random() * max);
    console.log(mRand);
    return mRand;
}

function handlePcRound(){
    handleHistory(computerRollHistory, cRollHistory, cPlayText);
    cPlayText.innerHTML = computerPlay(getRandomInt(3));
}

function playerBtnRock(){
    handleHistory(playerRollHistory, pRollHistory, pPlayText);
    pPlayText.innerHTML = computerPlay(0);
    handlePcRound();
}

function playerBtnPaper(){
    handleHistory(playerRollHistory, pRollHistory, pPlayText);
    pPlayText.innerHTML = computerPlay(1);
    handlePcRound();
}

function playerBtnScissors(){
    handleHistory(playerRollHistory, pRollHistory, pPlayText);
    pPlayText.innerHTML = computerPlay(2);
    handlePcRound();
}