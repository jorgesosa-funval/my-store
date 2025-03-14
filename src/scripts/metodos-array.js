const allButton = document.querySelector('#all');
const activeButton = document.querySelector('#actives');
const inactiveButton = document.querySelector('#inactives');
const tasksList = document.querySelector("#task_list");
const newTask = document.querySelector('#new_task');
const tasks = [
    {
        id: 1,
        title: "Bailar",
        completed: false
    },
    {
        id: 2,
        title: "Celebrar",
        completed: true
    },
]
loadAllTasks()

allButton.addEventListener('click', loadAllTasks);
activeButton.addEventListener('click', loadActivesTasks);
inactiveButton.addEventListener('click', loadInactivesTasks);
tasksList.addEventListener('change', completeTask)

/* Functions */
function loadAllTasks() {
    newTask.classList.remove('hidden')
    taskLoader(tasks, tasksList)
}

function loadActivesTasks() {
    newTask.classList.remove('hidden')
    const activesTasks = tasks.filter(function (task) {
        return  task.completed === false 
    })
    taskLoader(activesTasks, tasksList);
}

function loadInactivesTasks() {
    newTask.classList.add('hidden')
    const inactivesTasks = tasks.filter(function (task) {
        return task.completed;
    })
    taskLoader(inactivesTasks, tasksList, true)
}

function completeTask(event) {
    const id = parseInt(event.target.id);

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (task.id === id) {
            task.completed = !task.completed
        }
    }
    loadAllTasks()
}

function taskLoader(array, elementHTML, del = false) {
    elementHTML.innerHTML = ""
    array.forEach(function (task) {

        let checked = ""
        let lineThrough = ""
        let boton = "" 
        if (task.completed) {
            checked = "checked"
            lineThrough = "line-through"
        }
        if(del){
            boton = `
                <button class="cursor-pointer">
                    Del
                </button>
            `
        }
        const template = `
            <li class="flex justify-between pr-8 mb-2">
                <label for="${task.id}" class="flex gap-2 items-center ${lineThrough}">
                    <input type="checkbox" id="${task.id}" class="size-4" ${checked}>
                    ${task.title}
                </label>
                ${boton}
            </li>
        `;

        elementHTML.innerHTML += template
    });
}