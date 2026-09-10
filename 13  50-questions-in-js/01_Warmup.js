
// Q1 Create a function that returns the last element of an array.
// function lastElement (arr){
    // console.log("hello bro how are you");

    // return arr[arr.length-2]
//     return arr.pop()
// }
// let  arr =[1,2,3,4,5,6,7,8]
// let getLastElement = lastElement(arr)
// console.log(getLastElement);
// console.log(arr);


// Q2 Find the combination of two arrays.
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10]
// let combinationArr = arr1.concat(arr2)
let combinationArr2 = [...arr1,...arr2]
console.log(combinationArr2);
// console.log(arr1);
