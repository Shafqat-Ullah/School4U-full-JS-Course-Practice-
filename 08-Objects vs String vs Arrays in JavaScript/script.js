// let a = "Ahmad";
// let b = "khan";
// let concat = `${a} ${b}`; // template literals 
// console.log(concat);


//   .................

// new string object ma convert karta ha 

// let str = new String("Shafqat Ullah")
// console.log(str, typeof (str));

// let a = "Shafqat ullah ";
// let b = "Shafqat \n ullah";
// console.log(a, b, b.length);

// let str = " hello word";
// let str2 = " ";
// for (let ch of str){
//     str2 =str2 + ch +" ";
// }
// console.log(str2);


// ..............................method.....................//
// let str = "  Shafqat Ullah";
// console.log(str, str.length);

// console.log(str,str.toUpperCase());

// console.log(str , str.toLowerCase());

// console.log( str.trim() );

// let check = str.includes("hafqat")
// console.log(check);

// let index = str.indexOf("S");
// console.log(index);

// let charAt = str.charAt(5,6,7)
// console.log(charAt);

// let replace = str.replace("Shafqat","Asid")
// console.log(replace);


// let slice = str.slice(5,10);
// console.log(slice);

// console.log(str.slice(-8,19));
// console.log(str.substring(-8,19));

// console.log(str.split(" "));



// ..........................


// 1. Create a program to take full name from user and generate a username start 
// with @, followed by their full name and ends with underscore followed by the 
// length of full name.





// count how many times that character appears in the string.

// let str = prompt("Enter any string");
// let ch = prompt("Enter any Character");
// let count = 0;
// for(let val of str ){
//     if(val === ch)
//         count++;
// }console.log(count);

// Case-Insensitive Version


// practice Question 

// let name = prompt("Enter Your Name");
// let age = prompt("Enter Your Age");
// let sentence = `My name is ${name}\n and im ${age} year old`;
// console.log(sentence);


// 🔹 3. Escape Sequences
// let text = "Shafqat \n Ullah";
// console.log(text);


// 🔹 4. String Constructor
// let str = new String("Hello this me Shafqt Ullah");
// console.log(str);

// let words = "hello words";
// console.log(words[4]);


// 6. String Properties & Methods

// let length = "Shafqat Ullah";
// console.log(length.length);

// let x = 10;
// console.log(x)

// let a = "cat,dog,monkey";
// console.log(a.split(","));

// ✅ Question 1: Username Generator
// Task:

// Take full name from user

// Username format:

// @fullname_length

// let fullName = prompt("Enter Your Name");
// let name = fullName.replaceAll(" ","");
// let user=`@${name}_${fullName.length}`;
// console.log(user);


// a) Count character occurrences
// let str = prompt("Enter a string");
// let ch = prompt("Enter a character");

// let count = 0;

// for (let i = 1; i < str.length; i++) {
//     if (str[i] === ch) {
//         count++;
//     }
// }

// console.log("Count:", count);

// let sentence = prompt("Enter a sentence");

// sentence = sentence.trim();
// let words = sentence.split("");

// console.log("Total words:", words.length);

// let arr =[1,2,3,4,5,6,"hello","this is arr"]
// console.log(arr);

// let arr2 = (1,2,3,4,5,"khan");
// console.log(arr2);

// let arr = [1,2,3,4,5,"hello",88];
// console.log(arr,arr.length);
// let push = arr.push(877);
// console.log(arr,arr.length);
// let pop = arr.pop();
// console.log(arr);

// let unshift = arr.unshift(7);
// console.log(arr,unshift);
// let shift = arr.shift(8);
// console.log(arr,shift);

// ............................push.............
// let a = [2,3,4,5,6]
// let push = a.push(3,5);
// console.log(a);

// console.log(push);


// ...........pop............
// let a = [6,4,3,5,6,6,5,6]
// let pop = a.pop()
// console.log(a);

// unshift

// let a = [4,4,5,6,7,8,];
// let unshift = a.unshift(1,2,3);
// console.log(a);

// let a = [2,3,4,5,6,7];
// let shift = a.shift();
// console.log(a);
// console.log(shift);

// let arr = [1, 2, 3, 4, 5];
// // Remove 2 elements starting from index 1, and add 8, 9
// let removed = arr.splice(1,2);
// console.log(arr);     // [1, 8, 9, 4, 5]
// console.log(removed); // [2, 3]


// let a = [1,2,3,4,5];
// let b = [6,7,8,9,10];
// let concat = a.concat(b);
// console.log(concat);

// let a = ["shafqat Ullah"];
// // let b = ["Ullah"];
// let join = a.join();
// console.log(join);

// slice vs splice 
// splice 
// let nums = [1,2,3,4,5];
// nums.splice(2,2,20)
// console.log(nums)

// slice 
let newNums = [1,2,3,4,5];
let result = newNums.slice(1);
console.log(result)




