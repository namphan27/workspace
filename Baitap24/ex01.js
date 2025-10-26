let tasks = [];

const inputEl = document.querySelector(".js-input");
const addBtn = document.querySelector(".js-btn");
const todoList = document.getElementById("todo-list");

function render(tasksArr) {
  if (tasksArr.length === 0) {
    todoList.innerHTML = "";
    return;
  }

  let html = "";
  tasksArr.forEach(task => {
    html += `
      <li class="flex justify-between items-center bg-[#6a35ff] text-white py-3 px-6 rounded-lg shadow-md min-h-[50px]" data-id="${task.id}">
        <span class="text-base ${task.complete ? "line-through" : ""}">${task.title}</span>
        <div class="flex space-x-3">
          <button class="edit-btn w-8 h-8 flex justify-center items-center rounded hover:bg-[#8856ff] transition text-white text-lg" onclick="editTask(${task.id})">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="delete-btn w-8 h-8 flex justify-center items-center rounded hover:bg-[#8856ff] transition text-white text-lg" onclick="deleteTask(${task.id})">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    `;
  });

  todoList.innerHTML = html;
}

addBtn.addEventListener("click", () => {
  const title = inputEl.value.trim();
  if (!title) {
    alert("Vui lòng nhập tên công việc!");
    return;
  }

  const exists = tasks.some(task => task.title.toLowerCase() === title.toLowerCase());
  if (exists) {
    alert(`Công việc "${title}" đã tồn tại!`);
    return;
  }

  const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

  tasks.push({ id: newId, title: title, complete: false });

  inputEl.value = "";
  render(tasks);
});

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  const newTitle = prompt("Sửa tên công việc:", task.title);
  if (!newTitle) return;

  const trimmed = newTitle.trim();
  if (!trimmed) {
    alert("Tên công việc không được để trống!");
    return;
  }

  if (tasks.some(t => t.title.toLowerCase() === trimmed.toLowerCase() && t.id !== id)) {
    alert(`Công việc "${trimmed}" đã tồn tại!`);
    return;
  }

  task.title = trimmed;
  render(tasks);
}

function deleteTask(id) {
  if (confirm("Bạn có chắc muốn xóa công việc này?")) {
    tasks = tasks.filter(t => t.id !== id);
    render(tasks);
  }
}

render(tasks);
