const todoenter = document.querySelector(".todoenter");
const addBtn = document.querySelector(".addButton");
const errorDiv = document.querySelector(".error")
const todoField = document.querySelector(".todos");


function addListener_To_CloseButton() {
    const closeButton = document.querySelectorAll(".closeButton");
    console.log(closeButton);
    closeButton.forEach((el, index) => {
        el.addEventListener("click", (e) => {
            const child = e.target.parentNode;
            e.target.parentNode.parentNode.removeChild(child);
        })
    })
}

function todoMaker(todoName) {
    return `
    
    <div class="todoName">
    <p>${todoName}</p>
    <button class="closeButton">close</button>
  </div>

    `
}


addBtn.addEventListener("click", () => {

    const inputVal = todoenter.value;
    if (!inputVal) {
        errorDiv.textContent = "please dont leave the field empty";
        setTimeout(() => {
            errorDiv.textContent = "";
        }, 2000);
        return 0;
    }


    todoField.insertAdjacentHTML("beforeend", todoMaker(inputVal));
    todoenter.value = "";
    addListener_To_CloseButton();

})



