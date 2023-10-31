//import FILE from './source';

//to use we run FILE.thingAsWrittenInFile

import createPage from './pages/home';
import projects from './project-creation';
import toDos from './todo-creation';

import './style.css';

createPage.makePage;

const createNewProject = document.getElementById('createProject');
const createNewToDo = document.getElementById('createToDo');

createNewProject.addEventListener('click', writeProject);
createNewToDo.addEventListener('click', writeToDo)

function writeProject() {
    projects.Projects.addProjectToLibrary();
    console.log(projects.Projects.projectLibrary);
    document.getElementById('newProjectForm').reset();
    
}

function writeToDo() {
    toDos.ToDos.addToDoToList();
    console.log(projects.Projects.projectLibrary);
    document.getElementById('newToDoForm').reset();
}

