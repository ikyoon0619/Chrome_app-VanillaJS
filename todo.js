const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  const span = document.createElement("span");
  span.textContent = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const currentValue = toDoInput.value;
    localStorage.setItem(TODOS_LS, currentValue);
    paintToDo(currentValue);
    toDoInput.value = "";
  });
}

init();
