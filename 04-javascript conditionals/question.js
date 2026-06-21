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




// let color = "light";
// let theme = prompt("Enter the name of the color for your theme (light ,dark , green)")
// if (theme === "light"){
//     color =`white`
// }else if (theme=== 'dark'){
//     color = "black"
// }else if (theme === 'green'){
//     color = 'green'
// }else{

//     console.log('invalid color');
    
// }
// if (theme!=='light' &&theme!=='dark'&&theme!=="green"){
//     console.log('invalid color selection');
    
// }
//    else 
// {
//         console.log(`your select them is ${theme} and color is :${color}`);
    
// }

// - Find the smallest of three numbers. Numbers are given by the user
// let num1 = +prompt("Enter the value of num1 to find the smallest number")
// let num2 = +prompt("Enter the value of num2 to find the smallest number")
// let num3 = +prompt("Enter the value of num3 to find the smallest number")
// if(num1<num2&&num1<num3){
//     console.log('the smallest number is num1');
    
// }else if (num2<num1 &&num2<num3){
//     console.log('The smallest number is num2');
    
// }else{
//     console.log('smallest number is num3');
    
// }


// Write a program to manage Role-Based Access Control
// Given a user role ("admin", "editor", "viewer")
// let userRoll ="Admain";
// switch(userRoll){
//     case "Admain":
//         console.log("full access");
//         break;
//         case "editor":
//             console.log("editor access");
//             break;
//             case "viewer":
//                 console.log("read only");
//                 break;
//                 default:
//                 console.log("invalid roll");
                
                
            
        
// }
let num = 35;
if(num % 3 === 0 && num %5 ===0){
    console.log("fizzbuzz");
    
}else if (num % 3 ===0 ){
    console.log("pizz");
    
}else if (num % 5 ===0){
    console.log("buzz");
    
}
else{
    console.log("neither divisible by 3 nor by 5");
    
}