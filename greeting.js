const formEl = document.querySelector(".js-form");
const inputEl = formEl.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";

function paintGreeting(text) {
  formEl.classList.remove("showing");
  greeting.classList.add("showing");
  greeting.textContent = `Hello ${text}`;
}

function setName() {
  formEl.classList.add("showing");
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const currentValue = inputEl.value;
    paintGreeting(currentValue);
    localStorage.setItem(USER_LS, currentValue);
  });
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // 사용자가 없다면
    setName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
