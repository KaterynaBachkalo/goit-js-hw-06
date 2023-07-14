const categories = document.getElementById("categories");
const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  console.log(`Category: ${title}`);
  const liEl = category.querySelectorAll("li");
  console.log(`Elements: ${liEl.length}`);
});
