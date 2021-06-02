const body = document.querySelector("body");

const IMG_NUMBER = 6;

// 생성되고 가공된 이미지 요소를 body 요소 안으로 추가한다.
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/${imgNumber}.jpg`;
  body.appendChild(image);
  image.classList.add("bgImage");
}

// 사진의 갯수 범위 안에서 랜덤한 숫자 생성
function getRandom() {
  const number = Math.floor(Math.random() * 6 + 1);
  console.log(number);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
