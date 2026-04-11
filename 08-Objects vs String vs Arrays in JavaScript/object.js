// .....................Object .......................
let car ={
    brand : "honda",
    color : "red",
    maxSpeed : 200,
    stop : ()=>{
        console.log("stop the car");
        return 1;

    },
    start : function(){
        console.log("Starting the Car");
        return "Start Successfull"
    }
}
// console.log(car);
// console.log(car.brand);
// car.start();
// car.stop()
console.log(car["brand"]);

// car ["start"]