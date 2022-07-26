const todoForm = document.querySelector("#todoForm");
const input = todoForm.querySelector("input");
const ul = document.querySelector("#list ul");

function addTodo(inputVal) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const addBtn = document.createElement("button");
  ul.appendChild(li);
  li.appendChild(span);
  li.appendChild(addBtn);
  span.innerText = inputVal;
  addBtn.innerText = "X";
  addBtn.addEventListener("click", removeTodo);
}

function removeTodo(e) {
  e.preventDefault();
  //   ul.removeChild(e.target.parentElement);
  const li = e.target.parentElement;
  li.remove();
}

// form 기본설정 해제, addTodo() 실행?
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = input.value;
  input.value = "";
  addTodo(inputVal);
});
