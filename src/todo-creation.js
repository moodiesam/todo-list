import projects from './project-creation';

const ToDos = (() => {
    //will be added to 'toDoList' in given project
    //title, due date, details and notes
    const getActiveProject = () => projects.getActiveProject;
    const todoLibrary = [];

    class ToDo {
        constructor() {
            this.title = document.getElementById('toDo-title').value;
            this.details = document.getElementById('toDo-details').value;
            this.notes = document.getElementById('toDo-notes').value;
        }
    }

    const addToDoToList = (title, details, notes) => {
        
        let newToDo = new ToDo(title, details, notes);
        let selectedProject = document.getElementById('project-options').value;
        projects.Projects.projectLibrary[selectedProject].toDoList.push(newToDo);
        
    }

    function fillToDoLibrary(taskList) {
        clearToDoLibrary();
        for(let i=0; i<taskList.length; i++) {
            //create task card with taskList properties
            newToDoLibraryCard(taskList[i]);
        }
    }

    function newToDoLibraryCard(item) {
        const toDoLibraryDiv = document.getElementById('toDoLibrary');
        const newToDo = document.createElement('button');
        const newToDoTitleDiv = document.createElement('div');
        // const newToDoDetailsDiv = document.createElement('div');
        // const newToDoNotesDiv = document.createElement('div');

        newToDo.classList.add('toDo');
        newToDo.setAttribute('id', 'toDo');
        newToDo.setAttribute('type', 'button');

        //event listener to add selected to-do to display

        newToDoTitleDiv.innerHTML = item.title;
        newToDoTitleDiv.classList.add('toDoTitle');
        newToDo.appendChild(newToDoTitleDiv);

        //add whole card to list

        toDoLibraryDiv.appendChild(newToDo);
    }

    function clearToDoLibrary() {
        const toDoList = document.getElementById('toDoLibrary');
        const toDos = document.querySelectorAll('.toDo');
        toDos.forEach(toDo => toDoList.removeChild(toDo));
    }

    return { getActiveProject,
        addToDoToList,
        todoLibrary,
        fillToDoLibrary,
        clearToDoLibrary }
})();



export default { ToDos }