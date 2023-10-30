// create project object
    //incudes title, date due, to-do titles


const Projects = (() => {
    const projectLibrary = [];
    

    class Project {
        constructor(title, dueDate){
            this.title = document.getElementById('project-title').value;
            this.dueDate = document.getElementById('project-dueDate').value;
        }  
    };

    const addProjectToLibrary = (title, dueDate) => {
        let newProject = new Project(title, dueDate);
        projectLibrary.push(newProject);
    }

    let counter = 0;

    const addOne = () => {
        counter += 1;
        console.log(counter);
    }

    return { projectLibrary, 
        addOne,
        addProjectToLibrary,
        counter };
})();


export default {Projects}