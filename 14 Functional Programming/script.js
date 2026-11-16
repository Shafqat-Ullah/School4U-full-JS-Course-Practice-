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

// let obj ={
//     name:"Shafqat Ullah",
//     age: 25
// }
// function changeName(name){
//     obj.name = name;
//     let newObj ={...obj};
//     console.log(name);
    
// }
// console.log('The 1st Name of the obj is :',obj);

// changeName("khan");
// console.log(obj);

// let list = ['mongo','apple','banana','grapes'];
// let add =  (itemPush)=>{
//     list.push(itemPush)
// }
// console.log(list);
// add('gava');
// add('kiwi');
// console.log(list);

// let list =['cat','dog','cow'];
// let add = (pushItem)=>{
//     list.push(pushItem);
// }
// console.log(list);
// add('kingroo');
// console.log(list);


// i want to remove the last item from the list using functional programming approach.You can remove the last item from a list using a functional programming approach by creating a new array that excludes the last item. Here's how you can do it:

// let list = ['cat', 'dog', 'cow'];

// let removeLastItem = (arr) => {
//     return arr.slice(0, -1); // Create a new array excluding the last item
// };
// let newList = removeLastItem(list);
// console.log('Original List:', list);
// console.log('New List after removing last item:', newList);


// let arr =[ 'apple','mango','banana','grapes']
// function removeLastItem(arr){
//     let newarr =arr.slice(0,-1);
//     return newarr;
// }
// let newarr = removeLastItem(arr);
// console.log(newarr);

