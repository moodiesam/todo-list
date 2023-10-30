//import FILE from './source';

//to use we run FILE.thingAsWrittenInFile

import createPage from './pages/home';
import projects from './project-creation';

createPage.makePage;

const createNewProject = document.getElementById('createProject');

createNewProject.addEventListener('click', write);

function write() {
    
    projects.Projects.addProjectToLibrary();
    console.log(projects.Projects.projectLibrary);
    document.getElementById('newProjectForm').reset();
}

