const makePage = (() => {
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

})();

export default {makePage}