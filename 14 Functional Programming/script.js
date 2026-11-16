// let arr = [1, 2, 3, 4, 5];
// // let dubleArr = arr.map((num)=>{
// //     return num * 2;

// let dubleArr = arr.map(elem=>elem*2)

// console.log(dubleArr); 

// let sum = ((a,b)=>{
// // return a+b; //pure function 
// let sum = a+b;  //impure function
// console.log(sum);

// })
// let result = sum (10,133)
// console.log(result);

// mutable data (objects)
// let obj = {
//     name:"ali"
// };
// let fun =(name)=>{
//  obj.name = name;
// }
// console.log(obj);

// fun("ahmed");
// console.log(obj);

// functional programming 
// let list =["apple", "mango", "banana"];

// let fun = (item)=>{
//     list.push(item);
// }
// fun("watermelon");
// console.log(list);

// remove list item

// let arr = ["apple","mango","banana"];

// let removeItem = (arr)=>{
//     let newArr = arr.slice(0,-1);
//     return newArr;
// }
// let newArr = removeItem(arr);
// console.log(arr);
// console.log(newArr);
 
// let arr = [1,2,3,4,5];
// let double = arr.map( elem=>{
//     return (elem*2)
// })
// console.log(double)


// let total = 10;
// function increment(){
//     total++;
// }
// increment()
// console.log(total);

let obj ={
    name:"Shafqat Ullah",
    age: 25
}
function changeName(name){
    obj.name = name;
    let newObj ={...obj};
    console.log(name);
    
}
console.log('The 1st Name of the obj is :',obj);

changeName("khan");
console.log(obj);