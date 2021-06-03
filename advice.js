const ADVICE_URL = "https://api.adviceslip.com/advice";

function fetchAdvice() {
  return fetch(ADVICE_URL)
    .then((response) => response.json())
    .then((data) => {
      const pEl = document.createElement("p");
      const divEl = document.querySelector(".advice");
      pEl.textContent = `" ${data.slip.advice}"`;
      divEl.appendChild(pEl);
    });
}

function init() {
  fetchAdvice();
}

init();
