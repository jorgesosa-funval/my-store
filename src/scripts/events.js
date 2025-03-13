const allButton = document.querySelector('#all');
const activeButton = document.querySelector('#actives');
const inactiveButton = document.querySelector('#inactives');
const tasksList = document.querySelector("#task_list");
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

allButton.addEventListener('click', loadAllTasks);
activeButton.addEventListener('click', loadActivesTasks);
inactiveButton.addEventListener('click', loadInactivesTasks);


function loadAllTasks() {
    tasksList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let checked = ""
        let lineThrough = ""
        if(task.completed === true){
            checked = "checked"
            lineThrough = "line-through"
        }
        const template = `
        <li class="flex justify-between pr-8 mb-2">
                   <label for="${task.id}" class="flex gap-2 items-center ${lineThrough}">
                       <input type="checkbox" id="${task.id}" class="size-4" ${checked}>
                       ${task.title}
                   </label>
   
                   <button class="cursor-pointer">
                       Del
                   </button>
        </li>
     `;
        tasksList.innerHTML += template;
    }

}

function loadActivesTasks() {

}

function loadInactivesTasks() {

}

