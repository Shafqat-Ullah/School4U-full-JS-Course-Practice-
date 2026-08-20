let smallCursor = document.querySelector(".smallCursor");
let shadowCursor = document.querySelector(".shadowCursor");
let  mouseX;
let mouseY;
document.addEventListener ('mousemove',function(eventObj){
    mouseX=eventObj.clientX;
    mouseY =eventObj.clientY;
smallCursor.style.left =mouseX  +"px"
smallCursor.style.top =mouseY + "px"
// shadowCursor.style.left = eventObj.clientX +"px" //es se be anmation da sakite ha
// shadowCursor.style.top =eventObj.clientY + "px"
}) 
function animationShadowCursor(){

}