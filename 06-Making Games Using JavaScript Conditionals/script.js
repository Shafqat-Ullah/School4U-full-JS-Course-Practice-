


// Create a “Number Knock” game. (ask the user to keep guessing the number 
// until the user enters correct guess) .

// let computerNumber = 30;
// let guess = null;
// while(computerNumber !== guess){
//     guess = +(prompt("plz Enter the correct Number"))  ;
// if (isNaN(guess)){
//     alert("invalid Number Plz try again")
// }
// else if(guess>computerNumber){
// alert("Number is very large plz try again")
// }else if (guess<computerNumber){
//     alert("Number is very Small plz try again")
// }
// else{
//     alert("Congratulation ..! You'r guess is correct")
// }
// }

// Simple Password Checker (Fixed Attempts)
 
// let Password = "khan";
// let userPassword = null;
// let noAttempt = 0;
// while(Password !== userPassword && noAttempt<3){
//     userPassword = prompt("Enter Your Password");
// noAttempt++;
// if(Password === userPassword){
//     alert("The Password is correct ")
// } else if (noAttempt>=3){
//     alert("The Number of Attempt is Over Plz Try Again later")
// }
// else{
//     alert("You Enter the invalid Password Plz Try again")
// }
// }

// Create a program to find the factorial of ‘n’.
// let n = prompt("Enter a number:");
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//     factorial = factorial * i;
// }

//  Q6 alert("Factorial of " + n + " is " + 4

// let n = prompt("Enter any Number if you want to find the factorial ");
// let factorial = 1;
// for(let i = 1; i<=n; i++){
//     factorial = factorial*i;

// }alert("Factorial of " +n + " is "+ factorial)

// Q7 Print the following pattern. (build it for nth numbers)
// let n =6;
// for (let i = 1; i<=6; i++){
//     let str = " ";
//     for (let j=1; j<=i; j++){
//         str = str +j;
//     }
//     console.log(str);
    
// }
let A = prompt("Enter any number if you want to find the pattern of the number");
for (let b = 1; b<=A; b++){
    let str =" ";
    for (let c = 1; c<= b; c++){
        str = str +b + " ";
    }
    console.log(str);
    
}

