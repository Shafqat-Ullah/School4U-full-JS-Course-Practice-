let parent = document.querySelector(".parent");
let child = document.querySelector("#child");
let body = document.querySelector("body");
// let newele=document.createElement("h1")
// newele.innerHTML = "Hellojhg World";
// document.body.append(newele)



// Capturing
// parent.addEventListener("click",()=>{
//     console.log("Parent clicked");
// } );
// child.addEventListener("click",()=>{
//     console.log("button clicked");
    
// })



// stopPropagation() kya karta hai?.........................
// .............// Kabhi hum nahi chahte ke event parent tak jaye.

// parent.addEventListener("click",()=>{
//     console.log('parent');

    
// })
// child.addEventListener("click",(event)=>{
//     event.stopPropagation();
// console.log('child');
// })


// body.style.backgroundColor = "aqua";
// child.innerHTML = "Click  Me";

let todo = document.querySelector(".todo");
let deletebtn = document.querySelector("#delete");
todo.addEventListener("click",function(){
    console.log("Todo opened");
})
deletebtn.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("Todo deleted");
})