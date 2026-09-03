let numberOfColors = 60;
let numberContainer = document.querySelector('.numberContainer');
let timerValue = document.querySelector('.timerValue');
let scoreValue = document.querySelector('.scoreValue');
let targetValue = document.querySelector('.targetValue');
let targetNumber = Math.ceil(Math.random() * 60);
let timer = 10;
let target;

 function timerReset(){


    setInterval(() => {
    if(timer <= 0){
       let elem = document.querySelector('div');
       elem.innerText = 'Game Over';
       numberContainer.innerHTML= `
       <div class="gameOver">Game Over</div>
       `
        return;
    }
timer--;
timerValue.innerText = timer;
// if(timer === 0){
//     alert('Game Over');
//     location.reload();
// }
// console.log(timer);

},1000);    
 }
 timerReset();

function resetGame(){

timerReset();
generateTarget();


}
setInterval(() => {
    if(timer <= 0){
       let elem = document.querySelector('div');
       elem.innerText = 'Game Over';
       numberContainer.innerHTML= `
       <div class="gameOver">Game Over</div>
       `
        return;
    }
timer--;
timerValue.innerText = timer;
// if(timer === 0){
//     alert('Game Over');
//     location.reload();
// }
// console.log(timer);

},1000);
function generateTarget(){
    target = Math.ceil(Math.random() * 60);
targetValue.innerText = target;

}
generateTarget();


function resetGame(){


}


for (let i = 0; i < numberOfColors; i++) {
    let devElement = document.createElement('div');
    devElement.className = 'circle';
    let number = Math.ceil(Math.random() * 60);
    devElement.innerText = number;
  numberContainer.appendChild(devElement);
}


numberContainer.addEventListener('click', (event) => {
   let targetNumber = Number (targetValue.innerText);
    let number = Number (event.target.innerText);
    if(targetNumber === number){
        let score = Number (scoreValue.innerText);
        score+= 10;
        scoreValue.innerText = score;
    }
    generateTarget();

})