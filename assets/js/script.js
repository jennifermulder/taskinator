// named in Js when that specific button is clicked on a specific alert pops up
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// callback function
var createTaskHandler = function() {

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
   }

//annonymous function
formEl.addEventListener("submit", createTaskHandler);

  