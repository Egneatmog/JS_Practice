const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let rdns = [];
  for (let index = 0; index < 6; index++) {
    const rdn = Math.floor(Math.random() * hex.length);
    let color = hex[rdn];
    rdns.push(color);
  }

  const color = "#".concat(rdns.join(""));

  document.querySelector(".color").innerHTML = color;
  document.querySelector("body").style.background = color;
});
