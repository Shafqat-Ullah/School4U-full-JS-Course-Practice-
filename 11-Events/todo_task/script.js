const todoInput = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoContainer = document.querySelector("#todoContainer");


// Add Todo
addBtn.addEventListener("click", function () {

    const text = todoInput.value.trim();

    if (text === "") {
        return;
    }

    const todo = document.createElement("div");

    todo.classList.add("todo");

    todo.innerHTML = `
        <span>${text}</span>

        <button class="delete-btn">
            Delete
        </button>
    `;

    todoContainer.appendChild(todo);

    todoInput.value = "";
});


// Event Delegation
todoContainer.addEventListener("click", function (event) {

    // Delete button
    if (event.target.classList.contains("delete-btn")) {

        event.stopPropagation();

        event.target.parentElement.remove();

        return;
    }


    // Todo click
    const todo = event.target.closest(".todo");

    if (todo) {
        console.log("Todo Selected:", todo);
    }

});