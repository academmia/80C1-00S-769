// nodejs code (fara apelare API Browser)

interface IProject {
    id: number;
    subject: string;
    description?: string;
}

let a = 100;
let b = 200;  // debugger
let c = a + b;

interface IProject {
    id: number;
    subject: string;
    description?: string;
}

function fetchProjects(): Promise<IProject[]> {
    let projects = [
        { id: 1, subject: 'Project One', },
        { id: 2, subject: 'Project Two', description: 'Desc Project Two' },
        { id: 3, subject: 'Project Three', description: 'Desc Project Three' }
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(projects)
        }, 2000);
    });

}

const getProjectsByName = async (name: string): Promise<ITask[]> => {
    // debugger;
    const allTasks = await fetchTasks();
    return allTasks.filter(task => task.subject.includes(name));

}

async function myProjects() {
    let result = await getProjectsByName('Seven');
    return result
}

console.log(myProjects());
