let timer = document.querySelector('.timer');
let scoreBoard = document.querySelector('.score');
let myPikachu = document.querySelectorAll('.pikachu');
const startGame = document.getElementById("start-game")
const stopGame = document.getElementById("stop-game")
const resetGame = document.getElementById("reset-game")
let beginInt = null
let timerInt = null
let playTime = 20
myScore = 0

const addScoreBoard = () => {
    myScore += 1
    scoreBoard.innerHTML = myScore
}

const showPikachu = () => {
    let myPikachu = randomPikachu()
    myPikachu.classList.add('down')

    setTimeout(() => {
        myPikachu.classList.remove('down')
    }, 1000)
}

const randomPikachu = () => {
    let i = Math.floor(Math.random() *6)
    let pika = myPikachu[i]
    return pika
}

const begin = () => {
    countdown()
    startGame.style.display = "none"
    stopGame.style.display = "block"
    beginInt = setInterval(() => {
    showPikachu()
    
    }, 1000);
}

const stop = () => {
  clearInterval(beginInt)
  clearInterval(timerInt)
  
  if (playTime == 20) {
    return playTime
  } else if (playTime != 20) {
      if (stopGame.innerText === "Stop !!") {
        resetGame.style.display = "block"
        stopGame.innerText = "Resume !!"
      } else if (stopGame.innerText === "Resume !!")  {
      stopGame.innerText = "Stop !!"
      resetGame.style.display = "none"
      begin()
    } 
  }
}


const countdown = () => {
    timerInt = setInterval(() => {
      if (playTime <= 0) {
        clearInterval(timerInt);
        clearInterval(beginInt)
        resetGame.style.display = "block"
        stopGame.style.display = "none"
      }
  
      timer.innerText = playTime;
      playTime--;
    }, 1000);
  }

const reset = () => {
  playTime = 20
  myScore = 0
  scoreBoard.innerText = "0"
  resetGame.style.display = "none"
  stopGame.innerText = "Stop !!"
  timer.innerText = playTime
  startGame.style.display = "block"
  stopGame.style.display = "none"
}

resetGame.addEventListener("click", reset)
startGame.addEventListener("click", begin)
stopGame.addEventListener("click", stop)
myPikachu.forEach(pika => pika.addEventListener ("click", addScoreBoard))