const input = document.getElementById("validation-input");
input.addEventListener("blur", onBlurValidation);

function onBlurValidation(event) {
  const numberOfSymbols = event.currentTarget.value.trim().length;
  input.classList =
    numberOfSymbols === Number(input.dataset.length) ? "valid" : "invalid";
}
