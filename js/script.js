var renderTask = function(task) {
    $('#tasks').prepend('<li>' + task.task + ' <span data-id="' + task.id + '" class="deleteTask">X</span</li>');
};

//When page loads get all task for user
getAllTask();

//Bind click event to the add task button
$('#addTask').click(addTask)

//Bind click event for deleting of task
$(document).on('click', '.deleteTask', deleteTask)
