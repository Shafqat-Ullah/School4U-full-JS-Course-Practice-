
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
let btn = document.querySelector("button")
btn.addEventListener('click',()=>{
btn.style.backgroundColor="red";
btn.style.backgroundColor="yellow";
btn.style.color='green'
})