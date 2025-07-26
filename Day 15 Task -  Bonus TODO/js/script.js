function makeTodo(id, isChecked, todoText) {
  let todoLi = `<li id="todo-id-${id}" class="list-group-item position-relative">
            <input
              class=" form-check-input me-1"
              type="checkbox"
              value=""
              id="CheckboxStretched-${id}"
              ${isChecked ? "checked" : ""}
            />
            <label
              class="form-check-label stretched-link text-center"
              for="CheckboxStretched-${id}"
              >${todoText}
              </label>

              <button name="${id}" class=" delete-todo-btns btn btn-danger position-absolute end-0 top-0 h-100 z-3 rounded-0">
                X
              </button>
          </li>`;

  return todoLi;
}
function addTodo() {
  let todo = document.querySelector(".add-todo");
  let addTodo = document.querySelector(".add-btn");

  addTodo.addEventListener("click", () => {
    let todosList = [];
    const data = {
      id: Math.random().toString(16).slice(2),
      isChecked: false,
      todoText: todo.value,
    };
    todo.value = "";
    if (window.localStorage.getItem("todos")) {
      todosList = JSON.parse(window.localStorage.getItem("todos"));
    }

    todosList.push(data);
    window.localStorage.setItem("todos", JSON.stringify(todosList));
    todosList = [];

    getTodosAndDisplay();
  });
}
function getTodosAndDisplay() {
  let todoList = document.querySelector(".list-group");
  let todosData = window.localStorage.getItem("todos");
  let allTodos = "";
  if (todosData !== null) {
    todosData = JSON.parse(todosData);
    for (let task of todosData) {
      let { id, isChecked, todoText } = task;
      allTodos += makeTodo(id, isChecked, todoText);
    }
    todoList.innerHTML = allTodos;
    allTodos = "";
    deleteTodo();
    getCountOfTodos();
  }
}
function deleteTodo() {
  let todosList = [];
  let todosData = window.localStorage.getItem("todos");
  todosList = JSON.parse(todosData);
  let deleteTodosBtns = document.querySelectorAll(".delete-todo-btns");
  deleteTodosBtns.forEach((DeleteBtn) => {
    DeleteBtn.addEventListener("click", (e) => {
      todosList = todosList.filter((ele) => {
        return ele.id != e.target.name;
      });
      window.localStorage.setItem("todos", JSON.stringify(todosList));
      getTodosAndDisplay();
    });
  });
}
function resetTodos() {
  let reset = document.querySelector("#reset");
  let todoList = document.querySelector(".list-group");
  reset.addEventListener("click", () => {
    window.localStorage.clear();
    todoList.innerHTML = "";
  });
}
function getCountOfTodos() {
  try {
    let count = JSON.parse(window.localStorage.getItem("todos"));
    let display = document.querySelector("#count-display");
    display.innerHTML = `You have ${count.length} Pending Tasks`;
  } catch (error) {
    console.error(error);
  }
}
getTodosAndDisplay();
addTodo();
resetTodos();
