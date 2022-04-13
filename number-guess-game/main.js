let computerNum = 0;
let playbutton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 10;
let gameOver = false;
let chanceArea = document.getElementById("chance-area")
let history = []

playbutton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",erase)

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}

function play(){
    let userValue = userInput.value;
    
    if(userValue<1||userValue>100){
        resultArea.textContent="1과 100사이 숫자를 입력해 주세요"
        return;
    }

    if(history.includes(userValue))
    {
        resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요";
        return;
    }
    

    chances -- ;
    chanceArea.textContent = `남은 기회 : ${chances}번`;

    if(userValue < computerNum){
        resultArea.textContent = "UP!!"
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN!!"
    }else {
        resultArea.textContent = "맞추셨습니다!!"
        playbutton.disabled = true;
    }

    history.push(userValue);



    if(chances<1){
        gameOver=true
    }

    if (gameOver == true){
        playbutton.disabled = true;
    }
}

function reset(){
    userInput.value = ""
    pickRandomNum()
    resultArea.textContent="결과값이 여기 나옵니다";
}

function erase(){
    userInput.value = ""
}



pickRandomNum();

