document.addEventListener('DOMContentLoaded', function () {
    
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') {
            alert('Por favor, insira uma tarefa.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        
        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;
        
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        const completeButton = document.createElement('button');
        completeButton.className = 'btn btn-success btn-sm';
        completeButton.textContent = 'Concluir';
        completeButton.addEventListener('click', completeTask);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', deleteTask);

        actionsDiv.appendChild(completeButton);
        actionsDiv.appendChild(deleteButton);

        listItem.appendChild(taskSpan);
        listItem.appendChild(actionsDiv);

        taskList.appendChild(listItem);
        newTaskInput.value = '';
    }

    function completeTask(event) {
        const listItem = event.target.closest('li');
        listItem.classList.toggle('completed');
        const completeButton = listItem.querySelector('.btn-success');
        if (completeButton) {
            completeButton.remove();
        }
    }
    function deleteTask(event) {
        const listItem = event.target.closest('li');
        taskList.removeChild(listItem);
    }
});
