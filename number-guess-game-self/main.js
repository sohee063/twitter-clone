let computerNum = 0;
let userNum = document.getElementById("user-num");
let playButton=document.getElementById("play-button");
let resetButton=document.getElementById("reset-button");
let resultArea=document.getElementById("result-area")
let chances = 5;
let chanceArea=document.getElementById("chance-area");
let gameover = false;
let history = []

playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userNum.addEventListener("focus",erase)

function pickrandom(){
    computerNum = Math.floor((Math.random()*100))+1;
    console.log(computerNum)
}

function play(){

    console.log(chances)
    let NumValue= userNum.value;

    if(NumValue>100||NumValue<1){
        resultArea.textContent="1과 100사이의 값을 입력해 주세요!"
        return;
    }

    if(history.includes(NumValue)){
        resultArea.textContent="이미 입력한 값입니다."
        return;
    }

    
    if(NumValue>computerNum){
        resultArea.textContent="DOWN!"
    }else if(NumValue<computerNum){
        resultArea.textContent="UP!"
    }else{
        resultArea.textContent="맞췄습니다!"
    }

    chances--;
    chanceArea.textContent=`${chances}번 남았습니다!`

    history.push(NumValue);


    if(chances<1){
        gameover = true;
    }
    if(gameover == true){
        playButton.disabled = true;        
    }

    
}


function reset(){
    userNum.value=""
    pickrandom()
    chanceArea.textContent = "게임을 초기화 하였습니다."
}

function erase(){
    userNum.value=""
}

pickrandom()