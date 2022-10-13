import { elements } from './elements.js'
import Sounds from './sounds.js'
import Timer from './timer.js'
import Controls from './controls.js'
import Events from './events.js'

const {
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
} = elements

const sound = Sounds()
const controls = Controls(buttonPlay, buttonPause)
const timer = Timer({minutesDisplay, secondsDisplay})
const {} = Events({timer, controls, sound, buttonPlay, buttonPause, buttonStop, buttonAddFiveMinutes, buttonRemoveFiveMinutes, nightModeButton, dayModeButton, forestSoundButton, rainSoundButton, coffeeShopSoundButton, fireSoundButton, chk})