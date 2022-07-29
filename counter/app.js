const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

decrease.addEventListener("click", () => {
  let a = parseInt(document.querySelector("#value").innerHTML);
  document.querySelector("#value").innerHTML = a - 1;
});

reset.addEventListener("click", () => {
  let a = parseInt(document.querySelector("#value").innerHTML);
  document.querySelector("#value").innerHTML = 0;
});

increase.addEventListener("click", () => {
  let a = parseInt(document.querySelector("#value").innerHTML);
  document.querySelector("#value").innerHTML = a + 1;
});
