var renderTask = function(task) {
    $('#tasks').prepend(
        '<li data-id="' + task.id + '" >' + task.task + '<span class="deleteTask">X</span</li>'
    );
};

//When page loads get all task for user
getAllTask();

//Bind click event to the add task button
$('#addTask').click(addTask);

//Bind click event for deleting a task
$(document).on('click', '.deleteTask', deleteTask);
