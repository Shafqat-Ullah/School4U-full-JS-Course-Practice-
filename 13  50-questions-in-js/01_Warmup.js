
// Q1 Create a function that returns the last element of an array.
// function lastElement (arr){
    // console.log("hello bro how are you");

const { number, set, parse } = require("zod")

    // return arr[arr.length-2]
//     return arr.pop()
// }
// let  arr =[1,2,3,4,5,6,7,8]
// let getLastElement = lastElement(arr)
// console.log(getLastElement);
// console.log(arr);

 
// Q2 Find the combination of two arrays.
// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10]
// let combinationArr = arr1.concat(arr2)
// let combinationArr2 = [...arr1,...arr2]
// console.log(combinationArr2);
// console.log(arr1);


// Q3 Generate a random integer between 0 to 18
// let randomNum =Math.floor(Math.random()*19)
// console.log(randomNum);


// Q4 Create a function that takes an array containing both numbers and strings, and returns a
// new array containing only the string values.

// let arr = [1,2,3,4,5,"hello","world","bro"]
// let resultArr = arr.filter(data=>{
//     if(typeof data === "string"){
//         return data}
//         else{
//             return false
//         }
// })
// console.log(resultArr);

// Q5 Find the maximum number in an array.
// let arr = [1,2,3,4,5,6,7,8,9]
// let maxNum =Math.max(...arr)
// console.log(maxNum);


// Q6 Write a function that returns the length of a given object (number of keys).




// let obj ={
//     name:"zohabi khan",
//     age : 40,
//     address: "Peshawar",
//     city: "Peshawar"
// }
// console.log(obj);


// let objLen =Object.keys(obj).length
//  console.log(objLen);
 
// Q7 In an array of objects filter out those objects which have gender's value male.

// let arr = [
//     {name:"zohabi khan",gender:"male"},
//     {name:"ali khan",gender:"male"},
//     {name:"sana khan",gender:"female"}
// ]
// let maleArr = arr.filter(person => person.gender === "male")
// console.log(maleArr);

// let maleArr = arr.filter(obj=>{
//     return obj.gender === "male"
// })
// console.log(maleArr);

// Q8 Given an array of strings, return a new array where all strings are in uppercase.

// let arr = ["hello","world","bro"]

// let upperCaseArr = arr.map(str => str.toUpperCase())
// console.log(upperCaseArr);
// console.log(arr);

//Q9 Check if an object is empty (has no keys).
// let obj = {
//     name:"Shafqat Ullah"
// }
// let objArr = Object.keys(obj);
// if (objArr.length===0){
//     console.log("Obj is empty")
// }
// else{
//     console.log("Not Empty")
// }


// Q10 10. Create an array of numbers and double each value using .map().
// let arr =[ 1,2,3,4,5]
// let doubleArr =arr.map(number=>{
//     return number*2
// })
// console.log(doubleArr)

// Q11 Convert an array of strings into a single comma-separated string.
// let arr =[1,2,3,4,5]
// let separated = arr.join();
// console.log(separated);

// Q12  Write a function to flatten a nested array (one level deep).(e.g., [1, [2, 3], 4] → [1, 2, 3, 4])

// let arr =[1,2,3,4,['a','b','c'],5,6,7,8]
// console.log(arr);

// console.log(arr.flat(1));

// console.log(arr[4]);
// arr.splice(4,1,...arr[4]);
// console.log(arr);


// Q13. Write a function that checks if all elements in an array are numbers.
// let arr =[1,2,34,"ali",55,77,88]
// let checkNumber = arr.every(num=>{
//     return typeof arr ==="number"
// });
// console.log(checkNumber);

// Q14 . Build a simple isPrime() function to check if a number is prime.


// let primeNUmber = (num=>{
//     for(let i=2; i<=Math.sqrt(num);i++){
//        if(num % i=== 0)
//         return false  
//     }
//     return true
// })
// console.log(primeNUmber(121));


// Q15.. Create a function that removes duplicate values from an array.

// let removeDuplicate =(arr=>{
//     let set = new Set(arr)
//     return[...set]
// })

// let resultArr = removeDuplicate([1,2,2,"ALI","ALI",2,2,3,4,4,5,6,6])
// console.log(resultArr);


// Q16.16. What’s the difference between parseInt and Number()?
// let a = parseInt("333.444px")
// let b = ("99.3434")
// console.log(Number(b));
 
// let a = '232323.23232px';
// let b = '3453453.343443px'
// console.log(Number(a));
// console.log(parseInt(b));
// console.log(+(a));


// 17. Why does 0.1 + 0.2 !== 0.3 in JavaScript?
// let a = 0.1;
// let b = 0.2;
// console.log(a+b);
// console.log(0.1+0.2 !==0.3);
// 0.30000000000000004 because they can not convert properly into binary so thats why when we add 0.1+0.2 it the end they show 4 on the decimal so that why


// Q18. Explain floating-point precision issues in JavaScript.


// 19. How would you handle high-precision decimal math in JS?
// let sum = +(0.1+0.2).toFixed(4);
// console.log(sum);

// console.log(sum ===0.3);


// 20. What is the difference between slice and splice?
// let arr =[1,2,3,4,5,6,7]
// console.log(arr.slice(2,3));
// console.log(arr.splice(2,3,8));

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let result= fruits.slice(1,2)
// console.log(result);

// 2 Splice
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let result = fruits.splice(1,2)
// console.log(result);

// console.log(fruits);
// let result = fruits.splice(1,0,"mango","kjsfh","jhsgfuyer")
// let result =fruits.splice(0,1,"khan")
// console.log(result);
// console.log(fruits);

// Q21Create a function that reverse each word of a given sentence. E.g., Mai hun
// manas → sanam nuh iam

// let sentence = 'hello this me Shafqat Ullah';
// let finalResult = sentence.split(' ').reverse().map(word =>{
//     console.log(word);
    
// });
// console.log(finalResult);

// Q 22 In an array of numbers and strings, only add those numbers which are not strings.

// let arr = [1,'55','hello',1212,22]
// let sum = 0;
// arr.forEach(item =>{
// if(typeof item === 'number'){
//    sum+=item
// //    console.log(sum);
   
    
// }

    
// })
// console.log(sum);

// Q23. How would you check if a number is an integer?

// let a = 20;
// if(typeof a === 'number'){
//     console.log('integer');
    
// }
// else{
//     console.log('not a number');
    
// }

// *********** 2nd method ***********
let num = 20;
let num2 = 20.02;
console.log(Number.isInteger(num)); //Number ture
console.log(Number.isInteger(num2));  //Flote false
console.log(num % 1 ===0);// we can also apply this method

