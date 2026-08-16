let display =document.querySelector('.display')

function appendValue( text){
    if(display.innerHTML==='0'||display.innerHTML==='Error'||display.innerHTML==="Infinity"){
        display.innerHTML =text
        return;
    }

display.innerHTML=`${display.innerText}${text}`

}
let clearDisplay= function clearDisplay(){
    display.innerText='0'
}
function calculate(){
    try{

        display.innerHTML =eval(display.innerHTML)
    } catch(error){
        display.innerHTML='Error'
    }
}