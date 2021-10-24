const player = document.getElementById("player");
const cactus = document.getElementById("cactus");
const background = document.getElementById("background");
const buttonPlayStop = document.getElementById("buttonPlayStop");
let score = 0;

let scoreInterval;



document.addEventListener("click", function(){
    player.classList.add("playerJump");
})

player.addEventListener('animationend', () => {
    player.classList.remove("playerJump");
})

function pauseGame() {
    cactus.style.animationPlayState = 'paused';
    player.style.animationPlayState = 'paused';
    background.style.animationPlayState = 'paused';
    clearInterval(scoreInterval);
    scoreInterval = setInterval(() => {
        score++;
        document.getElementById("score").innerText = score;
    }, 1000)
}

function resumeGame() {
    cactus.style.animationPlayState = 'running';
    player.style.animationPlayState = 'running';
    background.style.animationPlayState = 'running';
}

buttonPlayStop.addEventListener('click', () => {
    if(buttonPlayStop.classList.contains("play")){
        resumeGame();
        //reanuda el juego
    } else {
        pauseGame();
    }
    buttonPlayStop.classList.toggle("play");
    //si es un boton de play continúa el juego
    //si es un botón de pausa, pausa el juego
})

scoreInterval = setInterval(() => {
    score++;
    document.getElementById("score").innerText = score;
}, 1000)