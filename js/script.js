const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const scoreDisplay = document.getElementById('score')
let score = 0; 

const modal = document.getElementById("myModal")
const restartButton = document.getElementById("restartButton")


function showGameOverModal() {
    modal.style.display = "block";
  document.getElementById("gameOverScore").textContent = `Pontuação: ${score}`

}


restartButton.addEventListener("click", function () {
  
  location.reload();
});


const jump = () =>{
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    } , 500)

}

const loop = setInterval(() =>{
    const pipe_position = pipe.offsetLeft
    const mario_position = +window.getComputedStyle(mario).bottom.replace('px' , '')
    const cloud_position = clouds.offsetLeft

    if (pipe_position <= 120 && pipe_position > 0 && mario_position <80) {
        pipe.style.animation ='none'
        pipe.style.left = `${pipe_position}px`
        clouds.style.animation ='none'
        clouds.style.left = `${cloud_position}px`
        mario.style.animation ='none'
        mario.style.left = `${mario_position}px`
        
        mario.src = './images/game-over.png'
        mario.style.width = '85px'
        mario.style.marginLeft = '50px'

       

        clearInterval(loop)
        showGameOverModal();
    }
    else if (pipe_position < 120 && pipe_position > 0) {
        score += 1;
        scoreDisplay.textContent = score;
    }

    

} , 10)


document.addEventListener('keydown', jump)