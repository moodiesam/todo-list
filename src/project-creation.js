// create project object
    //incudes title, date due, to-do array
import toDo from './todo-creation';

const Projects = (() => {
    const projectLibrary = [];
    
    

    class Project {
        constructor(title, dueDate){
            this.title = document.getElementById('project-title').value;
            this.dueDate = document.getElementById('project-dueDate').value;
            this.toDoList = [];
        }  
    };

    const addProjectToLibrary = (title, dueDate) => {
        let newProject = new Project(title, dueDate);
        projectLibrary.push(newProject);
    }

    function fillLibrary() {
        for(let i=0; i<projectLibrary.length; i++) {
            
            newProjectLibraryCard(projectLibrary[i]);
        }
    }

    function newProjectLibraryCard(item) {
        const projectLibraryDiv = document.getElementById('projectLibrary');
        const newProject = document.createElement('button');
        const newProjectTitleDiv = document.createElement('div');
        const newProjectDueDateDiv = document.createElement('div');

        newProject.classList.add('project');
        newProject.setAttribute('id', projectLibrary.indexOf(item));
        newProject.setAttribute('type', 'button');
        
        //event listener to add selected to-do-list to display
        newProject.addEventListener('click', () => {
            let taskList = [];
            taskList = projectLibrary[projectLibrary.indexOf(item)].toDoList;
            toDo.ToDos.fillToDoLibrary(taskList);
        });

        //project title display
        newProjectTitleDiv.innerHTML = 'Project: ' + item.title;
        newProjectTitleDiv.classList.add('projectTitle');
        newProject.appendChild(newProjectTitleDiv);

        //project due date display

        newProjectDueDateDiv.innerHTML = 'Date Due: ' + item.dueDate;
        newProjectDueDateDiv.classList.add('projectDueDate');
        newProject.appendChild(newProjectDueDateDiv);

        //add whole card to list

        projectLibraryDiv.appendChild(newProject);

    }

    function clearProjectLibrary() {
        const projectList = document.getElementById('projectLibrary');
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => projectList.removeChild(project));
    }


    return { projectLibrary, 
        addProjectToLibrary,
        newProjectLibraryCard,
        fillLibrary,
        clearProjectLibrary
        };
})();


export default {Projects}

