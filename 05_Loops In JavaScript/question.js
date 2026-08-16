// let num = +(prompt("Enter a number"))
// let sum = 0;
// for (let i = 0; i<= num; i++){
//     sum = sum +i;
// }
// console.log("the sum of num is ",sum);

// const { Component } = require("react");



// question no 2
// Calculate the sum of numbers from ‘m’ to ‘n
// let m = +(prompt(`Enter the value of m`))
// let n = +(prompt("Enter the value of n"))
// let sum= 0;
// for(let i = m; i<=n ; i++){
//     sum = sum + i;
// }
// console.log(sum);


// let n = 50;
// for(let i = 1; i<= n; i++){
//     if(i % 2 !== 0){
//         console.log(i);
        
//     }
// }


// Create a “Number Knock” game. (ask the user to keep guessing the number 
// until the user enters correct guess) .

// let coumputerNumber = 8;
// let guess = null;
// while(guess !== coumputerNumber){
//     let guess = +(prompt("Gusse a number"));
// if (isNaN(guess)){
//     alert("Please Enter valid number")
    
// }else if (guess < coumputerNumber){
//     alert("Your guess number is too low plz try again");
    
// }else if (guess > coumputerNumber){
//    alert("Your guess num is to high plz try again");
    
// }else{
//  alert("Congratulation your guess is correct");
    
// }
// }



// let password = "Shafqat Ullah";
// let noOfattempts = 0;
// let UserPassword = null;
// while(password !== UserPassword && noOfattempts <=3){
//     UserPassword = prompt("Enter your password ");
//     noOfattempts++;
//     if(UserPassword== password){
//         alert("Congrualation You password is correct")
//     }
//     else if (noOfattempts > 3){
//         alert("Your Attempts is over plz try again letter");
        
//     }
//     else{
//         alert("You password is incorrect plz try again")
//     }
// }

// question 6
// find the factorial of the number 
// let num = 10;
// let fact = 1;
// for( let i =1 ; i<= num; i++){
//     fact = fact*i;
//     // console.log(fact);
    
// }
// console.log(fact);

// let n = 5;
// for (let i = 1; i<=5; i++){
//     let str = " ";
//     for (let j=1; j<=i ; j++){
//         str = str +j
//     }
//     console.log(str);
    
// }
// simple game 



let playAgain = 'yes';

while (playAgain === 'yes') {
    alert("You wake up in the dark forest!");

    let userChoice = prompt("Do you want to go left or right? ");

    if (userChoice === 'left') {
        alert("You see something shiny in the mud!");
        userChoice = prompt("Do you pick it up? (yes or no) ");
        if (userChoice === 'yes') {
            alert("It is a magical stone! you are teleported to safety, you win!");
        } else {
            alert("mar gya tu!")
        }
    } else {
        alert("you find a cave!");
        userChoice = prompt("Do you enter the cave? (yes or no) ")
        if (userChoice === 'yes') {
            alert("you barely escape!")
        } else {
            alert("acha raat beetega apka!");
        }
    }

    userChoice = prompt("Do you want to play again? (yes or no)")
    if(userChoice === 'no'){
        playAgain = 'no';
        alert("Thanks for playing!")
    }
}