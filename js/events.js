export default function events({sound, timer, buttonPlay, buttonStop, buttonAddFiveMinutes, buttonRemoveFiveMinutes, nightModeButton, dayModeButton, forestSoundButton, rainSoundButton, coffeeShopSoundButton, fireSoundButton, chk}) {
    buttonPlay.addEventListener('click', function() {  
      sound.pressButton()
      timer.countdown()
    })
    
    buttonStop.addEventListener('click', ()=>{
      sound.pressButton()
      timer.resetTimer()
    })
    
    buttonAddFiveMinutes.addEventListener('click', ()=>{
      sound.pressButton()
      timer.addTime()
    })
    
    buttonRemoveFiveMinutes.addEventListener('click', ()=>{
      sound.pressButton()
      timer.removeTime()
    })
    
    forestSoundButton.addEventListener('change', ()=>{
      sound.playForest()
    })
    
    rainSoundButton.addEventListener('change',()=>{
      sound.playRain()
    })
    
    coffeeShopSoundButton.addEventListener('change',()=>{
      sound.playCoffeShop()
    })
    
    fireSoundButton.addEventListener('change',()=>{
      sound.playFireplace()
    })
  
    // dark mode
    chk.addEventListener('change', () => {
      document.body.classList.toggle('dark')
    })
    
    nightModeButton.addEventListener('click', ()=>{
      nightModeButton.classList.add('hide')
      dayModeButton.classList.remove('hide')
    })
  
    dayModeButton.addEventListener('click', ()=>{
      dayModeButton.classList.add('hide')
      nightModeButton.classList.remove('hide')
    })
  }