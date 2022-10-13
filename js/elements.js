let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonAddFiveMinutes = document.querySelector('.addFiveMinutes')
let buttonRemoveFiveMinutes = document.querySelector('.removeFiveMinutes')
let nightModeButton = document.querySelector('.night')
let dayModeButton = document.querySelector('.day')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const forestSoundButton = document.querySelector('.forest')
const rainSoundButton = document.querySelector('.rain')
const coffeeShopSoundButton = document.querySelector('.coffee')
const fireSoundButton = document.querySelector('.fire')
const chk = document.getElementById('chk');

export const elements = {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonAddFiveMinutes,
    buttonRemoveFiveMinutes,
    nightModeButton,
    dayModeButton,
    minutesDisplay,
    secondsDisplay,
    forestSoundButton,
    rainSoundButton,
    coffeeShopSoundButton,
    fireSoundButton,
    chk
}