
// 1 DOM

// 2 SELECTION OF HTML ELEMENT
// let a = document.querySelector("h1");
// console.log(a);
// let a = document.querySelector("p")
// console.log(a);



// 3 HOW TO CHANGE OR MANUPULATE HTML
// let b = document.querySelector('h1');
// b.innerHTML ="hello bahi kis ho ap"
// let par = document.querySelector("p")
// par.innerHTML=(" hello hham ne par ko change kai ha")

// 4 change the style of css   background color and text color
// let style = document.querySelector('h1')
// style.style.backgroundColor=("red")
// let paraStyle = document.querySelector("P")
// paraStyle.style.backgroundColor=("green")

// NOW PROPER WE WILL CHANGE

// let h1Color = document.querySelector("h1")
// h1Color.style.color="white"

// let parColor = document.querySelector('p')
// parColor.style.color=("White")

// Event Listener (event ko kisi sona jiea)
// let btn = document.querySelector("button")
// btn.addEventListener('click',()=>{
// btn.style.backgroundColor="red";
// btn.style.backgroundColor="yellow";
// btn.style.color='green'
// })



// ......try question

// let a = document.querySelector("h1")
// console.log(a);
// a.innerHTML ="how are you bro";
// a.style.backgroundColor="red";
// a.style.color="white",

// let btn = document.querySelector("button")
// btn.addEventListener('click',()=>{
//     btn.style.backgroundColor='red'
// })

// let par = document.querySelector('p')
// par.style.color='green';
// par.style.backgroundColor='red'


// let parClicked = document.querySelector('p')
// parClicked.addEventListener('click',()=>{
//     // parClicked.style.color='red'
//     // alert("hello bro ap ne to click kar lei ha")
//     parClicked.innerHTML='hello you aslo clciked on para so the clicked is apply'
//     parClicked.style.fontSize='50px'
//     parClicked.style.color='red'
// })


// let btn = document.querySelector('button')
// btn.addEventListener('click',()=>{
//     div=document.querySelector('div')
    
//     div.style.backgroundColor='red'
//     // btn.innerHTML='OFF'
 

// })
// let btn2 =document.querySelector('.offBtn')
// btn2.addEventListener('click',()=>{
//     div.style.backgroundColor='black'
// })


// button on and off 

// let btn=document.querySelector('.ON')
// btn.addEventListener('click',()=>{
//     div=document.querySelector('div')
//     div.style.backgroundColor ='red'
// })
// let btn2=document.querySelector('.offBtn')
// btn2.addEventListener('click',()=>{
//     div=document.querySelector('div')
//     div.style.backgroundColor ='black'
// })

// Now Scale OR Zoom the shape
// let btn =document.querySelector('.ON')
// btn.addEventListener('click',()=>{

//     div=document.querySelector('div')
//     div.style.backgroundColor = 'red'
//     div.style.scale ='0.5'
//         div.style.border = '5px solid gray'

// })
// let offBtn =document.querySelector('.offBtn')
// offBtn.addEventListener('click',()=>{

//     div=document.querySelector('div')
//     div.style.backgroundColor = 'black'
//     div.style.border = '5px solid yellow'
//     div.style.scale ='1'
// })
// console.log(window);

// let div = document.querySelector('div')
// console.log(div);
// let div = document.getElementsByTagName('div')
// console.log(div);

// console.log(document);
// console.dir(document)
// let a = document.getElementsByName('div')
// console.log(a);

// let id = document.getElementById('div1')
// id.style.backgroundColor='yellow'
// console.log(id);


// let box = document.getElementsByClassName('box1')
// box[0].style.backgroundColor='black'
// console.log(box);

let box= document.querySelector('.box1')
console.log(box);

let box2 = document.querySelectorAll('box1')
console.log(box2);
