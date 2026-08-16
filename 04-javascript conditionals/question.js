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
// let num = 35;
// if(num % 3 === 0 && num %5 ===0){
//     console.log("fizzbuzz");
    
// }else if (num % 3 ===0 ){
//     console.log("pizz");
    
// }else if (num % 5 ===0){
//     console.log("buzz");
    
// }
// else{
//     console.log("neither divisible by 3 nor by 5");
    
// }



// Q.5- Create a simple calculator. Take two numbers and an operator (+, -, *, /) and calculate the result using switch.
// let num1 = 20;
// let num2 = 40;
// let operator = "*"
// switch(operator){
//     case "+":
//         console.log("The sum of num1 and num2 :",num1 +num2);
//         break;
//         case "*":
//             console.log("The * of num1 and num2 :",num1 *num2);
//             break;
//             case "/":
//                 console.log("The / of num1 and num2 :",num1/num2);
//                 break;
//                 case ("-"):
//                     console.log( "The - of num1 and num2 :",num1 - num2);
//                     break;
//                     default:
//                         console.log("invalid operator");
                        
                    
                
            
        
// }

// Create a simple ATM program. 
// User can choose:
// 1. Check Balance
// 2. Deposit
// 3. Withdraw
// 4. Exit
// Note that in case of “Deposit” if deposit amount is less than 1Rs produce error otherwise deposit the amount and show 
// the message with a new balance. And in case of “Withdraw” if withdraw amount is greater than balance then or less 
// than 1Rs then produce error otherwise withdraw amount and show remaining balance.
let totalBalance = 10000;
let userChoice = +prompt("Enter You Choice 1[check balance ] 2[deposit]3[withdraw]4[exit]")
if (userChoice === 1){
    console.log("your total balance",totalBalance);
    
}else  if (userChoice === 2){
   let deposit =  +prompt("Enter YOUr deposit amount ");
    if (deposit>0){
        totalBalance+=deposit;
            console.log("deposit Successfull!");

        console.log( "your current balance is ",totalBalance);
        
    }
    else {
        console.log("Please enter valid amount");
        
    }
} else if (userChoice === 3){
    let withdraw = +prompt("please enter the amount that you want to withdraw");
   if (withdraw >0 &&withdraw< totalBalance){
    totalBalance -= withdraw;
    console.log("withdraw Successfull!");
    
            console.log( "your current balance is ",totalBalance);

   }
   else{
    console.log("please enter  a valid withdraw amount");
    
   }
    
}
else {
    console.log("Thanks for comming");
    
}