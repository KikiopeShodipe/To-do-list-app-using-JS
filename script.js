function addTask(){
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = taskInput.value;
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.classList.add("done");
    doneBtn.onclick = function () {
        li.classList.toggle("completed");
    };
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function () {
        li.remove();
    };
    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}