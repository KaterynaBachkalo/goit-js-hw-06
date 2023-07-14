const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEL = document.getElementById("ingredients");

const fragment = document.createDocumentFragment();

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList = "item";
  fragment.appendChild(liEl);
}
ulEL.appendChild(fragment);
