//create a task array - for task list
let tasks = [];

//function to login page
function login(){
    const user = document.getElementById("username").value; //using const because fixed value (username=admin)
    const pass = document.getElementById("password").value;
    if (user === "admin" && pass === "123"){    //info to login
        alert("login successfully");
        window.location.href = "task.html" //redirect 2nd page
    }else{
        alert("invalid username or password");
    }
}

//function to display a task
function displayTasks() {
    let html = "";      //using let because change value
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        html += `
            <li>                                    
                <div class="task-info">
                <span class="task-text">${task.text}</span>
                <span class="task-status ${task.status}">${task.status}</span>
                </div>
                <button onclick="removeTask(${i})">x</button>                
            </li>
        `;
    }
    document.getElementById("list").innerHTML = html;
}

//function to add a task
function add(){
    let taskInput = document.getElementById("task");    //refer to id in html
    let statusInput = document.getElementById("taskstatus");
    let text = taskInput.value;
    let status = statusInput.value;
    if (text === "")return; //prevent empty task
    tasks.push({text:text,status:status}); //push an object with text and status
    taskInput.value = ""; //clear input
    //save and display task
    saveTasks();
    displayTasks();
}

//function to remove a task
function removeTask(i){
    tasks.splice(i, 1);
    saveTasks();
    displayTasks();
}

//function to clear all tasks [button]
function clearAll(){
    tasks = [];
    saveTasks();
    displayTasks();
}

//function to save tasks even after the page is refreshed
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
}

//function to load tasks
function loadTasks(){
    let saved = localStorage.getItem("tasks");
    if (saved !== null){
        tasks = JSON.parse(saved);
    }
}

//load and display tasks when page loads
loadTasks();
displayTasks()