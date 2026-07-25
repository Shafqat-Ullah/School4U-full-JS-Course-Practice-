let randomBtn = document.querySelector('.randomBtn')
let colorInput = document.querySelector('#colorInput')
let applyBtn = document.querySelector('.applyBtn')
let currentColorValue = document.querySelector('.currentColorValue')
let contianer = document.querySelector('.contianer')
const colorArray = ['red','blue','green','yellow','black','gry','pink','orange']

const generateRandomColor =()=>{
    const randomNumber = Math.floor(Math.random()*colorArray.length)
    return colorArray[randomNumber]
    
    
}


generateRandomColor();


const changeColor =(color)=>{
contianer.style.backgroundColor = color;
currentColorValue.innerHTML=color
}

const RandomBtnClick = ()=>{
    // console.log('random button click hova ha');
   let color = generateRandomColor();
changeColor(color)   
    
}


const applyBtnClick = ()=>{
    const color =colorInput.value;
    changeColor(color)
    
}


randomBtn.addEventListener('click',RandomBtnClick)
applyBtn.addEventListener('click',applyBtnClick)




// changeColor('green');