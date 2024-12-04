export const addTask = (tasks, newTask)=>{
    return [...tasks, newTask];
};

export const renderTask = (tasks, container)=>{
    container.innerHTML = "";

    tasks.forEach((task)=>{
        const taskElement = document.createElement("div");
        taskElement.className = `task ${task.completed ? "completed" : ""}`;
        taskElement.innerHTML = `
            <label>
                <input type="checkbox" class="checkbox" data-id="${task.id}" ${task.completed ? "checked" : ""}>
                ${task.title}
            </label>
            <button class="delete-btn" data-id="${task.id}">✖</button>
        `;
        container.appendChild(taskElement);
    });
};

export const removeTask = (tasks, id)=>{
    return tasks.filter((task)=> task.id !== id);
};

export const toggleComplete = (tasks, id)=>{
    return tasks.map((task)=>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
};