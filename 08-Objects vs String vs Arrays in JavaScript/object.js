// .....................Object .......................
// let car ={
//     brand : "honda",
//     color : "red",
//     maxSpeed : 200,
//     stop : ()=>{
//         console.log("stop the car");
//         return 1;

//     },
//     start : function(){
//         console.log("Starting the Car");
//         return "Start Successfull"
//     }
// }
// console.log(car);
// console.log(car.brand);
// car.start();
// car.stop()
// console.log(car["brand"]);

// car ["start"]


// let obj = new Object({
//     name : "Shafqat Ullah"
// })
// let obj2 = {
//     number : 123,
//     city: "pakistan"
// }
// obj.age = 19
// console.log(obj);
// console.log(obj2);

// let obj = {
//     name : "Shafqat Ullah",
//     age : 23

// }
// console.log(obj);

// let obj = {
//     name :"shafqat",
//     greet : function(){
//         console.log(`hello this ${this.name}`)
        
//     } ,
// }
// obj.greet()

// let obj = {
// name: "Manas Kumar Lal",
// greet : function(){
// console.log(this.name)
// },
// }
// obj.greet() // Manas Kumar Lal


// let intro = {
//     name : "shafqat ullah",
//     age : 20,
//     fun : function (){
// console.log(`the into of ${this.name}`);

//     },
// }
//     intro.fun()


// let obj = {
//     name : "Shafqat Ullah",
//     age  : 30,

// }
// let keys = Object.keys(obj)
// console.log(keys)
// let value = Object.values(obj)
// console.log(value)
// let obj ={
//     name :"Shafqat Ullah",
//     age : 30
// }
// let name = obj.name;
// let age = obj.age;
// console.log(name,age);


// let obj ={
//     name :"Ahmad",
//     age : 12,
//     address : "kpk"
// }
// let {name ,age,address}=obj;
// console.log(name,age,address);


// ................Question .........

// let person = {
//     name : "ali",
//     age : 20,
//     city : "kpk",
    
// }
// person.email = "ali@gmail.com"


// for(let key in person){
//     console.log(`Value of ${key} is ${person[key]}`);
    
// }

// ......question 2
// let obj ={
//     fullName : "Shafqat ",
//     middleName : "Ullah",

//     lastName : "Salih"
// }
// let convertofullname  = (obj)=>{

// }
// console.log(obj);


// let arr = [
//     {name :"a" ,role : "admain"},
//      {name :"b", role : "user"},
//       {name :"c", role : "admain"},
// ]
// let filterditem = arr.filter((item) => {
//     console.log(item);
    
// })


// let car = {
    
//     model : "honda",
//     color : "red",
//     speed : 120,
    
//     stop:()=>{
//         console.log("Stop the car");
//         return 1;
//     },
//     start:()=>{
//         console.log("Start the car");
        
//     }

// }
// console.log(car.speed);
// car["start"]()
// console.log(car.start);


// let obj = new Object({ 
//     name :"khan"
// })
// let obj2 ={
//     address : "pakistan",
//     phone : 12321
// }
// let obj3 = {
//     car : "honda",
//     speed : 120
// }
// obj.name="khan"
// delete obj.name 
// console.log(obj);
// console.log(obj2);
// console.log(obj3) ; 



// let obj = {
//     Name :"Shafqat Ullah",
//     fun: function(){
// console.log(`This name ${this.Name}`);

//     }
// }
// obj.fun()


// let obj ={
//     Name : "Shafqat Ullah",
//     age : 22,
// }
// let key =Object.keys(obj);
// console.log(key);

// let Values = Object.values(obj)
// console.log(Values);

// for (let test in obj)
//     console.log(test);
    




// .................... Obj topic ....................
// let car ={
//     model :"Honad",
//     speed : "120",
//     color : "black",
//     price : 1230000
// }
// // console.log("the output of the car obj is :",car);
// // console.log(car.price);

// // console.log(car.color);
// // console.log(car["model"]);
// car.color="White"
// car.year=2026;
// delete car.color;
// console.log(car);

// console.log(car.color);/

// let person = {
//     name :"Shafqat Ullah",
//     age : 21,
//     isStudetnt : true,
//     marks : 400,
//     address : "peshawar"
// }
// console.log(person);



// let student = {
//     name :"Shafqat Ullah",
//     address :{
//         city : "Peshawar",
//         country :"Pakistan"
//     }
// };
// console.log(student);

// let student ={
//     Name :"Shafqat Ullah",
//     Skill : ["HTML","CSS","JAVASCRIPT"]
// }
// // console.log(student);
// console.log(student.Skill[1]);



// let Students =[
//     {
//         Name :"Ali",
//         Class :"5th",
//         age : 20,
//     },
//     {
//         Name :"Khan",
//         Class :"4th",
//         age : 22,
        
//     },
//     {
//         Name :"Shafqat Ullah",
//         Class :"4th",
//         age : 22,
        
//     }
// ];
// // console.log(Students[1]);
// console.log(Students[2].Name);

// let student ={

// }



// let Students ={
//     name :"Ali",
//     age : 20,
//     city : "Peshawar"
// }
// for (let key in Students){
//     console.log(Students[key]);
    
// }

// let students ={
//     name : "Shafqat Ullah",
//     address : "peshawar",
//     age : 20,
    
// };
// for(let key in students){
//     console.log(students[key]);
    
// }



// Object Methods (Function Inside Object)

// let boy={
//     name:"Ahmad",
//     helloboy:function(){
//         console.log("Hello boy");
        
//     }
// };
// boy.helloboy()

// let boy = {
//     name :"khan",
//     sayhello(){
//         console.log("Hello");
        

//     }
// }
// boy.sayhello()

// this Keyword
// let boy={
//     name:"Ahmad Khan",
//     age : 20,
//     address:  "peshawar",
//     intro(){
//         console.log(`My name is ${this.name}`);
        
//     }
// }
// boy.intro()



// Built-in Object Methods   Object.keys()
// let student ={
//     name :"ali khan",
//     age : 20,
//     city : "peshawar"
// };
// console.log(Object.keys(student));


// Object.entries()     Keys aur values dono array ki form mein return karta hai.

// let student ={
//     name :"ali khan",
//     age : 20,
//     city : "peshawar"
// };
// console.log(Object.hasOwn(student,"name"));

// Question 
// Print:

// Name

// // Department

// let student = {

// name:"Shafqat",

// age:22,

// department:"BSCS",

// semester:4

// }
// console.log(student.name);
// console.log(student.department);

// q2 update the value of price
// let car = {

// company:"Honda",

// model:"Civic",

// price:6000000

// }
// car.price = 5500000;
// console.log(car);


// Q3 ADD THE COLOR AND STORAGE
// let phone = {

// brand:"Samsung",

// model:"A55"

// }
// phone.color="red";
// phone.storage = 128;
// console.log(phone);

// Create an object with a nested object: Print only the city.
// let employee = {
//     name: "Ali",
//     address: {
//         city: "Peshawar",
//         country: "Pakistan"
//     }
// };
// console.log(employee.address["city"]);



// Create an array of objects: Print:

// Second student's name
// Third student's marks

// let students = [
//     { name: "Ali", marks: 85 },
//     { name: "Sara", marks: 92 },
//     { name: "Ahmed", marks: 78 }
// ];
// console.log(students[1]);
// console.log(students[2]);


// let car ={
//     name :"honad",
//     model :2025,
//     speed : 200
// }
// // Object.freeze(car)

// car.name="aaaa"
// console.log(car.hasOwnProperty('name'));

// let car2 ={
//     ...car
// }
// console.log(car2.hasOwan("name,honad"));

// console.log(car2);
// console.log(car2.hasOwan(name,"honda"));


// let car ={
//     model : "honda",
//     speed : "200",
//     color :"red"
// }
// console.log(car.model,car.speed);



// Destructuring

// const person = {
// name: 'Alice',
// age: 25,
// city: 'New York'

// };
// const {name,age,city}=person
// console.log(age);


