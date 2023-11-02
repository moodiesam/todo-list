//import FILE from './source';

//to use we run FILE.thingAsWrittenInFile

import homePage from './pages/home';
import createForms from './pages/forms';
import projects from './project-creation';
import toDos from './todo-creation';

import './style.css';

homePage.HomePage;
createForms.makeProjectForm;
createForms.makeToDoForm();

const createNewProject = document.getElementById('createProject');
const createNewToDo = document.getElementById('createToDo');

createNewProject.addEventListener('click', writeProject);
createNewToDo.addEventListener('click', writeToDo);

function writeProject() {
    projects.Projects.addProjectToLibrary();
    projects.Projects.clearProjectLibrary();
    projects.Projects.fillLibrary();
    document.getElementById('newProjectForm').reset();
    //remove to do form and rewrite with new project as option
    createForms.removeToDoForm();
    createForms.makeToDoForm();
    const createNewToDo = document.getElementById('createToDo');
    createNewToDo.addEventListener('click', writeToDo);
}

function writeToDo() {
    toDos.ToDos.addToDoToList();
    // toDos.ToDos.fillToDoLibrary();
    document.getElementById('newToDoForm').reset();
}

