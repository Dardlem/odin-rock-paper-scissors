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

function playerPlay(a){
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
    return htmlId.innerHTML = array;
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

function reroll(){
    handleHistory(playerRollHistory, pRollHistory, pPlayText);
    handleHistory(computerRollHistory, cRollHistory, cPlayText);

    cPlayText.innerHTML = computerPlay(getRandomInt(3));
    pPlayText.innerHTML = computerPlay(getRandomInt(3));
}