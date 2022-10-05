import Sounds from './sounds.js'


let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonAddFiveMinutes = document.querySelector('.addFiveMinutes')
let buttonRemoveFiveMinutes = document.querySelector('.removeFiveMinutes')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

// Sounds
const forestSoundButton = document.querySelector('.forest')
const rainSoundButton = document.querySelector('.rain')
const coffeeShopSoundButton = document.querySelector('.coffee')
const fireSoundButton = document.querySelector('.fire')

const sound = Sounds()

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)


function updateTimer(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimer(minutes, 0)
  clearTimeout(timerTimeOut)
}

function addTime() {
  minutes = Number(minutesDisplay.textContent) + 5
  updateTimer(minutes, 0 )
}

function removeTime() {
  if (minutes < 5) {
    minutes = 0
  }else {
    minutes = Number(minutesDisplay.textContent) - 5
  }
    
  updateTimer(minutes, 0)
}

function countdown(){
      timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
  
      updateTimer(minutes, 0)
  
      if (minutes <= 0 && seconds <= 0) {
        resetTimer()
        return
      }
  
      if( seconds <= 0 ) {
        seconds = 60
        --minutes
      }
  
      updateTimer(minutes, String(seconds - 1))
      
      
  
      countdown()
    }, 1000)
}

buttonPlay.addEventListener('click', function() {  
  countdown()
})

buttonStop.addEventListener('click', ()=>{
  resetTimer()
})

buttonAddFiveMinutes.addEventListener('click', ()=>{
  addTime()
})

buttonRemoveFiveMinutes.addEventListener('click', ()=>{
  removeTime()
})

forestSoundButton.addEventListener('click', ()=>{
  sound.playForest()
})

rainSoundButton.addEventListener('click',()=>{
  sound.playRain()
})

coffeeShopSoundButton.addEventListener('click',()=>{
  sound.playCoffeShop()
})

fireSoundButton.addEventListener('click',()=>{
  sound.playFireplace()
})