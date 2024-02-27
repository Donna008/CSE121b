document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        displayTasks(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayTasks(tasks) {
    var taskList = document.getElementById("taskList");

    tasks.slice(0, 5).forEach(task => {
        var newTask = document.createElement("li");
        newTask.innerHTML = `
            <input type="checkbox" onclick="toggleTask(this)">
            <span>${task.title}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
    });
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var newTask = document.createElement("li");
        newTask.innerHTML = `
            <input type="checkbox" onclick="toggleTask(this)">
            <span>${taskInput.value}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function toggleTask(checkbox) {
    var taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.classList.add("completed");
        // Add conditional styling here, for example:
        if (taskText.innerHTML.includes('important')) {
            taskText.classList.add("completed-important");
        }
    } else {
        taskText.classList.remove("completed");
        // Remove conditional styling here if needed
        taskText.classList.remove("completed-important");
    }
}

function deleteTask(button) {
    var task = button.parentNode;
    task.parentNode.removeChild(task);
}

