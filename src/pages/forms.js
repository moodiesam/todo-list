import Projects from '../project-creation' 


const makeProjectForm = (() => {

    //input fields to create Project

    const projectLibrary = document.getElementById('projectLibrary');
    const newProjectForm = document.createElement('form');
    const titleInputDiv = document.createElement('div')
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    const dueDateInputDiv = document.createElement('div')
    const dueDateLabel = document.createElement('label');
    const dueDateInput = document.createElement('input');
    const submitProjectBtn = document.createElement('button');

    newProjectForm.setAttribute('id', 'newProjectForm');

    titleInputDiv.classList.add('titleInputDiv');
    newProjectForm.appendChild(titleInputDiv)

    titleLabel.setAttribute('for', 'project-title')
    titleLabel.innerHTML = 'Project Title: ';
    titleInputDiv.appendChild(titleLabel);

    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'project-title');
    titleInput.setAttribute('name', 'project-title');
    titleInputDiv.appendChild(titleInput);

    dueDateInputDiv.classList.add('dueDateInputDiv');
    newProjectForm.appendChild(dueDateInputDiv);

    dueDateLabel.setAttribute('for', 'project-dueDate')
    dueDateLabel.innerHTML = 'Project Due Date: ';
    dueDateInputDiv.appendChild(dueDateLabel);

    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('id', 'project-dueDate');
    dueDateInput.setAttribute('name', 'project-dueDate');
    dueDateInputDiv.appendChild(dueDateInput);

    submitProjectBtn.setAttribute('type', 'button');
    submitProjectBtn.innerHTML = 'Create New Project';
    submitProjectBtn.setAttribute('id', 'createProject')
    newProjectForm.appendChild(submitProjectBtn);

    projectLibrary.appendChild(newProjectForm);

})();

const makeToDoForm = () => {
    //input fields to create to do task
    
    const todoLibrary = document.getElementById('toDoLibrary');
    const newToDoForm = document.createElement('form');
    
    const toDoTitleInputDiv = document.createElement('div')
    const toDoTitleLabel = document.createElement('label');
    const toDoTitleInput = document.createElement('input');

    const toDoDetailsInputDiv = document.createElement('div');
    const toDoDetailsLabel = document.createElement('label');
    const toDoDetailsInput = document.createElement('input');

    const toDoNotesInputDiv = document.createElement('div');
    const toDoNotesLabel = document.createElement('label');
    const toDoNotesInput = document.createElement('input');
    
    const projectSelectionDiv = document.createElement('div')
    const projectSelectionLabel = document.createElement('label');
    const projectSelections = document.createElement('select');
    
    const submitToDoBtn = document.createElement('button');

    newToDoForm.setAttribute('id', 'newToDoForm');

    //Input for To Do Title
    toDoTitleInputDiv.classList.add('toDoTitleInputDiv');
    newToDoForm.appendChild(toDoTitleInputDiv)

    toDoTitleLabel.setAttribute('for', 'toDo-title');
    toDoTitleLabel.innerHTML = 'To-Do Title: ';
    toDoTitleInputDiv.appendChild(toDoTitleLabel);

    toDoTitleInput.setAttribute('type', 'text');
    toDoTitleInput.setAttribute('id', 'toDo-title');
    toDoTitleInput.setAttribute('name', 'toDo-title');
    toDoTitleInputDiv.appendChild(toDoTitleInput);

    //Input for To Do Details
    toDoDetailsInputDiv.classList.add('toDoDetailsInputDiv');
    newToDoForm.appendChild(toDoDetailsInputDiv);

    toDoDetailsLabel.setAttribute('for', 'toDo-details');
    toDoDetailsLabel.innerHTML = 'Details: ';
    toDoDetailsInputDiv.appendChild(toDoDetailsLabel);

    toDoDetailsInput.setAttribute('type', 'text');
    toDoDetailsInput.setAttribute('id', 'toDo-details');
    toDoDetailsInput.setAttribute('name', 'toDo-details');
    toDoDetailsInputDiv.appendChild(toDoDetailsInput);

    //Input for To Do Notes

    toDoNotesInputDiv.classList.add('toDoNotesInputDiv');
    newToDoForm.appendChild(toDoNotesInputDiv);

    toDoNotesLabel.setAttribute('for', 'toDo-notes');
    toDoNotesLabel.innerHTML = 'Notes: ';
    toDoNotesInputDiv.appendChild(toDoNotesLabel);

    toDoNotesInput.setAttribute('type', 'text');
    toDoNotesInput.setAttribute('id', 'toDo-notes');
    toDoNotesInput.setAttribute('name', 'toDo-notes');
    toDoNotesInputDiv.appendChild(toDoNotesInput);

    //Input for project lesection

    projectSelectionDiv.classList.add('projectSelectionDiv');
    newToDoForm.appendChild(projectSelectionDiv);

    projectSelectionLabel.setAttribute('for', 'project-options');
    projectSelectionLabel.innerHTML = 'Select a Project: ';
    projectSelectionDiv.appendChild(projectSelectionLabel);

    projectSelections.setAttribute('id', 'project-options');
    projectSelections.setAttribute('name', 'project-options');
    projectSelectionDiv.appendChild(projectSelections);

    //create selection option for each project

    for(let i=0; i<Projects.Projects.projectLibrary.length; i++) {
        const projectOption = document.createElement('option');
        projectOption.setAttribute('value', [i]);
        projectOption.innerHTML = `${Projects.Projects.projectLibrary[i].title}`;
        projectSelections.appendChild(projectOption);
    }

    submitToDoBtn.setAttribute('type', 'button');
    submitToDoBtn.innerHTML = 'Create new To-Do';
    submitToDoBtn.setAttribute('id', 'createToDo');
    newToDoForm.appendChild(submitToDoBtn);

    todoLibrary.appendChild(newToDoForm);
};

const removeToDoForm = () => {
    const todoLibrary = document.getElementById('toDoLibrary');
    todoLibrary.removeChild(newToDoForm);
}

export default {
    makeProjectForm,
    makeToDoForm,
    removeToDoForm
}