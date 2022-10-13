export default function events({sound, timer, controls, buttonPlay, buttonPause, buttonStop, buttonAddFiveMinutes, buttonRemoveFiveMinutes, nightModeButton, dayModeButton, forestSoundButton, rainSoundButton, coffeeShopSoundButton, fireSoundButton, chk}) {
    buttonPlay.addEventListener('click', function() {  
      controls.play()
      timer.countdown()
    })

    buttonPause.addEventListener('click', ()=>{
      controls.pause()
      timer.hold()
    })
    
    buttonStop.addEventListener('click', ()=>{
      timer.resetTimer()
    })
    
    buttonAddFiveMinutes.addEventListener('click', ()=>{
      timer.addTime()
    })
    
    buttonRemoveFiveMinutes.addEventListener('click', ()=>{
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