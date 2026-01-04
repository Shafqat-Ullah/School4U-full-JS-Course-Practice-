// let a = "ahmad ";
// let b = "khan"
// let c = a + b;
// console.log(c);

// console.log(typeof c);
// console.log(typeof (2 + "2"));

// On a shopping website, calculate the total cost of a product when given the price per item (price = 150) and the quantity (quantity = 3).
// Also, calculate a 10% discount on the total cost and display the discounted price.
// let price = 150;
// let quantity = 3;
// let calculate = price * quantity;
// let discount = calculate * 0.10;
// let result =  calculate - discount  ;
// console.log(result);

// Comparison Operators (Check things)
// let a = (5!="5");
// console.log(a);

// Logical Operators (Combine conditions)
// let a =(210>30 && 30<20)  //and ma hamri ps dono condection true ho ge to true ho ga other wise resutl fals ho ga
// console.log(a);
// let b = (30>20|| 20>10); // OR ma ager 1 be condectin true ho to true ho ga other wise falls ho ga
// console.log(b);

// let c = (20 != 30)

// Increment/Decrement Operators (Add or subtract 1)
// let a = 40;
// let increment = (++a) //post increent its mean ye phal add karge and os ke bat a ko add kariga
// console.log(increment);

// let b = 40;
// console.log(b++); pre increment
// b+= 20;
// console.log(b);

// let a = 30 ;
// a+= 30;
// console.log(a);

// Ternary Operator (Shortcut for if/else)

// let a =( 20>= 30 || 30<=40) ? ("the condection is ture ") :  ("the condection is falls");
// console.log(a);
//     let age= 20
// let result= (age >= 18 ) ? ("you are adelt") : ("your are child ");
// console.log(result);
// let userName = " 231 ";
// let passowerd = "12  ";
// let result = (userName && passowerd) ? "loging":"try agin";
// console.log(result);

// Challenge2:
// On a booking website, check if the user's age is valid for booking:
// Age should be at least 18.
// Write a condition to check and display a message: "Eligible for booking" if the user is 18 or older. "Not eligible for booking" otherwise.

// let age = 18;
// let result = (age>=18 ) ? "Eligible for booking ." : "Not eligible for booking otherwise";
// console.log(result);

// 1. Get user to input two number using prompt and print their possible arithmetic results.

// let a =Number(  prompt("Enter the value of a :"));

// let b =Number( prompt("Enter the value of b"));
// // let sum = a + b;
// console.log(a+b);

// let wether = "rani";
// if(wether==="rani"){
// console.log("take umbrella");

// }
// else{
//     console.log("enjoy the sun ");

// }

// /............................//////////else if ////////////

// let marks = prompt("Enter Your Marks");
// if (marks>=90){
//     console.log("grade A");
    
// }
// else if (marks>=80){
//     console.log("Grade B");
    
// }
// else if (marks>= 70){
//     console.log("Grade c");
    
// }
// else if (marks>= 60){
//     console.log("Grade d");
    
// }
// else if (marks>= 50){
//     console.log("Pass");
    
// }
// else{
//     console.log("You need to study more ");
    
// }


// ..................Nested if Statements...............
// let age = 21;
// let hasId = false;
// if (age>= 20){
//     if(hasId)
//     {
//         console.log("You can enter the clube");
        
//     }
//     else{
//         console.log("You need ID");
        
//     }
// }
// else{
//     console.log("You are too Young to enter");
    
// }

//.................AND OPERATOR .............
// let age =  10 ;
// let HasId = true;
// if (age>=20 && HasId){
//     console.log("You can enter the club");
    
// } else{
//     console.log("you'r too young");
    
// }

// let age = 30;
// let HasId = false;
// if (age>=20){
//     if(HasId){
//         console.log("You Can Enter the club");
        
//     }
//     else{
//         console.log("Need Id card");
        
//     }
// }
// else{
//     console.log("Your Are Too Yooung");
    
// }
//......................Switch Statement...............
// let color = "Green";
// switch (color){
//     case "red":
//         console.log("Stop");
//         break;
//         case "Yellow":
//             console.log("Get Ready");
//             break;
//             case "Green":
//                 console.log("You can Go");
//                 break;
//                 default:
//                     console.log("Unkonw Color");
                    
                
            
        
// }

// Ternary Operator [? :] (short form)

let userName = "Shafqat";
let Passowerd = "";
let result = userName && Passowerd ? "Login" :"faill"
console.log(result);
