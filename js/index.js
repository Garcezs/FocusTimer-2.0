import { elements } from './elements.js'
import Sounds from './sounds.js'
import Timer from './timer.js'
import Events from './events.js'

const {
  buttonPlay,
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
const timer = Timer({minutesDisplay, secondsDisplay})
const {} = Events({timer, sound, buttonPlay, buttonStop, buttonAddFiveMinutes, buttonRemoveFiveMinutes, nightModeButton, dayModeButton, forestSoundButton, rainSoundButton, coffeeShopSoundButton, fireSoundButton, chk})