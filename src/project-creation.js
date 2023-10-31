// create project object
    //incudes title, date due, to-do array


const Projects = (() => {
    const projectLibrary = [];
    let activeProject = projectLibrary[0];
    

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

    return { projectLibrary, 
        addProjectToLibrary,
        activeProject
        };
})();


export default {Projects}

