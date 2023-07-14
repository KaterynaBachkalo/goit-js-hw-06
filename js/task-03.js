const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const ulEl = document.querySelector(".gallery");
// ulEl.classList = "img-list";

// for (const { url, alt } of images) {
//   const imgEl = document.createElement("img");
//   imgEl.src = url;
//   imgEl.alt = alt;

//   const liEL = document.createElement("li");
//   console.log(liEL);
//   liEL.appendChild(imgEl);
//   ulEl.append(liEL);
// }

const ulEl = document.querySelector(".gallery");
ulEl.classList = "img-list";

const markup = images
  .map(
    ({ url, alt }) =>
      `<li><img class = "img-item", src = "${url}", alt = "${alt}"></img></li>`
  )
  .join("");

ulEl.insertAdjacentHTML("beforeend", markup);
