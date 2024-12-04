import { addTask, renderTask, removeTask, toggleComplete } from "./taskmanager.js";

let tasks = [];

const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");

taskForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const newTask = { id: Date.now(), title: taskInput.value, completed: false };
    tasks = addTask(tasks, newTask);
    taskInput.value = "";
    renderTask(tasks, taskList);
});

taskList.addEventListener("click", (event)=>{
    const id = parseInt(event.target.dataset.id, 10);

    if (event.target.classList.contains("delete-btn")){
        tasks = removeTask(tasks, id);
    }
    else if (event.target.classList.contains("checkbox")){
        tasks = toggleComplete(tasks, id);
    }

    renderTask(tasks, taskList);
});

renderTask(tasks, taskList);