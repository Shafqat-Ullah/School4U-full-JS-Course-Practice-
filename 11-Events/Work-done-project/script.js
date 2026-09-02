// let listItems = document.querySelectorAll('.listItem');
let listContainer = document.querySelector('.listContainer');
listContainer.addEventListener('click', (event)=> {
    if (event.target.className === "listItem") {
             if(event.target.style.textDecoration==='line-through'){
            event.target.style.textDecoration = 'none';
        }
        else {
            event.target.style.textDecoration = 'line-through';
        }
       
        
    }
    
});