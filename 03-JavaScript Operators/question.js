// 1. Get user to input two number using prompt and print their possible arithmetic results.
// let num1 = Number( prompt("Enter The Value Of Num1"));
// let num2 = Number(prompt("Enter the value of num2"));
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1/num2)
// console.log(num1*num2)
// console.log(num1%num2)

// 2. Can you chain assignment operators?
// let a=b=c=d =10;

// 7. Email & Password check

// let StoreEmail = "Shafqat@gmail.com";
// let StorePassword = "Shafqat321";
// let Email = prompt("Enter Your Email");
// let Password = prompt("Enter Your Passoword");
// if (StoreEmail===Email && StorePassword===Password){
//     console.log("Login Successfully");

// }else{
//     console.log("Invalid Email or Password");

// }

// 8. What will be the output of the following JavaScript code?

// let a = 5, b = 3, c = 2;

// let result = at+ + -- b * c -- - ++a + b -- / -- c;

// console.log("a:", a);
// console.log("b:", b);
// console.log("c:", c);
// console.log("result:", result);

// ................Correct Code .........
// let a = 5, b = 3, c = 2;

// let result = a++ + --b * c-- - ++a + b-- / --c;

// console.log("a:", a);
// console.log("b:", b);
// console.log("c:", c);
// console.log("result:", result);

//Step-by-step:

// a++ → use 5, then a = 6

// --b → b = 2

// c-- → use 2, then c = 1

// ++a → a = 7

// b-- → use 2, then b = 1

// --c → c = 0

// ⚠️ Division by 0 → Infinity

// 9. Output of ~a when a = 0
// console.log(~0);

// 9 (again). Mixed operators

// let x = 10;
// let y = 5;
// let z = "10";

// x += y * 2;     // x = 20
// let isEqual = x == z;        // false (20 == "10")
// let isStrictEqual = x === z; // false

// let logicTest = (isEqual || isStrictEqual) && !(y > 10);
// // false || false → false

// let result = logicTest ? ++x : --y; // y = 4

// console.log("x:", x); // 20
// console.log("y:", y); // 4
// console.log("z:", z); // "10"
// console.log("isEqual:", isEqual); // false
// console.log("isStrictEqual:", isStrictEqual); // false
// console.log("logicTest:", logicTest); // false
// console.log("result:", result); // 4
// console.log("Type of z:", typeof z); // string

// let iteam_price = 150;
// let products = 3;
// let total_coust = iteam_price * products;
// console.log(`the total coust is ${total_coust}`);
// let discount = total_coust /10 ;
// console.log(`The discount is : ${ discount}`);
// console.log(`The final price ${total_coust}`);

// let iteam_price = 150;
// let products = 3;
// let total_coust = iteam_price * products;
// console.log(`the total coust is ${total_coust}`);

// let  discount= total_coust * 0.10;
// console.log(`The discount price is : ${discount}`);

// let  final_price  =  total_coust - discount;
// console.log(`the final  price is ${final_price}`);

// 6: Ternary Operator (Shortcut for if/else)

//     let age = 30;
//    let result = (age > 20 ) ? "adult " : "kids";
//     console.log(result);

// let age = 20;
// let result = (age > 15)? "you can drive" : "you are kids ";
// console.log(result);

// On a booking website, check if the user's age is valid for booking:
// Age should be at least 18.L
// Write a condition to check and display a message: "Eligible for booking" if the user is 18 or older. "Not eligible for booking" otherwise.l
// let age  = 20;
// let result = (age > 18 )? "Eligible for booking": "Not eligible for booking ";
// console.log(result);

// On a login page, verify the user's credentials: Check if username is not empty AND password is not empty (&& operator).
// If either is empty, display an error message: "Both fields are required."

// let user_name = "Shafqat Ullah";
// let password = 12323;
// let result = (user_name && password !== null)? "Login Successfully":"Both Fields are required" ;
// console.log(result);

// Short - Circuiting
// ............... OR ...............
// let a = "" || undefined|| 12;
// console.log(a);

// // ...................AND .................
// let result = 12 && 11 && 13 && 5555;
// console.log(result);

// let isAuthenticated = true;
// let user = "Shafqat Ullah";
// let result = isAuthenticated && user;
// console.log(`${result}`);

// let a = null ?? 12;
// console.log(a);

// 1. Get user to input two number using prompt and print their possible arithmetic results.
// let num1 = +prompt("Enter frist number");
// let num2 = +prompt("Enter second Number :");
// console.log(
//   `num1 + num2 is ${num1 + num2} \ num1 *  num2 ${num1 * num2} \ num1 /num2 ${num1 / num2} \ num1 - num2 ${num1 - num2}`,
// );


// Can you chain assignment operators
// let a =b=c=d =15;
// console.log(a,b,c);

//   3. Get user to input a number using prompt and check whether even or odd using ternary operator.

// let input = +(prompt("Enter The Value if You want to Check the number is even or odd"))
// let result =(input % 2 === 0 )? "even ":"odd";
// console.log(result);

// 4. What is the final value of x?

// let x = 5;
// console.log(x);
// x += 3;
// console.log(x);

// x *= 4;
// console.log(x);
// x /= 6;
// console.log(x);
// x -= 2;
// console.log(x);
// x %= 3;
// console.log(x);


// 5. Check if a number is within a range between 10 and 20 (inclusive).

// let num 9= 19;
// let result = (num >10 &&num <20)? "Range": "inclusive";
// console.log(result);

// let a=20, b= 40, c= 12;
// let result = (a>b)?( a>c ? a:c):(b>c ? b:c)
// console.log(result);

// let email = "@shafqat";
// let password = 1213;
// let database_email = "@shafqat";
// let database_password = 1213;
// let result = ( database_email === email && database_password=== password)? "login successfully":"Email or password is incorrect";
// console.log(result);

// 8. What will be the output of the following JavaScript code?

// let a = 5, b = 3, c = 2;

// let result = a++ + -- b * c -- - ++a + b -- / -- c;   (WOrking on BODMs Rules)

// console. log("a:", a); //3 
// console.log("b:", b);//0
// console.log("c:", c);
// console.log("result:", result);

// What is the output of console.log(~a) where a = 0
// console.log(~a);


// 9. What will be the output of the following JavaScript code?

let x = 10;
let y = 5;
let z = "10";

x += y * 2; // Arithmetic + Assignment
let isEqual = x == z; // Loose comparison
let isStrictEqual = x === z; // Strict comparison
let logicTest = (isEqual || isStrictEqual) && !(y > 10); // Logical + Comparison + NOT

let result = logicTest ? ++x : -- y; // Ternary + Pre-increment/Pre-decrement

console.log("x:",x);
console.log("y:", y);
console.log("z:", z);
console.log("isEqual:", isEqual);
console.log("isStrictEqual:", isStrictEqual);
console.log("logicTest:", logicTest);
console.log("result:", result);
console.log("Type of z:", typeof z); // Unary operator typeof

