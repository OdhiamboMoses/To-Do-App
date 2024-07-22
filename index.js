const display = document.getElementById("display");
const addBtn = document.getElementById("add-btn");
const resetBtn = document.getElementById("reset-btn");
const inputText = document.getElementById("text-input");
const toDo = document.getElementById("to-do");
const required = document.getElementById("required");

//const display = document.getElementById("display");

//add user input on the display div
addBtn.addEventListener("click", function () {
  const userInput = inputText.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  deleteBtn.classList.add("btn");

  if (userInput !== "") {
    required.innerText = "";
    let newItem = document.createElement("li");
    newItem.classList.add("list-item");
    newItem.innerHTML = userInput;
    newItem.appendChild(deleteBtn);
    // add eventListener to the item
    newItem.addEventListener("click", function () {
      if (newItem.style.textDecoration === "line-through") {
        newItem.style.textDecoration = "none";
        deleteBtn.classList.remove("btn-danger");
        newItem.style.backgroundColor = "white";
        newItem.style.color = "#444";
      } else {
        newItem.style.textDecoration = "line-through";
        deleteBtn.classList.add("btn-danger");
        newItem.style.backgroundColor = "green";
        newItem.style.color = "white";
      }
    });
    // add event listener to delete item
    deleteBtn.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("btn")) {
        e.target.parentElement.remove("list-item");
      }
    });
    toDo.appendChild(newItem);
    inputText.value = "";
  } else {
    required.innerText = "Input is Required.";
  }
});

inputText.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userInput = inputText.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.classList.add("btn");

    if (userInput !== "") {
      required.innerText = "";
      const newItem = document.createElement("li");
      newItem.classList.add("list-item");
      newItem.innerText = userInput;
      newItem.appendChild(deleteBtn);
      // add eventListener to the item
      newItem.addEventListener("click", function () {
        if (newItem.style.textDecoration === "line-through") {
          newItem.style.textDecoration = "none";
          deleteBtn.classList.remove("btn-danger");
          newItem.style.backgroundColor = "white";
          newItem.style.color = "#444";
        } else {
          newItem.style.textDecoration = "line-through";
          deleteBtn.classList.add("btn-danger");
          newItem.style.backgroundColor = "green";
          newItem.style.color = "white";
        }
      });
      // add event listener to delete item
      deleteBtn.addEventListener("click", function (e) {
        if (e.target && e.target.classList.contains("btn")) {
          e.target.parentElement.remove("list-item");
        }
      });

      toDo.appendChild(newItem);
      inputText.value = "";
    } else {
      required.innerText = "Input is Required.";
    }
  }
});

resetBtn.addEventListener("click", function () {
  toDo.innerHTML = "";
  required.innerText = "";
});
