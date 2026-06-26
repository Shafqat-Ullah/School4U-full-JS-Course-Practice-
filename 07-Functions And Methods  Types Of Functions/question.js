// 1. Write a regular function that takes a string and returns it with the first letter capitalized.
// function capitalized (str){
//     console.log(str.charAt().toUpperCase() +str.slice(1));
    
// }
// capitalized("shafqat ullah")

// 2. Show an alert message that says “Please login” after 5 seconds on your website.

// setTimeout(() => {
//     alert("please login hear")
// }, 5000);

// . Make an arrow function that takes a price and a discount, and returns the price after 
// // discou
// let finalPrice =(price , discount)=>{
//     let  discountPrice = price - price*(discount/100)
//     console.log(discountPrice);
    
// }
// finalPrice(400,15)

// 4. Create a function that builds a username from a full name.

// let createUserName =(fullName)=>{
//     console.log(`@${fullName}`);
    
// }
// createUserName("Shafqat Ullah")


// Write a function that takes a traffic light color and gives the correct instruction (e.g. "go" 
// for green, "stop" for red, "caution" for yellow, and "invalid color" for anything else).



let trafficLight =(color)=>{
    if(color==="red"){
        console.log("STOP THE CAR");
        
    }else if(color==='yellow'){
        console.log("Ready for driving");
        
    }else if(color==="green"){
        console.log("You can go");
        
    }else{
        console.log("invalid color");
        
    }
}
trafficLight("green")