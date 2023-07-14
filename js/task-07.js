const input = document.getElementById("font-size-control");
input.addEventListener("input", onInputChangeFontSize);
const text = document.getElementById("text");

function onInputChangeFontSize() {
  text.style.fontSize = `${input.value}` + "px";
}
