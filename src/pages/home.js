

const HomePage = (() => {
    //four divs for projects, tasks, project banner, task display

    const content = document.getElementById('content');
    const projectLibrary = document.createElement('div');
    const projectBanner = document.createElement('div');
    const toDoLibrary = document.createElement('div');
    const toDoDisplay = document.createElement('div');

    projectLibrary.setAttribute('id', 'projectLibrary');
    projectLibrary.classList.add('projectLibrary');
    content.appendChild(projectLibrary);

    projectBanner.setAttribute('id', 'projectBanner');
    projectBanner.classList.add('projectBanner');
    content.appendChild(projectBanner);

    toDoLibrary.setAttribute('id', 'toDoLibrary');
    toDoLibrary.classList.add('toDoLibrary');
    content.appendChild(toDoLibrary);

    toDoDisplay.setAttribute('id', 'toDoDisplay');
    toDoDisplay.classList.add('toDoDisplay');
    content.appendChild(toDoDisplay);

})();

export default { HomePage }