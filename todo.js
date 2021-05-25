const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function saveToDos() {
  // localStroage.setItem(key, value);
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // toDos를 JSON 형식으로 저장
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li); // 렌더링 된 ToDoList 항목 삭제
  const newToDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 저장되어 있는 toDos를 제거
  toDos = newToDos;
  saveToDos();
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.textContent = "X";
  delBtn.addEventListener("click", deleteToDo);
  span.textContent = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li); // ul 요소 아래에 li 요소 추가
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj); // toDos 배열에 toDoObj 객체 추가
  saveToDos(); // 추가 된 toDos 값을 배열에 저장
}

function loadToDos() {
  // localStorage.getItem(key)
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // localStorage에 toDos가 있다면
    const parsedToDos = JSON.parse(loadedToDos); // JSON 객체를 자바스크립트 객체로 변환
    parsedToDos.forEach((parsedTodo) => {
      paintToDo(parsedTodo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const currentValue = toDoInput.value;
    // 로컬저장소 toDos에 input 값 저장, toDos는 초기에 배열로 지정
    // 하지만 브라우저 로컬저장소는 배열 그대로 저장을 못한다.
    localStorage.setItem(TODOS_LS, currentValue);
    paintToDo(currentValue);
    toDoInput.value = "";
  });
}

init();
