 const newTaskinput  =  document.getElementById('newTaskInput');
 const  addTaskButton = document.getElementById('addTaskButton');
 const   taskList     = document.getElementById('taskList');

 addTaskButton.addEventListener('click', () => {
    const taskText = newTaskinput.value.trim();

    if( taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        newTaskinput.value = '';
    }
 });