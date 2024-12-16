document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
});

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (tasks.length > 0) {
        displayTasks(tasks);
    } else {
        clearTaskList(); // Clear the task list if localStorage is empty
    }
}

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        const tasks = data.slice(0, 5); // Limit to 5 tasks
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Save to localStorage
        displayTasks(tasks);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayTasks(tasks) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the list before displaying
    tasks.forEach(task => {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(this)">
            <span>${task.title}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
    });
}

function clearTaskList() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the task list in the UI
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const newTask = {
            title: taskInput.value.trim(),
            completed: false
        };

        // Add to localStorage
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Update UI
        const newTaskElement = document.createElement("li");
        newTaskElement.innerHTML = `
            <input type="checkbox" onclick="toggleTask(this)">
            <span>${newTask.title}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTaskElement);

        taskInput.value = ""; // Clear the input field
    }
}

function deleteTask(button) {
    const taskElement = button.parentNode;
    const taskTitle = taskElement.querySelector("span").innerText;

    // Remove from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.title !== taskTitle);

    if (tasks.length === 0) {
        localStorage.removeItem("tasks"); // Clear localStorage if no tasks remain
        clearTaskList(); // Clear the task list in the UI
    } else {
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Update localStorage
    }

    // Remove from UI
    taskElement.parentNode.removeChild(taskElement);
}

function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    const taskTitle = taskText.innerText;

    // Update completed status in localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task => {
        if (task.title === taskTitle) {
            return { ...task, completed: checkbox.checked };
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Update UI
    if (checkbox.checked) {
        taskText.classList.add("completed");
    } else {
        taskText.classList.remove("completed");
    }
}

