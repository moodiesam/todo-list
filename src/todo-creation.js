import projects from './project-creation';

const ToDos = (() => {
    //will be added to 'toDoList' in given project
    //title, due date, details and notes
    const getActiveProject = () => projects.getActiveProject;
    const todoLibrary = [];

    class ToDo {
        constructor(title) {
            this.title = document.getElementById('toDo-title').value;
        }
    }

    const addToDoToList = (title) => {
        let newToDo = new ToDo(title);
        let selectedProject = document.getElementById('project-options').value;
        projects.Projects.projectLibrary[selectedProject].toDoList.push(newToDo);
    }

    return { getActiveProject, addToDoToList, todoLibrary }
})();

export default { ToDos }