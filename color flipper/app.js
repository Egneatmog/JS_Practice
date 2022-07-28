const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const rdn = Math.floor(Math.random() * 4);
  let color = colors[rdn];
  document.querySelector(".color").innerHTML = color;
  document.querySelector("body").style.background = color;
});
