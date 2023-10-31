const makePage = (() => {

    //input fields to create Project

    const content = document.getElementById('content');
    const newProjectForm = document.createElement('form');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    const dueDateLabel = document.createElement('label');
    const dueDateInput = document.createElement('input');
    const submitProjectBtn = document.createElement('button');

    newProjectForm.setAttribute('id', 'newProjectForm');

    titleLabel.setAttribute('for', 'project-title')
    titleLabel.innerHTML = 'Project Title';
    newProjectForm.appendChild(titleLabel);

    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'project-title');
    titleInput.setAttribute('name', 'project-title');
    newProjectForm.appendChild(titleInput);

    dueDateLabel.setAttribute('for', 'project-dueDate')
    dueDateLabel.innerHTML = 'Project Due Date';
    newProjectForm.appendChild(dueDateLabel);

    dueDateInput.setAttribute('type', 'text');
    dueDateInput.setAttribute('id', 'project-dueDate');
    dueDateInput.setAttribute('name', 'project-dueDate');
    newProjectForm.appendChild(dueDateInput);

    submitProjectBtn.setAttribute('type', 'button');
    submitProjectBtn.innerHTML = 'Create New Project';
    submitProjectBtn.setAttribute('id', 'createProject')
    newProjectForm.appendChild(submitProjectBtn);

    content.appendChild(newProjectForm);

    //input fields to create to do task
    
    const newToDoForm = document.createElement('form');
    const toDoTitleLabel = document.createElement('label');
    const toDoTitleInput = document.createElement('input');
    const projectSelectionLabel = document.createElement('label');
    const projectSelections = document.createElement('select');
    const projectOption1 = document.createElement('option');
    const projectOption2 = document.createElement('option');
    const submitToDoBtn = document.createElement('button');

    newToDoForm.setAttribute('id', 'newToDoForm');

    toDoTitleLabel.setAttribute('for', 'toDo-title');
    toDoTitleLabel.innerHTML = 'To-Do Title';
    newToDoForm.appendChild(toDoTitleLabel);

    toDoTitleInput.setAttribute('type', 'text');
    toDoTitleInput.setAttribute('id', 'toDo-title');
    toDoTitleInput.setAttribute('name', 'toDo-title');
    newToDoForm.appendChild(toDoTitleInput);

    projectSelectionLabel.setAttribute('for', 'project-options');
    projectSelectionLabel.innerHTML = 'Select a Project:';
    newToDoForm.appendChild(projectSelectionLabel);

    projectSelections.setAttribute('id', 'project-options');
    projectSelections.setAttribute('name', 'project-options');
    newToDoForm.appendChild(projectSelections);

    projectOption1.setAttribute('value', '0');
    projectOption1.innerHTML = 'Project 1';
    projectSelections.appendChild(projectOption1);

    projectOption2.setAttribute('value', '1');
    projectOption2.innerHTML = 'Project 2';
    projectSelections.appendChild(projectOption2);

    submitToDoBtn.setAttribute('type', 'button');
    submitToDoBtn.innerHTML = 'Create new To-Do';
    submitToDoBtn.setAttribute('id', 'createToDo');
    newToDoForm.appendChild(submitToDoBtn);

    content.appendChild(newToDoForm);


})();

export default {makePage}