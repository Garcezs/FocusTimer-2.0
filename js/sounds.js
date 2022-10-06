export default function () {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const forestSound = new Audio("./sounds/Floresta.wav")
  const rainSound = new Audio("./sounds/Chuva.wav")
  const coffeeShopSound = new Audio("./sounds/cafeteria.wav")
  const fireplaceSound = new Audio("./sounds/Lareira.wav")

  let forestinputVolume = document.getElementById("forest-volume")
  let raininputVolume = document.getElementById("rain-volume")
  let coffeeShopinputVolume = document.getElementById("coffee-volume")
  let fireplaceinputVolume = document.getElementById("fire-volume")

  forestSound.loop = true;
  rainSound.loop = true;
  coffeeShopSound.loop = true;
  fireplaceSound.loop = true;


function forestVolume() {
  forestinputVolume.addEventListener("change", function(e){
  forestSound.volume = e.currentTarget.value / 100
  })
}

function rainVolume() {
  raininputVolume.addEventListener("change", function(e){
   rainSound.volume = e.currentTarget.value / 100
    })
}

function coffeeShopVolume() {
  coffeeShopinputVolume.addEventListener("change", function(e){
    coffeeShopSound.volume = e.currentTarget.value / 100
     })
}

function fireplaceVolume() {
  fireplaceinputVolume.addEventListener("change", function(e){
    fireplaceSound.volume = e.currentTarget.value / 100
     })
}

function playForest() {
  forestVolume()
  forestVolume === 0 ? forestSound.pause() : forestSound.play();
}

function playRain() {
  rainVolume()
  rainVolume === 0 ? rainSound.pause() : rainSound.play();
}

function playCoffeShop() {
  coffeeShopVolume()
  coffeeShopVolume === 0 ? coffeeShopSound.pause() : coffeeShopSound.play();
}

function playFireplace() {
  fireplaceVolume()
  fireplaceVolume === 0 ? fireplaceSound.pause() : fireplaceSound.play();
}

function pressButton() {
  buttonPressAudio.play()
}

function timeEnd() {
  kitchenTimer.play()
}


return {
  buttonPressAudio,
  kitchenTimer,
  forestSound,
  coffeeShopSound,
  fireplaceSound,
  rainSound,
  playForest,
  playRain,
  playCoffeShop,
  playFireplace,
  pressButton,
  timeEnd,
}}