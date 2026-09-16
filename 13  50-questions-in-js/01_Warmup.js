
// Q1 Create a function that returns the last element of an array.
// function lastElement (arr){
    // console.log("hello bro how are you");

const { number } = require("zod")

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
let arr = [1,2,3,4,5,6,'shafqat',54354];
