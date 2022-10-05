export default function () {
  var isPlaying = false;
  const forestSound = new Audio("./sounds/Floresta.wav")
  const rainSound = new Audio("./sounds/Chuva.wav")
  const coffeeShopSound = new Audio("./sounds/cafeteria.wav")
  const fireplaceSound = new Audio("./sounds/Lareira.wav")


  function playForest() {
  isPlaying ? forestSound.pause() : forestSound.play();
}

  forestSound.onplaying = function() {
    isPlaying = true;
};
  forestSound.onpause = function() {
    isPlaying = false;
};


function playRain() {
  isPlaying ? rainSound.pause() : rainSound.play();
}

  rainSound.onplaying = function() {
    isPlaying = true;
};
  rainSound.onpause = function() {
    isPlaying = false;
};

function playCoffeShop() {
  isPlaying ? coffeeShopSound.pause() : coffeeShopSound.play();
}

  coffeeShopSound.onplaying = function() {
    isPlaying = true;
};
  coffeeShopSound.onpause = function() {
    isPlaying = false;
};

function playFireplace() {
  isPlaying ? fireplaceSound.pause() : fireplaceSound.play();
}

  fireplaceSound.onplaying = function() {
    isPlaying = true;
};
  fireplaceSound.onpause = function() {
    isPlaying = false;
};

  
return {
    forestSound,
    rainSound,
    coffeeShopSound,
    fireplaceSound,
    playForest,
    playRain,
    playCoffeShop,
    playFireplace 
}
}



  
    

  
