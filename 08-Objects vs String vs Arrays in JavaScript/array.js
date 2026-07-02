// let arr = [4,5,6,7];
// console.log(arr);
// arr.push("Shafqat Ullah") //push add karta ha arr ma but array ke end ma
// console.log(arr);
// arr.pop();  pop reomve karat ha array ke ends se
// console.log(arr);
// arr.unshift(2);  unshift add karta ha array ke Start ma
// console.log(arr);

// arr.shift(); shift remove karta ha array ke start se
// console.log(arr);
// let arr = [4,5,6,7,61,71,8];
// console.log(arr);
// let newarr = arr.slice(1, 4);
// console.log(newarr); slice hami 1 new array data ha but ye point yad raki ke last number include nahi hoga

// let newarr = arr.splice(2,3,88,999,666)
// console.log(newarr);
// console.log(arr);

// let arr = ["apple","mango","banana"];
// arr.reverse()
// console.log(arr);
// arr.sort()
// console.log(arr);
// let test = arr.find( function (item){
//     // console.log(item);
//    return item === "mango"

    
// })
// console.log(test);


// let numbers = [10, 20, 30, 40];

// let result = numbers.find(num => num > 25);

// console.log(result);

// let users = [
//   {name: "Ali", age: 20},
//   {name: "Ahmed", age: 25},
//   {name: "Sara", age: 30}
// ];

// let result = users.find(user => user.age > 22);

// console.log(result);


// let arr = ["mango",["apple"],"banana"];
// console.log(arr.flat());  flat is use to convert nested array into one array
// let names = ["Ali", "Zain", "Ahmed"];
// names.sort();

// console.log(names);

// let arr = [10, 2, 5];

// arr.sort(function(a, b) {
//   return a - b;
// });

// console.log(arr);

// 1) Map
// let numbers = [1, 2, 3];

// let result = numbers.map(num => num * 2);

// console.log(result); // [2, 4, 6]

// let arr1 = [1,2,3,4,"hello this"]
// console.log(arr1);

// arr1[1]=22;
// console.log(arr1);



// .............array...........

// let arr1 = [1,2,3,4,5,6,7,8,9]
// console.log(arr1);
// let arr2 = ["Shafqat",1,2,3,"Ullah"];
// console.log(arr2);
// let arr3 = ["apple","mange","banana","grips"]
// console.log(arr3);
// let arr4 = ["apple","mange",[1,2,3],"banana","grips"]
// console.log(arr4);

// Create array using array constructor:
// let arr = new Array("ali",2,3,4,5)
// console.log(arr);

// let arr = [1,2,3,4,5,6]
// arr [2]=99;
// console.log(arr);
// arr[5]=33;
// console.log(arr);

// let arr = [1,2,3,5,7,9,99]

// for(i =0; i<arr.length; i++){
//     console.log(arr[i] *2);
    
// }
// for (let elem of arr){
//     console.log(elem);
    
// }


// let arr =[1,2,3,5,"khan",6];
// arr.push(88)  // add item it the start
// console.log(arr);
// arr.pop(); delate item for the end
// console.log(arr);
// arr.shift(3);  delate item from the start
// console.log(arr);
// arr.unshift(0);
// console.log(arr);  add item form the start

// let newarr = arr.slice(1,3);
// console.log(newarr);
// arr.splice(1,2,77,88,99)
// console.log(arr);
// arr.splice(4,2,"Shafqat Ullah",8,9)
// console.log(arr);


// let arr1 =[1,2,3,4,5]
// let arr2=["ali ","khan","ahmad"]
// // let newarr =arr1.concat(arr2)
// // let newarry = [...arr1,...arr2]
// // let join = arr1.join(" @ ")

// // let available = arr2.includes("khan")
// // let convert= arr2.toString("   ")
// let find  = arr2.indexOf("khan")
// console.log(find);

// let fruits = ["apple","mango","banana"]
// let result = fruits.find((fruits)=>fruits==="mango")
// console.log(result);

// let arr =["apple","mango",["banana","sab"],["etc"]]
// let result = arr.flat(1)
// console.log(result);
// let fruits =["mango","banana","apple"]
// fruits.sort()
// console.log(fruits);


// let numbers =[114,221,641,11,8,0]
// numbers.sort((a,b)=>{
//     //  console.log(b-a);
//     return a-b;
     
// })
// console.log(numbers);

// // console.log(assinding);






// let number = [44,22,66,77,88,11,2,0];
// number.sort((a,b)=>{
//     return a-b
    
// })
// console.log(number);

// let arr = [34,55,1,2,0,35]
// arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(arr);

    // let arr = [1,2,5,9,6,4];
    // arr.map((Element,index,arr)=>{
    //     console.log(Element,index,arr);
        
    // })
// let arr =[ 3,5,6,3,2,6,8];
// let result = arr.map((Number)=>{
//     return  Number*2
// })
// console.log(result);



// let arr =[ 3,5,6,3,2,6,8];
// let newarr =arr.map((arr)=>{
//     return arr +5
// })
// console.log(newarr);

// let fruits =["apple","banana","mango"]
// let uppercase = fruits.map((fruits)=>{
//     return fruits.toUpperCase();
// })
// console.log(fruits);

// console.log(uppercase);



// let arr = [2,3,4,6,7,8];
// let sum = 0;
// let newarr=arr.forEach((num)=>{
    //     sum+=num;
    // })
    // console.log(sum);
    
    // let arr = [2,3,4,6,7,8];
    // let arr = ["apple ","banana","mango"]
    // let newarr = arr.forEach((element , arr)=>{
    //     console.log(arr,element);
        
    // })


//     let numbers = [1,2,4,5,6,7,8]
// let newnum= numbers.forEach((numbers)=>{
//     console.log(numbers,numbers*3);
    
// })

// let cart =["laptop","mouse","keyboard"]
// cart.forEach((cart)=>{
//     console.log("product:",cart);
    
// })

// let students = ["ali","ahmad","bilal"];
// students.forEach((students)=>{
//     console.log("welcome "+students);
    
// })


// let numbers = [1,2,3,4,5,6];
// let result = numbers.forEach((num)=>{
//     console.log(num);
    
// })
// console.log(result);

// let numbers = [1,2,3,4,5,6]


// let arr = [2,4,6];
// let result = arr.forEach((num)=>num*2
//     // return ;
// )
// console.log(result);


// let arr =[1,2,3];
// arr.forEach((num)=>{
//     console.log(num*2);
    
// })


// ......filter method

// let arr = [10,20,40,70]
// let newarr = arr.filter((a)=>a>25)
// console.log(newarr);


// let obj ={
//     name : "Shafqat",
//     deposit : (amount)=>{
//       console.log(amount);
        
//     }
// }
// obj.deposit(  2222  )


// ...........for each
// let arr =[2,4,5,6,7,9]
// arr.forEach((arr)=>{
//     console.log(arr*2);
    
// })
// ........... for each question
// let colors = ["Red", "Blue", "Green"];
// colors.forEach((colors)=>{
//     console.log(colors);
    
// })

// let marks = [70, 80, 90];
// marks.forEach((marks=>{
//     console.log(`Marks : ${marks}`);
    
// }))

// let cities = ["Peshawar", "Karachi", "Lahore"];
// let welcome = cities.forEach((cities)=>{
//     console.log(`Welcome to : ${cities}`);
    
// })

// let number =[1,23,55,66,77]
// let result = number.map((number)=>{
    //     // console.log(number*2 );
    //     return number*2
    
    // })
    // console.log(result);
    
    // let number =[1,23,55,66,77]
    // let result = number.map((number)=>{
    //     return number*2
    // })
    // console.log(number);
    // console.log(result);
    
    

    // let name = ["ali","khan","ahmad"]
    // let welcome = name.map((name)=>{
    //     console.log(`Welcome ${name}`);
        
    // })

    // let price =[100,200,400,500,600]
    // let discount = price.map((price)=>{
    //     // console.log(price-20);
    //     return price -20
        
    // })
    // console.log(discount);
    


    // let students = [
    //     {name : "ali",age :20},
    //     {name : "Khan",age :10},
    //     {name : "Ahmad",age : 30},
    // ];
    // let name = students.map((students)=>{
    //    return students.name
        
    // })
    // console.log(students);
    

    // let user =[
    //     {Name :"Ali"},
    //     {Name :"khan"},
    //     {Name :"Ahmad"},
    // ];
    // let userName = user.map((user)=>{
    //     return user.Name
    // })
    // console.log(userName);
    

//     let numbers = [1, 2, 3];

// let result = numbers.forEach((num )=>{
//     return num *2

// });

// console.log(result);

// let numbers = [1, 2, 3];

// let result = numbers.map(num => num * 2);

// console.log(result);

// let number = [20,30,40,50]
// let result =  number .map((number)=>{
//     return number*5
// })
// console.log(result);


// Har name ke start mein "Mr. " add karo.
// let names = ["ALI","AHMAD","KHAN"];
// let MR = names.map((names)=>{
//     console.log(`Mr ${names}`);
    
// })
// console.log(MR);
// Har price par 100 rupees discount lagao.
// let price = [500,600,700,800];
// let discount = price.map((price)=>{
//     return price -100
// })
// console.log(discount);


// let user =[
//     {Name : "Shafqat Ullah"},
//     {Name : "Ali KHan"},
//     {Name : "Ahmad"}
// ]
// let userName = user.map((user)=>{
//     // console.log();
//     return user.Name
    
// })
// console.log(userName);



// let numbers =[2,3,4,5,6,7,8];
// let total = numbers.reduce((a ,b)=>{
    //     return a + b
    // })
    // console.log(total);
    
    // let number = [3,5,6,7,88,99];
    // let max = number.reduce((num,largest)=>{
    //     if(num>largest){
    //         return num;
    //     }
    //     else{
    //         return largest
    //     }
    // })
    // console.log(max);
    
// let number = [33,4,5,56,88,99,44]
// let min = number.reduce((small,num)=>{
//     if(num<small){
//         return num;
//     }else{
//         return small
//     }
// })
// console.log(min);
 
// 1. For an array with marks of students find the average marks of the entire class.
// let arr =[2,3,4,5]
// let sum = arr.reduce((a, b)=>{
//     return a+b;
// })
// let average = sum/arr.length
// console.log(`the sum of ${sum}`);
// console.log(`the avrage of ${average}`);


// 2. Create an array with the given length(n) and fill with 0.
let n = 25;
let arr = new Array(25).fil(0)
console.log(arr);



