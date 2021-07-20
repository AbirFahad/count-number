let p1score= document.getElementById('player1score')
let p2score= document.getElementById('player2score')
let winningScore= document.querySelector('p span')
let inputScore = document.getElementById('inputscore')
let p1btn = document.getElementById('p1')
let p2btn = document.getElementById('p2')
let resetBtn = document.getElementById('reset')
let p1scr=0
let p2scr=0
// let winScore = parseInt(prompt('set the winning number'))
let winScore = 5
let gameOver = false;

p1btn.addEventListener('click', ()=>{
    if(!gameOver){
        p1scr++
        winner(p1scr,winScore)
        p1score.textContent = p1scr;
    }
    
})
p2btn.addEventListener('click',()=>{
    if (!gameOver) {
        p2scr++
       winner(p2scr,winScore)
        p2score.textContent = p2scr;
    }
   
})
function reset() {
    p1scr = 0;
    p2scr = 0;
    p1score.textContent = p1scr;
    p2score.textContent = p2scr;
    gameOver=false
    p1btn.removeAttribute('disabled')
    p2btn.removeAttribute('disabled')
    p1btn.removeAttribute('style')
    p2btn.removeAttribute('style')
}

resetBtn.addEventListener('click',reset)

function winner(oldscr,winscr) {
    if (oldscr===winscr) {
        gameOver=true
        p1btn.setAttribute('disabled','disabled')
        p2btn.setAttribute('disabled','disabled')
        // p2score.style.color="green"
        
    }    
}

inputScore.addEventListener('change',()=>{
    winScore = parseInt(inputScore.value)
    winningScore.textContent = inputScore.value
    inputScore.value = ''
    reset()
})

console.log(winScore);