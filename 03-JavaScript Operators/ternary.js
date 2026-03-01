// let age = 23;/
// let controle = age>=19&& age<=100;
// let result = age>= 21 ? "drive" :"can not drive";
// console.log(result);

// let username = ("");
// let passowerd =("Enter Your Passowerd");
// let result = (username && passowerd) ? ("you are login"):("try agin");
// console.log(result);


// let age = 20;
// let result = age>=20 ? "you can drive :":"can not drive"
// console.log(result);


// let username = " ";
// let passowerd = " ";
// let message = (username&&passowerd)? "login succesfully":"tryagain"
// console.log(message);


// 3. Even / Odd using ternary operator
// let num = 250;
// let result = (num % 2 === 0)? "Even Number":"Odd Number "
// console.log(result);

// 5. Number between 10 and 20 (inclusive)
// let num = 10;
// if(num>= 10 && num<= 20)
// {
//     console.log( "number is in the range");
    
// }
// else{
//     console.log("Number is the out of the range");
    

// }

// 6. Largest of 3 numbers (ternary)
// let a = 20 ; b = 30; c =50;
// let result =(a>b && a>c) ? a : (b>c) ? b : c;
// console.log("Largest Number :", result);


// let age = 20;
// let result = (age >18)?"you can drive" : "kids";
// console.log(result);


// let userName = null;
// let passowerd = "123";
// let login = (userName && passowerd) ? "login Sucessfuly ": "try agin";
// console.log(login);


// If username AND password are correct → "Login Successfully"
// ❌ Otherwise → "Try Again"
// Using:


let correctUsername  = "Shafqat Ullah";
let correctPassowerd = "123";

let userName = "Shafqat Ullah";
let userPassowerd = "123";

let login = (correctUsername == userName && correctPassowerd ===  userPassowerd) ? "login":"try agin";
console.log(login);
