// named in Js when that specific button is clicked on a specific alert pops up
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// callback function
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }

//annonymous function
buttonEl.addEventListener("click", createTaskHandler);

  