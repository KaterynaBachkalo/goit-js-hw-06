const categories = document.getElementById("categories");
const items = [...categories.children];
console.log(`Number of categories: ${items.length}`);

items.forEach((category) => {
  const title = category.firstElementChild;
  console.log(`Category: ${title.textContent}`);
  const ulEl = category.lastElementChild.children;
  console.log(`Elements: ${ulEl.length}`);
});
