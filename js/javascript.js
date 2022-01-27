const cPlayText = document.getElementById("cPlayText");
const pPlayText = document.getElementById("pPlayText");

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

function getRandomInt(max){
    let mRand = Math.floor(Math.random() * max);
    console.log(mRand);
    return mRand;
}

function reroll(){
    cPlayText.innerHTML = computerPlay(getRandomInt(3));
    pPlayText.innerHTML = computerPlay(getRandomInt(3));
}