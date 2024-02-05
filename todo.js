function addTask() {
    var taskInput = document.getElementById("taskInput");
    var timeInput = document.getElementById("timeInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
      var taskItem = document.createElement("li");
      var taskText = document.createElement("span");
      var taskTime = document.createElement("span");

      taskText.innerHTML = taskInput.value;
      taskTime.innerHTML = timeInput.value;

      // Create Edit button
      var editButton = document.createElement("button");
      editButton.innerHTML = "Edit";
      editButton.onclick = function () {
        var newText = prompt("Enter new text", taskText.innerHTML);
        if (newText !== null) {
          taskText.innerHTML = newText;
        }
      };

      // Create Delete button
      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
      };

      taskItem.appendChild(taskText);
      taskItem.appendChild(document.createTextNode(" - "));
      taskItem.appendChild(taskTime);
      taskItem.appendChild(document.createTextNode(" "));
      taskItem.appendChild(editButton);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      taskInput.value = "";
      timeInput.value = "";
    }
  }