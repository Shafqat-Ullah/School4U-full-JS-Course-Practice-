let btn = document.querySelector("#btn");
let modalContainer = document.querySelector(".modelContainer");
let closeBtn = document.querySelector(".closeBtn");
btn.addEventListener("click", function () {

    // console.log("Button clicked");
    modalContainer.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
    modalContainer.style.display = "none";
});
modalContainer.addEventListener("click",  (event)=> {
    if(event.target.className === "modelContainer"){

        modalContainer.style.display = "none";
    }
});