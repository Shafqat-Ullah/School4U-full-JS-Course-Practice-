let container = document.querySelector('.container');
container.childNodes.forEach((event)=>{
    event.addEventListener("click",()=>{
        console.log(event.innerText);
        
    })
})
















// container.childNodes.forEach((elem)=>{
// elem.addEventListener('click', ()=>{
//     // console.log('Box clicked!');
//     console.log(elem.innerText);
    
// });
// });




