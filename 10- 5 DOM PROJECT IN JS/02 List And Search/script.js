// let userContainer = document.querySelector('.userContainer')


// const arr = [
//     {
//         profileUrl: '/images/Shafqat Ullah.png',
//         name :"Shafqat Ullah",
//         email : 'shafqatullah15305@gmail.com',

//     },

//      {
//         profileUrl: './images/abbas.png',
//         name :"Abbas Khan",
//         email : 'abbas123@gmail.com',

//     },

//      {
//         profileUrl: 'images/ahmad.png',
//         name :"Ahmad",
//         email : 'ahmad321@gmail.com',

//     },

//      {
//         profileUrl: './images/tamoor.png',
//         name :"Tamoor Khan",
//         email : 'tamoor@gmail.com',

//     }
// ]

// let resultArry = arr.map((obj)=>{

//     let divelem = document .createElement('div') 
//     divelem.className='userInput'
//     divelem.innerHTML = `
//     <img src="./images/Shafqat Ullah.png" alt="">
//                 <div class="userDeatils">
//                     <h3>Shafqat Ullah</h3>
//                 <p>shafqatullah15305@gmail.com</p>
//                 </div>
                
//             </div>
            

//     `
//    userContainer.append(divelem)

           
  
    
// })

// // console.log(resultArry);


// Select Elements
const searchInput = document.querySelector("#searchInput");
const userCards = document.querySelectorAll(".userInput");

// Search Function
searchInput.addEventListener("input", function () {
    // Get Search Value
    const searchValue = searchInput.value.toLowerCase().trim();

    // Loop Through All User Cards
    userCards.forEach(function (card) {
        // Get User Name and Email
        const name = card.querySelector("h3").textContent.toLowerCase();
        const email = card.querySelector("p").textContent.toLowerCase();

        // Check if Search Value Matches Name or Email
        if (name.includes(searchValue) || email.includes(searchValue)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});