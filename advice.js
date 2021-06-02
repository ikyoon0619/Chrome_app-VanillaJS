import axios from "axios";

const ADVICE_URL = "https://api.adviceslip.com/advice";

function fetchAdvice() {
  axios.get(ADVICE_URL).then((res) => {
    console.log(res);
    const pEl = document.createElement("p");
    const divEl = document.querySelector(".advice");
    pEl.textContent = res.data.slip.advice;
    divEl.appendChild(pEl);
  });
}

fetchAdvice();
