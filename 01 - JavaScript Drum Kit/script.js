
window.addEventListener("keydown", playSound);
keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", shrink));

function playSound(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    console.log(audio);
    if(!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
    console.log(key);
    key.classList.add("playing");
}

function shrink(e) {
    if (e.propertyName !== "transform") {
        return;
    }
    this.classList.remove("playing");
}
