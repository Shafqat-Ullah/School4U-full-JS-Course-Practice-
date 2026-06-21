// 
// 

// let theme = "light";
// let color = prompt("Enter the color name that you want to select them for your side ,(white,black,green)");
// if (theme===`light`){
//     color = 'white'
//     console.log(color);
    
// }
// else if(theme === 'dark' ){
//     color = 'black'
//     console.log(color);
    
// }
// else if (theme === 'green' ){
//     color='green';
//     console.log(color);
    
// }else{
//     console.log("invalid Color try Again")
    
// }

// let num1 = +prompt("Enter The num1 ");
// let num2 = +prompt("enter the num2 ");
// console.log(`The * of num1 and num2 ${num1*num2}\ the + of num1 and num2 ${num1 +num2} \ the - of num1 and num2 is ${num1-num2}\the dev / of num1 and num2 is ${num1/num2}`);


// - Find the smallest of three numbers. Numbers are given by the user

let color = "light";
let theme = prompt("Enter the name of the color for your theme (White,black , green)")
if (theme === "light"){
    color =`white`
}else if (theme=== 'dark'){
    color = "black"
}else if (theme === 'green'){
    color = 'green'
}else{

    console.log('invalid color');
    
}
if (theme!=='light' &&theme!=='dark'&&theme!=="green"){
    console.log('invalid color selection');
    
}
   else 
{
        console.log(`your select them is ${theme} and color is :${color}`);
    
}


