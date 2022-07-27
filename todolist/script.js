const todoForm = document.querySelector("#todoForm");
const input = todoForm.querySelector("input");
const ul = document.querySelector("#list ul");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function addTodo(inputObj) {
  const li = document.createElement("li");
  li.id = inputObj.id;
  const span = document.createElement("span");
  const addBtn = document.createElement("button");
  ul.appendChild(li);
  li.appendChild(span);
  li.appendChild(addBtn);
  span.innerText = inputObj.text;
  addBtn.innerText = "X";
  addBtn.addEventListener("click", removeTodo);
}

function removeTodo(e) {
  e.preventDefault();
  //   ul.removeChild(e.target.parentElement);
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// form에서 submit 할 시 실행될 것들
// (맨 처음에 실행되는 것)
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = input.value;
  input.value = "";
  const inputObj = {
    text: inputVal,
    id: Date.now(),
  };
  toDos.push(inputObj);
  addTodo(inputObj);
  saveToDos();
});

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(addTodo);
}
