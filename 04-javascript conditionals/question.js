// 
// 

let theme = "light";
let color = prompt("Enter the color name that you want to select them for your side ,(white,black,green)");
if (theme===`light`){
    color = 'white'
    console.log(color);
    
}
else if(theme === 'dark' ){
    color = 'black'
    console.log(color);
    
}
else if (theme === 'green' ){
    color='green';
    console.log(color);
    
}else{
    console.log("invalid Color try Again")
    
}