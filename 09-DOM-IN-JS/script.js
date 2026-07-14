
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

// let box= document.querySelector('.box1')
// console.log(box);

// let box2 = document.querySelectorAll('box1')
// console.log(box2);
// let div=document.querySelector('.box1')
// console.log(div.firstChild);

// let tagName = document.querySelector('h1');
// console.log(tagName.tagName);
// console.log(tagName.nodeName);
// console.log(tagName.firstChild);
// // tagName.innerHTML=('hello bro')
// console.log(tagName.innerHTML);
// console.log(tagName.textContent);

// let dev = document.querySelector('div')
// let elem = document.createElement('p')
// elem.innerText="hello bro"
// dev.append(elem)

// let box = document.querySelector('div')
// let para = document.createElement('p')
// para.innerText='are you fine'
// box.append(para)


// Now we want to add element at the start
// let box2 = document.querySelector('div')
// let para2 = document.createElement("p")
// para2.innerText = ("this is perpend")
// box2.prepend(para2)


// let a = document.querySelector('div')
// let b =document.createElement('p')
// b.innerHTML=('hello bro')
// a.append(b)

// let c = document.querySelector('div')
// let d =document.createElement('p')
// d.innerHTML=('hellhhhhhho bro')
// a.prepend(d)
// //  before and after
// let a = document.querySelector('div')
// let b = document.createElement('p')
// b.innerHTML='hello are you fine'
// a.before(b)
// a.after(b)
// a.insertAdjacentElement('beforeend',b)

// Remove
// let a  = document.querySelector('div')
// let b = document.createElement('h1')
// b.innerText='hello brrrrrrrrro'
// a.append(b)
// let c = a.children[2];
// c.remove()

// Attribute
// let box = document.querySelector('.box')
// console.log(box.getAttribute('title'));
// box.getAttribute('class','change')

// console.log(box.attributes.class.value);
// question No 1
// let text = document.querySelector('p')
// text.style.backgroundColor='black';
// text.style.color='green'

// let text = document.createElement('p')
// text.innerHTML='ma tum se payar nahi karta ho'
// let body = document.querySelector('body')
// body.append(text)
// // text.style.backgroundColor='black'
// // text.style.color='green'
// text.setAttribute('style','background-color:black;color:green')
// console.log(text);

// let button = document.createElement('button')
// button.innerHTML='click me'
// text.prepend(button)


// let para = document.createElement('p')
// para.innerHTML='hello bro how are you'
// let body = document.querySelector('body')
// body.append(para)
// para.style.backgroundColor='green';
// para.style.color='red';
// let button = document.createElement('button')
// button.innerHTML='click me'
// para.prepend(button)

// let div = document.querySelector('.box')
// div.setAttribute('class',`${div.getAttribute('class')} box2`)
// console.log(div.getAttribute('class'));

// let box = document.querySelector('.box');
// // box.style.backgroundColor ='red'
// // box.setAttribute('style','background-color:yellow')
// box.style.cssText='background-color:red;font-size:40px;color:white;text-align:center;border-radius:30px'



// CSS MANIPULATION IN JS:
// 1) using attribute Method
// let box = document.querySelector('.box')
// // box.setAttribute('style','background-color:red')

//  2) using style
// let box = document.querySelector('.box')
// box.style.backgroundColor='red'

// 3) using text property
// let box = document.querySelector('.box')
// box.style.cssText='background-color:red;font-size:50px; text-align:center;border-radius:30px'
// box.classList('blueBg')



// let node = document.querySelector(".box");

// // Add class
// node.classList.add("red");

// // Check class
// console.log(node.classList.contains("red")); // true

// // Remove class
// node.classList.remove("red");

// // Toggle class
// node.classList.toggle("red");

// let btn  = document.querySelector('button')
// let body = document.querySelector('body');
// let theme = 'light'
// btn.addEventListener('click',()=>{
// if(theme === 'light'){
//     body.style.backgroundColor='black'
//     body.style.color='white'
//     btn.innerText='light'
//     theme = 'black'
// }
// else {
//     body.style.backgroundColor='white'
//     body.style.color='black'
//     btn.innerText='Dark'
//     theme ='light'
// }
// })
// btn.style.backgroundColor=('red')

// let button = document.querySelector('button')
// let body = document.querySelector('body');
// let theme = 'light'
// button.addEventListener('click',()=>{
//     if (theme === 'light'){
//         body.style.backgroundColor='black'
//         body.style.color='white'
//         theme='black'
//     }
//     else{
//         body.style.backgroundColor ='white'
//         body.style.color ='black'
//         theme='light'
//     }
// })



// Question No 1:
// let button = document.querySelector('button')
// let body = document.querySelector('body')
// let theme = 'light'
// button.addEventListener('click',()=>{

// if (theme === 'light'){
//     body.style.backgroundColor='black'
//     body.style.color='white'
//     theme='dark'

// }
// else{
//     body.style.backgroundColor='white'
//     body.style.color='black'
//     theme='light'
// }
// })

// let button=document.querySelector('button')
// let body=document.querySelector('body')
// button.addEventListener('click',()=>{

//     if(body.className==='light'){
//         body.className='dark'
//     }
//     else{
//         body.className='light'
//     }
// })



// let button = document.querySelector('button')
// let body = document.querySelector('body')
// button.addEventListener('click',()=>{
//     if(body.className==='light'){
//         body.className='dark'
//     }
//     else{
//         body.className='light'
//     }
// })


// question no 2:
let button = document.querySelector('button')
let body = document.querySelector('body')
button.addEventListener('click',()=>{
    body.classList.toggle('dark')
})