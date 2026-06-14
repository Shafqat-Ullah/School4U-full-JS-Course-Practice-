// //
// // let products = 10;
// // if (products <= 0){
// //     console.log("products khtm ho gye hain..")
// // }
// // else{
// //     console.log("prodcuts he")
// // }

// // let weather = prompt("Enter weather...");
// // if (weather.toLowerCase() === "rainy".toLowerCase()){
// //     console.log("Take an umbrella")
// // }
// // else{
// //     console.log("Enjoy sunshine")
// // }

// let age = 20;
// let hasId = true;
// if (age >= 18){
//     if (hasId){
//         console.log("You can go the club")
//     }
//     else{
//         console.log("you need an id")
//     }
// }
// else{

// }

// // .............................................................................

// // let product = 10;
// // if (product<0);
// // {
// //     console.log("prouduct is in stack");

// // }
// // else
// //      {
// //     console.log("prouduct is out of stack");

// // }

// let Studentage = prompt("Enter the age of student");
// if(Studentage >=18 && Studentage <= 100 ){
//     alert ("You can vote");

// }
// else{
//     alert("you can not vote");

// }

// let weather = "rainy";
// if (weather ==="rainy"){
//     console.log("take an umbrella");

// }
// else{
//     console.log("enjoy the sunshine !");

// }

// // if...else if...else (Also called "Else-If Ladder")

// let marks =prompt("Enter Your Marks");
// if(marks >=90){
//     console.log("Grade A");

// }
// else if (marks >=80){
// console.log("Grade B");

// }
// else if (marks >= 70){
//     console.log("Grade C");

// }
// else if (marks >=60){
//     console.log("Grade D");

// }
// else{
//     console.log("Sorry you are Faill ");

// }

// ...................... if else statment

// let age= 20;
// if (age >= 20){
//     console.log("you can drive ");

// }
// else{
//     console.log("you can not drive");

// }

// //   esle if to give multiple if and find the result of the statment

// let marks = 66;
// if(marks>= 90 && marks <100)
// {
//     console.log("Grade A");

// }
// else if (marks>= 80 && marks<90)
// {
//     console.log("GARDE B");

// }
// else if(marks>= 70 && marks<80){
//     console.log("GRADE C")

// }
// else if(marks>=60 && marks<70){
// console.log("GRADE D")

// }
// else{
//     console.log("SORRY YOU ARE FAILL");

// }
// let age= 8;

// if (age>5);{
//     if(age<12)
//     {
//         console.log("child");

//     }
// }

// let num1 = +prompt("Enter first number..");
// let num2 = +prompt("Enter second number ...");
// let operator = prompt("Enter operator (+.-.*,/)");

// switch (operator) {
//   case "+":
//     console.log(`Addition = ${num1 + num2}`);
//     break;
//   case "-":
//     console.log(`Subtraction = ${num1 - num2}`);
//     break;
//   case "*":
//     console.log(`Multiplication = ${num1 * num2}`);
//     break;
//   case "/":
//     console.log(`Division = ${num1 / num2}`);
//     break;
//     default:
//         console.log("Enter valid numbers ...")
// }

// Scenario: On an e-commerce website, show a message when a product is out of stock.

// Question:
// Write a program to check if the stock of a product is 0. If it is, display the message "Product is out of stock.".

// let product = 10;
// if (product === 0) {
//   console.log("Product is out of stock");
// } else {
//   console.log("Product in Stock");
// }

// "If it's raining, take an umbrella. Otherwise, enjoy the sunshine!"
// let wether = "raining";
// if (wether === "raining") {
//   console.log("Take Umbrella");
// } else {
//   console.log("Sun Sunshine");
// }

// Different Types of Conditional Statements

// 1. if Statement
// 2. if...else Statement
// 3. if...else if...else (Also called "Else-If Ladder")
// 4. Nested if Statements
// 5. switch Statement
// 6. Ternary Operator [? :] (short form)

// 1 if statement
// let temp = 40;
// if(temp>30){
//     console.log("it,s hot outside ");

// }

// // if...else Statement
// let age = 20;
// if (age >= 18){
//     console.log("You can Drive");

// }else{
//     console.log("you can not drive!");

// }

// // if...else if...else (Also called "Else - If Ladder")Nested if Statements

// let marks = 90;
// if (marks>= 90){
//     console.log("Grade : A");

// }else if (marks>= 80){
//     console.log("Grade : B");

// }else if (marks>=70){
//     console.log("Grade : C");

// }
// else if (marks>=60){
//     console.log("Grade : D");

// }else{
//     console.log("You Need more work");

// }

// Nested if Statements
// let age = 20;
// let hasId = true;
// if (age>= 20){
//     if(hasId){
//         console.log("You can Enter  the club");

//     }
//     else{
//         console.log("You need ID card");

//     }
// }else{
//     console.log("you are too young");

// }

// Switch Statement

// let color = "green";
// switch(color){
//     case "red":
//     console.log("Stop the car");
//     break;
//     case "yellow":
//     console.log("Get ready ");
//     break;
//     case "green":
//     console.log("you can go");
//     break
//     default:
//         console.log("Unknown Color");

// }

// ternary Operator
// let age = 20;
// let result = (age>= 20)?"you can drive":"You are too young"
// console.log(result);

// ✅ 2️⃣ Switch Statement in JavaScript
// let color = "red";
// switch (color) {
//   case "red":
//     console.log("Stop The Car");
//     break;
//   case "green":
//     console.log("You Can Go");
//     break;
//   case "Yellow":
//     console.log("Are You Ready");
// }

// let day = 2;

// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     default:
//         console.log("Invalid Day");
// }

// Question:
// Write a program where:

// If the cart value is less than $50, no discount is applied.
// If the cart value is between $50 and $100, apply a 10% discount.
// If the cart value is more than $100, apply a 20% discount.
// Display the final cart total after the discount.

// let cartvalue = 2500;
// let discount = 0;
// if (cartvalue < 50) {
//   discount = 0;
// }
//   else if (cartvalue >= 50 && cartvalue <= 100){
//     discount = (cartvalue * 10) / 100;

//   }
//   else{
//     discount =  (cartvalue * 20) / 100;
//   }

// let finalPrice = cartvalue -  discount;

// console.log(`Cart value is ${cartvalue}`)
// console.log(`discount  ${discount}%`);
// console.log(finalPrice)

// let hastSubscription = true;
// let subscriptionType = "premium";

// if (hastSubscription && subscriptionType === "premium"){
//     console.log("Access to all content")
// }else if (hastSubscription && subscriptionType === "Standard"){
//     console.log("Acesss to limited content")
// }else{
//     console.log("first please subscribe")
// }

// let totalBalance = 1000;
// let userChoice =Number( prompt(
//   "Enter Your choice : \n 1:check Balance \n 2: Deposit \n 3: Withdraw \n 4 :Exit",
// ));

// if(userChoice === 1){
//     console.log("Your Current Balance is : ", totalBalance );
    
// }else if (userChoice === 2){
//     let depositAmout = Number (prompt("Enter Amount to deposit :"));
//     if (depositAmout > 0){
//         totalBalance =totalBalance + depositAmout;
//         console.log("Deposit Successfully");
        
//         console.log("Your current balance is ",totalBalance);
        
//     }else{
//         console.log("please enter a valid deposite amount ");
        
//     }
// }else if (userChoice == 3){
//     let WithdrawAmount = Number(prompt("Enter Amount to deposit :"))
//     if (WithdrawAmount>=0 && WithdrawAmount <= totalBalance){
//         totalBalance -=WithdrawAmount;
//         console.log("withdraw successfully");
        
//         console.log("Your current balance is :", totalBalance);
        
//     }else{
//         console.log("please enter a valid withdraw amount ");
        
//     }
// }
// else{
//     console.log("Thanks for comming");
    
// }


// Conditionals In JavaScript:

// Use Case:

// Scenario: On an e-commerce website, show a message when a product is out of stock.

// Question:
// Write a program to check if the stock of a product is 0. If it is, display the message "Product is out of stock.".

// let prodcuts = 0;
// if(prodcuts===0){
//     console.log("product is out of stock");
    
// }
// else{
//     console.log('product is in stock');
    
// }

// write a program that check the weather is the weather is rani so display "take umbrella" other wise Enjoy the sun sunshine ?
// let weather = "Rainy";
// if (weather==="Rainy"){
//     console.log("Take umbrella");
    
// }else{
//     console.log("Enjoy The sunshine");
    
// }

// Different Types of Conditional Statements



// if Statement
// if(age>20){
//     console.log("you can drive");
    
// }
// if ... else Statement
// let age = 20;
// if(age>20){
//     console.log("You can drive");
    
// }else{
//     console.log("you are kids");
    
// }

// if ... else if ... else (Also called "Else-If Ladder")
// Nested if Statements

// .................Student Marks Grade Finder .............................
// let marks = 70;
// if(marks>=80){
//     console.log("Grate A");
    
// }else if (marks>=70){
//     console.log("Grate B");
    
// }
// else if (marks>= 60){
//     console.log("Grate C");
    
// }
// else{
//     console.log("You need to more hardWork");
    
// }


//  .....................Traffic light ........................

// let color = "Red";
// if (color==="Red"){
//     console.log("Stop The Car");
    
// }
// else if (color === "Yellow"){
//     console.log("Ready ");
    
// }
// else if (color==="Green"){
//     console.log("You can go");
    
// }
// else{
//     console.log("Invalid color");
    
// }

// ..........................Nested if Statements.....................
// let age = 20;
// let hasId = true;
// if (age>18){
//     if(hasId){
//         console.log("You can Enter To the club");
        
//     }
//     else{
//         console.log("You need id card");
        
//     }
// }
// else{
//     console.log("You are under age ");
    
// }


// switch Statement

let color = "red";
switch(color){
    case "red":
        console.log("Stop");
        break;
        case "yellow":
            console.log("ready");
            break;
            case "Green":
                console.log("GO");
                break;
                default:
                    console.log("invalid color");
                    
                
            
        
}

// Ternary Operator [? :] (short form)