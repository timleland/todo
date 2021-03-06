//Needs to be your own unique id
var userId = 1;

//Api endpoint for todo.
var apiUrl = 'https://todo.timleland.com/api/user/' + userId + '/task/';

//Function that gets all task
var getAllTask = function() {
    $.get(apiUrl, function(tasks) {
        tasks.forEach(function(task) {
            renderTask(task);
        });
    });
};

//Function that adds a task
var addTask = function() {
    var data = {
        task: $('#newTask').val()
    };

    $.post(apiUrl, data, function(task) {
        renderTask(task);
    });
};

//Function that delete task by its Id
var deleteTask = function() {
    var task = $(this).parent('li');
    $.ajax({
        url: apiUrl + task.data('id'),
        type: 'DELETE',
        success: function(response) {
            //If delete is successful, remove the task
            task.remove();
        }
    });
};


//Function that updates task by its Id. Not implemented but can update the task or mark it as completed
// var updateTask = function() {
//     var task = $(this).parent('li');
//     var data = {
//         task: //STRING: Task description,
//         completed: //BOOL true/false
//     };
//
//     $.ajax({
//         url: apiUrl + task.data('id'),
//         type: 'PUT',
//         success: function(response) {
//         }
//     });
// };
