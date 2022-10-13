export default function controls(buttonPlay, buttonPause){
    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
    }

    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }


    return {
        play,
        pause
    }
}