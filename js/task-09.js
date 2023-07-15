const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
let hexCode = "";

button.addEventListener("click", onClickChangeColor);

function onClickChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = hexCode;
}

function getRandomHexColor() {
  hexCode = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  return hexCode;
}
