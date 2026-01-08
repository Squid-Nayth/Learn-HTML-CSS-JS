let tasks = [];

const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const newTask = {
        id: Date.now(),
        titre: document.getElementById('title').value,
        sousTitre: document.getElementById('subtitle').value,
        message: document.getElementById('message').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        completed: false
    };

    tasks.push(newTask);
    taskForm.reset();
    displayTasks();
});

function displayTasks() {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const card = document.createElement('div');
        card.className = "task-card";
        if (task.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <div class="task-header">
                <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})">
                <h3>${task.titre}</h3>
            </div>
            <h4>${task.sousTitre}</h4>
            <p>${task.message}</p>
            <p>${task.email} - ${task.date}</p>
            <button onclick="deleteTask(${task.id})">Supprimer</button>
        `;

        taskList.appendChild(card);
    });
}

window.toggleTask = function (id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = !tasks[i].completed;
        }
    }
    displayTasks();
};

window.deleteTask = function (id) {
    let newTasks = [];
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id !== id) {
            newTasks.push(tasks[i]);
        }
    }
    tasks = newTasks;
    displayTasks();
};
