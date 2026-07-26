let userContainer = document.querySelector('.userContainer')


const arr = [
    {
        profileUrl: '/images/Shafqat Ullah.png',
        name :"Shafqat Ullah",
        email : 'shafqatullah15305@gmail.com',

    },

     {
        profileUrl: './images/abbas.png',
        name :"Abbas Khan",
        email : 'abbas123@gmail.com',

    },

     {
        profileUrl: 'images/ahmad.png',
        name :"Ahmad",
        email : 'ahmad321@gmail.com',

    },

     {
        profileUrl: './images/tamoor.png',
        name :"Tamoor Khan",
        email : 'tamoor@gmail.com',

    }
]

let resultArr =arr.map((object)=>{
    let elem = document.createElement('div')
console.log(object);

})