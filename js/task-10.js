const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const div = document.getElementById("boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  let markup = "";
  let amount = input.value;
  let size = 30;

  for (let i = 0; i < amount; i++) {
    markup += generateSquare(size);
    size += 10;
  }
  div.insertAdjacentHTML("beforeend", markup);
}

function generateSquare(size) {
  return `<div style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
}

function destroyBoxes() {
  div.innerHTML = "";
  input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
