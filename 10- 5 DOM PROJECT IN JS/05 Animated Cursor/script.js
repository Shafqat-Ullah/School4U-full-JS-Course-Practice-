// const { current } = require("@reduxjs/toolkit");

let smallCursor = document.querySelector(".smallCursor");
let shadowCursor = document.querySelector(".shadowCursor");
// let  mouseX=0;
// let mouseY=0;
document.addEventListener ('mousemove',function(eventObj){
    // mouseX=eventObj.clientX;
    // mouseY =eventObj.clientY;
smallCursor.style.left =eventObj.clientX  +"px"
smallCursor.style.top =eventObj.clientY + "px"
shadowCursor.style.left = eventObj.clientX +"px" //es se be anmation da sakite ha
shadowCursor.style.top =eventObj.clientY + "px"
}) 



























// function animationShadowCursor(){
//     let currentX =parseFloat(shadowCursor.style.left)||0
//     let currentY = parseFloat(shadowCursor.style.top)||0
// let distanceX = mouseX - currentX;
// let distanceY = mouseY -currentY;
// shadowCursor.style.left=currentX+distanceX*0.01+"px"
// shadowCursor.style.top=currentX+distanceY*0.01+'px'
// requestAnimationFrame(animationShadowCursor)

// }
// animationShadowCursor();