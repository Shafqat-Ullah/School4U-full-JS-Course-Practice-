// 
let color =  `light`;
let theme = prompt("Enter your team color (light ,dark , green ,etc");
if(theme === `light`){
    // console.log();
    color= 'white'
    
}else if (theme === 'dark'){
    color = 'black'
}
else if (theme === 'green'){
    color ='green'
}else{
    console.log('invalid color');
    
}
console.log(`your selected theam is ${theme} and the color is ${color}`);
