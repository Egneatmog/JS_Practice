const imgs = document.querySelectorAll("img");
const div = document.querySelector("#image");

imgs.forEach((e) => {
  e.addEventListener("mouseover", () => {
    div.innerHTML = e.alt;
  });
});
