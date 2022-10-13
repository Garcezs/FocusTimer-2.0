export default function Timer({minutesDisplay, secondsDisplay}) {
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

function updateTimer(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimer(0, 0)
  clearTimeout(timerTimeOut)
}

function addTime() {
  minutes = Number(minutesDisplay.textContent) + 5
  updateTimer(minutes, 0 )
}

function removeTime() {
  if (minutes < 5) {
    minutes = minutes < 0 ? 0 : minutes
  }else {
    minutes = Number(minutesDisplay.textContent) - 5
  }   
  updateTimer(minutes, 0)
}

if (removeTime < 0) {
    minutes = 0
  }

function countdown(){
      timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
  
      updateTimer(minutes, 0)
  
      if (isFinished) {
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

function hold() {
  clearTimeout(timerTimeOut)
}

return {
  resetTimer,
  addTime,
  removeTime,
  countdown,
  hold
}
}